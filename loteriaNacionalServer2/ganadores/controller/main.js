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
      let response = await ganadoresController.pagarLoteria(sorteo, false);
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        errorMessage: e.message,
      };
      res.status(400).json(response);
    }
  },

  pagarLoteria: async (sorteo, instantWin) => {
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
          let transactionId = Date.now();
          let checkSum = (98 - ((transactionId * 100) % 97)) % 97;
          let validationCode = parseInt(`${transactionId}${checkSum.toString().padStart(2,"0")}`);
          let prizesNumber = ganadores.filter(
            (item) =>
              item.ventaId == ganador.ventaId &&
              !item.codigoPremio.includes("INSTANTANEA")
          ).length;
          let prizeDetails = [
            {
              lotteryType: ganador.tipoLoteria,
              instantWin,
              personalId: parseInt(ganador.personaId),
              drawNumber: parseInt(ganador.numeroSorteo),
              drawDate: ganador.fechaCaducidad,
              prize: parseFloat(ganador.valorPremio).toFixed(2),
              prizeWithDiscount: parseFloat(
                ganador.valorPremioDescuento
              ).toFixed(2),
              combinationC1: ganador.combinacion1,
              combinationC2: ganador.combinacion2,
              combinationC3: ganador.combinacion3,
              combinationC4: ganador.combinacion4,
              combinationC5: ganador.combinacion5,
              prizeDescription: ganador.descripcionPremio,
              prizeCode: ganador.codigoPremio,
              ticketId: ganador.ventaId,
              combinationId: parseInt(ganador.boletoId),
              validationCode: `${validationCode}`,
            },
          ];
          if (
            parseInt(ganador.tipoLoteria) == 1 ||
            parseInt(ganador.tipoLoteria) == 14
          ) {
            prizeDetails[0]["fractions"] = JSON.stringify([
              parseInt(ganador.fraccion),
            ]);
          }
          let data = {
            prizesNumber,
            prizeDetails,
            transactionId: `${transactionId}`,
          };
          let aux = await alboranPrize.payLottery(data, "/PayPrize");
          if (aux.resultCode >= 0) {
            ganador.acreditado = true;
          }
          response.push(aux);
          let logAux = {
            input: data,
            type: "DIN",
            output: aux,
          };
          logData.data.push(logAux);
        } else if (ganador.tipoPremio == "ESP") {
          let ordenResponse = await ganadoresController.procesarPremioEspecies(
            ganador
          );

          ganador.ordenDePagoId = ordenResponse.ordenId;
          response.push(ordenResponse);
          let logAux = {
            input: ganador.combinacion1,
            type: "ESP",
            output: orderResponse,
          };
          logData.data.push(logAux);
        }
        await ganador.save();
      }
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
