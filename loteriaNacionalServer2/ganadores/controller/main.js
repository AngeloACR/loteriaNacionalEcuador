const exalogicPrize = require("../../exalogic/prize");
const alboranPrize = require("../../alboran/prize");
const psdAuth = require("../../psdLoteria/auth");
const psdVentas = require("../../psdLoteria/ventas");
const Correos = require("../../correos/ganadores");
const Ganadores = require("../models/main");
const { ganadoresLogger } = require("../logging");
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

  pagarLoteria: async (sorteo) => {
    try {
      ganadoresLogger.silly("pagarLoteria");
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
          let prizeDetails = [
            {
              lotteryType: ganador.tipoLoteria,
              personalId: ganador.personaId,
              drawNumber: parseInt(ganador.numeroSorteo),
              drawDate: ganador.fechaCaducidad,
              prize: ganador.valorPremio,
              prizeWithDiscount: ganador.valorPremioDescuento,
              combinationC1: ganador.combinacion1,
              combinationC2: ganador.combinacion2,
              combinationC3: ganador.combinacion3,
              combinationC4: ganador.combinacion4,
              combinationC5: ganador.combinacion5,
              fractions: `[${ganador.fraction}]`,
              prizeDescription: ganador.descripcionPremio,
              prizeCode: ganador.codigoPremio,
              ticketId: ganador.ventaId,
              combinationId: parseInt(ganador.boletoId),
            },
          ];
          let data = {
            prizeDetails,
            transactionId: Date.now(),
          };
          let aux = await alboranPrize.payLottery(data);
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
      ganadoresLogger.info("pagarLoteria.api", logData);
      return response;
    } catch (e) {
      ganadoresLogger.error("pagarLoteria.error", {
        errorMessage: e.message,
      });
      throw new Error(e.message);
    }
  },
  procesarPremioEspecies: async (ganador) => {
    try {
      ganadoresLogger.silly("procesarPremioEspecies");

      let lotteryToken = (await psdAuth.autenticarUsuarioVenta()).token;
      let numeroDeRetiro = Date.now(); //EVALUAR PONER ESTE NUMERO COMO CORRELATIVO
      let numeroDeTransaccion = Date.now();
      let ip = ipTool.address();
      let cliente = await psdAuth.consultarDatosUsuario(
        lotteryToken,
        ganador.personaId,
        ip
      );
      let ordenId = await psdVentas.agregarOrdenPago(
        ganador.ventaId,
        ganador.tipoLoteria,
        ganador.numeroSorteo,
        ganador.boletoId,
        ganador.codigoPremio.split("-")[1],
        ganador.valorPremio,
        lotteryToken,
        numeroDeRetiro,
        numeroDeTransaccion,
        cliente.identificacion,
        ip
      );
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
      ganadoresLogger.info("procesarPremioEspecies.api", logData);
      return {
        ordenId,
        cliente,
      };
    } catch (e) {
      ganadoresLogger.error("procesarPremioEspecies.error", {
        errorMessage: e.message,
      });
      throw new Error(e.message);
    }
  },
  getGanador: async (req, res) => {
    try {
      let ticketId = req.body.ticketId;
      let response = await Ganadores.getGanador(ticketId);
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
      let response = await Ganadores.getGanadores(req.body.data);
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
