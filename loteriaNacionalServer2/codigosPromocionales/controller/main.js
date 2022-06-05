const psdAuth = require("../../psdLoteria/auth");
const CodigoPromocional = require("../models/main");
const { codigosPromocionalesLogger } = require("../logging");

const mainController = {
  setCode: async (req, res) => {
    try {
      let ip = req.headers["x-forwarded-for"];
      let lotteryToken = req.body.lotteryToken;
      let user = req.body.user;
      let ventaId = req.body.ventaId;
      let codigo = await CodigoPromocional.generate();
      let userData = await psdAuth.consultarDatosUsuario(
        lotteryToken,
        user,
        ip
      );
      let codigoPromocional = await CodigoPromocional.addCodigo({
        codigo,
        ventaId,
        cedula: userData.cedula,
        correo: userData.correo,
        telefono: userData.telefono
      })
      let response = { code, userData };
      res.status(200).json(response);
    } catch (e) {
      codigosPromocionalesLogger.error("generate.error", {
        errorMessage: e.message,
        errorData: e.data,
      });
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
};

module.exports = mainController;
