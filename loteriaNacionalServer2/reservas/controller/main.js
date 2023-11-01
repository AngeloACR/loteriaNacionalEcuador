const psdReservas = require("../../psdLoteria/reservas");
const { reservasLogger } = require("../logging");
var { apiError } = require("../errors");
var errorHandler = require("../errors").errorHandler;

/*************************** GESTION DE RESERVAS ************************/

const ventasController = {
  reservarBoletos: async (req, res) => {
    try {
      //return res.status(200).json("409976");
      reservasLogger.silly("reservarBoletos");
      let ip = req.headers["x-forwarded-for"];

      let lotteryToken = req.body.lotteryToken;
      let user = req.body.user;
      let loteria = req.body.loteria ? req.body.loteria : [];
      let lotto = req.body.lotto ? req.body.lotto : [];
      let pozo = req.body.pozo ? req.body.pozo : [];
      let pozoRevancha = req.body.pozoRevancha ? req.body.pozoRevancha : [];
      let bingazo = req.body.bingazo ? req.body.bingazo : [];
      let reservaId = req.body.reservaId ? req.body.reservaId : 0;

      let response = await psdReservas.reservarCombinaciones(
        loteria,
        lotto,
        pozo,
        pozoRevancha,
        bingazo,
        lotteryToken,
        reservaId,
        user,
        ip
      );

      let logData = {
        data: {
          loteria,
          lotto,
          pozo,
          pozoRevancha,
          bingazo,
          lotteryToken,
          reservaId,
          user,
          ip,
        },
        response,
        function: "psdReservas.reservarCombinaciones",
      };
      reservasLogger.info("reservarBoletos.loteria", logData);
      res.status(200).json(response);
    } catch (e) {
      reservasLogger.error("reservarBoletos.error", {
        errorMessage: e.message,
      });
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
  eliminarBoletosDeReserva: async (req, res) => {
    try {
      reservasLogger.silly("eliminarBoletosDeReserva");
      let ip = req.headers["x-forwarded-for"];

      let lotteryToken = req.body.lotteryToken;
      let user = req.body.user;
      let loteria = req.body.loteria ? req.body.loteria : [];
      let lotto = req.body.lotto ? req.body.lotto : [];
      let pozo = req.body.pozo ? req.body.pozo : [];
      let pozoRevancha = req.body.pozoRevancha ? req.body.pozoRevancha : [];
      let bingazo = req.body.bingazo ? req.body.bingazo : [];
      let reservaId = req.body.reservaId ? req.body.reservaId : 0;
      let finalResponse = await psdReservas.eliminarReservas(
        loteria,
        lotto,
        pozo,
        pozoRevancha,
        bingazo,
        lotteryToken,
        reservaId,
        user,
        ip
      );

      let logData = {
        data: {
          loteria,
          lotto,
          pozo,
          pozoRevancha,
          bingazo,
          lotteryToken,
          reservaId,
          user,
          ip,
        },
        response: finalResponse,
        function: "psdReservas.eliminarReservas",
      };
      reservasLogger.info("eliminarBoletosDeReserva.loteria", logData);
      res.status(200).json(finalResponse);
    } catch (e) {
      reservasLogger.error("eliminarBoletosDeReserva.error", {
        errorMessage: e.message,
      });
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

module.exports = ventasController;
