const psdAuth = require("../../psdLoteria/auth");
const CodigoPromocional = require("../models/main");
const { codigosPromocionalesLogger } = require("../logging");

const mainController = {
  setCode: async (totalVenta, personaId, ventaId, ip) => {
    try {
      let lotteryToken = (await psdAuth.autenticarUsuario()).token;
      let userData = await psdAuth.consultarDatosUsuario(
        lotteryToken,
        personaId,
        ip
      );
      let cantidadDeCodigos = 0;
      if (totalVenta >= 5 && totalVenta < 10) {
        cantidadDeCodigos = 1;
      } else if (totalVenta >= 10 && totalVenta < 15) {
        cantidadDeCodigos = 3;
      } else if (totalVenta >= 15) {
        cantidadDeCodigos = 5;
      }
      let codeAux = [];
      for (let i = 0; i < cantidadDeCodigos; i++) {
        let codigo = await CodigoPromocional.getCode();
        let codigoPromocional = await CodigoPromocional.updateCode(
          codigo,
          ventaId,
          userData.cedula,
          userData.correo,
          userData.telefono,
        );
        codeAux.push(codigoPromocional);
      }
      let response = { codigos: codeAux };
      return response;
    } catch (e) {
      codigosPromocionalesLogger.error("generate.error", {
        errorMessage: e.message,
        errorData: e.data,
      });
      let response = {
        status: "error",
        message: e.message,
      };
      throw e;
    }
  },
  populate: async (req, res) => {
    try {
      let response = await CodigoPromocional.populate();
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
  getCodes: async (req, res) => {
    try {
      let ventaId = req.body.ventaId
      let response = await CodigoPromocional.getCodes(ventaId);
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
  setCodeHttp: async (req, res) => {
    try {
      let ip = req.headers["x-forwarded-for"];
      let response = await mainController.setCode(req.body.totalVenta,req.body.personaId,req.body.ventaId, ip);
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
};

module.exports = mainController;
