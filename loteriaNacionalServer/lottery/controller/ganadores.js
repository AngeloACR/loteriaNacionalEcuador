const Wallet = require("../../exalogic/controller/wallet");
const Ganadores = require("../model/ganadoresWeb");
const { apiGanadoresLogger } = require("../../config/logging");

/*************************** ACREDITACION DE PREMIOS ************************/

const ganadoresController = {
  pagarLoteriaHttp: async (req, res) => {
    try {
      let sorteo = req.body.sorteo
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
      apiVentasLogger.silly("payLottery");
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
      apiVentasLogger.info("payLottery.exalogic", logData);
      return response;
    } catch (e) {
      apiVentasLogger.error("payLottery.error", {
        errorMessage: e.message,
      });
      throw new Error(e.message);
    }
  },
  pagarLoteria: async (sorteo) => {
    try {
      apiVentasLogger.silly("pagarLoteria");
      let query = {'numeroSorteo': `${sorteo}`}
      let ganadores = await Ganadores.find(query);
      let length = ganadores.length;
      let response = [];
      let logData = {
        data: [],
        response: [],
        function: "ganadoresController.payLottery",
      };
      for (let i = 0; i < length; i++) {
        const ganador = ganadores[i];

        if (!ganador.acreditado && ganador.tipoPremio == "DIN") {
          let payLine = `<R PE="${ganador.personaId}" J="${
            ganador.tipoLoteria
          }" S="${ganador.numeroSorteo}" FC="${ganador.fechaCaducidad}" C="${
            ganador.combinacion1
          }" C2="${ganador.combinacion2}" C3="${ganador.combinacion3}" C4="${ganador.combinacion4}" C5="${ganador.combinacion5}" F="${
            ganador.fraccion
          }" B="${ganador.boletoId}" P="${
            ganador.codigoPremio.split("-")[1]
          }" N="${ganador.descripcionPremio.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}" VP="${ganador.valorPremio}" VD="${
            ganador.valorPremioDescuento
          }" TP="${ganador.tipoPremio}" RT="${ganador.requiereTestimonio}" V="${
            ganador.ventaId
          }"/>`;
          let data = {
            payLine,
            transactionId: Date.now(),
          };
          let aux = await Wallet.payLottery(data);
          if (aux.resultCode >= 0) {
            ganador.acreditado = true;
            await ganador.save();
          }
          response.push(aux);
          logData.data.push(data);
        }
      }
      logData.response = response;
      apiVentasLogger.info("pagarLoteria.api", logData);
      return response;
    } catch (e) {
      apiVentasLogger.error("pagarLoteria.error", {
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
};

module.exports = ganadoresController;
