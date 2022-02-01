const Wallet = require("../../exalogic/controller/wallet");
const Ventas = require("../../loterianacional/controller/ventas");
const Correos = require("../../correos/ganadores");
const Ganadores = require("../model/ganadoresWeb");
const { apiGanadoresLogger } = require("../../config/logging");
const ipTool = require("ip");

/*************************** ACREDITACION DE PREMIOS ************************/

const ganadoresController = {
  pagarLoteriaHttp: async (req, res) => {
    try {
      let sorteo = req.body.sorteo;
      let response = await ganadoresController.pagarLoteria(sorteo);
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        errorMessage: e.message,
      };
      res.status(400).json(response);
    }
  },
  pruebaCorreo: async (req, res) => {
    try {
      let response = await Correos.sendEmail(
        "angeloCrincoli91@gmail.com",
        "Angelo",
        941
      );
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        errorMessage: e.message,
      };
      res.status(400).json(response);
    }
  },
  pruebaConsulta: async (req, res) => {
    try {
      let lotteryToken = (await Ventas.autenticarUsuario()).token;
      let response = await Ventas.consultarDatosUsuario(
        lotteryToken,
        993,
        "192.168.1.1"
      );
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        errorMessage: e.message,
      };
      res.status(400).json(response);
    }
  },
  pruebaOrden: async (req, res) => {
    try {
      let lotteryToken = (await Ventas.autenticarUsuario()).token;
      let datos = await Ventas.consultarDatosUsuario(
        lotteryToken,
        43011,
        "192.168.1.1"
      );
      let ordenId = await Ventas.agregarOrdenPago(
        "743771",
        "1",
        "6691",
        "1105018",
        "1",
        "200000.000000",
        lotteryToken,
        Date.now(),
        Date.now(),
        datos.identificacion,
        "192.168.1.1"
      );
      res.status(200).json(ordenId);
    } catch (e) {
      let response = {
        status: "error",
        errorMessage: e.message,
      };
      res.status(400).json(response);
    }
  },

  payLottery: async (data) => {
    try {
      /*
            {
                "transactionId": "2223846696262170",
                "payLine": :"<R PE="236891" J="5" S="935" FC="2021-10-05 23:59" C="0523945"
C2="02,03,04,05,06,09,10,11,13,15,17,18,24,25" C3="15" F="0" B="501659" P="6" N="MASCOTA - REINTEGRO"
VP="1.000000" VD="1.000000" TP="DIN" RT="0" V="2861538"/>"
            }
            
            */
      apiGanadoresLogger.silly("payLottery");
      let operationTimeStamp = new Date(Date.now())
        .toISOString()
        .replace("T", " ")
        .replace("Z", "");
      let exaData = {
        command: "payTicketLottery",
        systemCode: "1",
        transactionId: data.transactionId,
        language: "en",
        currency: "USD",
        operationTimeStamp: operationTimeStamp,
        payLine: data.payLine,
      };
      let response = await Wallet.payLottery(exaData);
      let logData = {
        data: exaData,
        response,
        function: "Wallet.payLottery",
      };
      apiGanadoresLogger.info("payLottery.exalogic", logData);
      return response;
    } catch (e) {
      apiGanadoresLogger.error("payLottery.error", {
        errorMessage: e.message,
      });
      throw new Error(e.message);
    }
  },
  pagarLoteria: async (sorteo) => {
    try {
      apiGanadoresLogger.silly("pagarLoteria");
      let query = { numeroSorteo: `${sorteo}` };
      let ganadores = await Ganadores.find(query);
      let length = ganadores.length;
      let response = [];
      let logData = {
        data: [],
        response: [],
        function: "ganadoresController.pagarLoteria",
      };
      for (let i = 0; i < length; i++) {
        const ganador = ganadores[i];

        if (!ganador.acreditado && ganador.tipoPremio == "DIN") {
          let payLine = `<R PE="${ganador.personaId}" J="${
            ganador.tipoLoteria
          }" S="${ganador.numeroSorteo}" FC="${ganador.fechaCaducidad}" C="${
            ganador.combinacion1
          }" C2="${ganador.combinacion2}" C3="${ganador.combinacion3}" C4="${
            ganador.combinacion4
          }" C5="${ganador.combinacion5}" F="${ganador.fraccion}" B="${
            ganador.boletoId
          }" P="${
            ganador.codigoPremio.split("-")[1]
          }" N="${ganador.descripcionPremio
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")}" VP="${
            ganador.valorPremio
          }" VD="${ganador.valorPremioDescuento}" TP="${
            ganador.tipoPremio
          }" RT="${ganador.requiereTestimonio}" V="${ganador.ventaId}"/>`;
          let data = {
            payLine,
            transactionId: Date.now(),
          };
          let aux = await Wallet.payLottery(data);
          if (aux.resultCode >= 0) {
            ganador.acreditado = true;
          }
          response.push(aux);
          logData.data.push(data);
        } else if (ganador.tipoPremio == "ESP") {
          let ordenResponse = await ganadoresController.procesarPremioEspecies(
            ganador
          );

          ganador.ordenDePagoId = ordenResponse.ordenId;
          response.push(ordenResponse);
        }
        await ganador.save();
      }
      logData.response = response;
      apiGanadoresLogger.info("pagarLoteria.api", logData);
      return response;
    } catch (e) {
      apiGanadoresLogger.error("pagarLoteria.error", {
        errorMessage: e.message,
      });
      throw new Error(e.message);
    }
  },
  crearGanador: async (data) => {
    try {
      let ganador = new Ganadores(data);
      let response = await ganador.save();
      return response;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  procesarPremioEspecies: async (ganador) => {
    try {
      apiGanadoresLogger.silly("procesarPremioEspecies");

      let lotteryToken = (await Ventas.autenticarUsuario()).token;
      let numeroDeRetiro = Date.now(); //EVALUAR PONER ESTE NUMERO COMO CORRELATIVO
      let numeroDeTransaccion = Date.now();
      let ip = ipTool.address();
      let cliente = await Ventas.consultarDatosUsuario(
        lotteryToken,
        ganador.personaId,
        ip
      );
      let ordenId = "941";
      /*       let ordenId = await Ventas.agregarOrdenPago(
        ganador.ventaId,
        ganador.tipoLoteria,
        ganador.numeroSorteo,
        ganador.boletoId,
        ganador.codigoPremio.split("-")[1],
        ganador.valorPremio,
        lotteryToken,
        numeroDeRetiro,
        numeroDeTransaccion,
        cliente,
        ip
      ); */
      let logData = {
        data: [],
        response: [],
        function: "procesarPremioEspecies.pagarLoteria",
      };
      let data = {
        ventaId: ganador.ventaId,
        tipoLoteria: ganador.tipoLoteria,
        numeroSorteo: ganador.numeroSorteo,
        boletoId: ganador.boletoId,
        codigoPremio: ganador.codigoPremio,
        personaId: ganador.personaId,
        valorPremio: ganador.valorPremio,
        ordenId,
        cliente: cliente.identificacion,
        transactionId: Date.now(),
      };

      /* GENERAR CORREO */
      let correoResponse = await Correos.sendEmail(
        cliente.correo,
        cliente.nombre,
        ordenId
      );

      let aux = {
        ordenId,
        cliente,
      };
      logData.response.push(aux);
      logData.data.push(data);
      apiGanadoresLogger.info("procesarPremioEspecies.api", logData);
      return {
        ordenId,
        cliente,
      };
    } catch (e) {
      apiGanadoresLogger.error("procesarPremioEspecies.error", {
        errorMessage: e.message,
      });
      throw new Error(e.message);
    }
  },
  getGanador: async (req, res) => {
    try {
      let ticketId = req.body.ticketId;
      let query = { ventaId: ticketId };
      let ganador = await Ganadores.find(query);
      let response;
      if (ganador && ganador.length) {
        response = {
          status: true,
          values: ganador,
        };
      } else {
        response = {
          status: false,
        };
      }
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        errorMessage: e.message,
      };
      res.status(400).json(response);
    }
  },
  getGanadores: async (req, res) => {
    try {
      let data = req.body.data;
      let response = [];
      for (let index = 0; index < data.length; index++) {
        const element = data[index];

        let ventaId = element.ventaId;
        let query = { ventaId: ventaId };
        let ganadorData = await Ganadores.find(query);
        let ganadorFlag = ganadorData && ganadorData.length;
        let info = {
          isGanador: ganadorFlag,
          detalles: ganadorData,
          ventaId,
          reservaId: element.reservaId,
        };
        response.push(info);
      }
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
};

module.exports = ganadoresController;
