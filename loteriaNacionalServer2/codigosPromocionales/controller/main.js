const psdAuth = require("../../psdLoteria/auth");
const CodigoPromocional = require("../models/main");
const Ventas = require("../../ventas/models/main");
const emailCodigosPromocionales = require("../../correos/codigoPromocional");
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
      if (totalVenta >= 5.0 && totalVenta < 10.0) {
        cantidadDeCodigos = 1;
      } else if (totalVenta >= 10.0 && totalVenta < 15.0) {
        cantidadDeCodigos = 3;
      } else if (totalVenta >= 15.0) {
        cantidadDeCodigos = 5;
      }
      if (!cantidadDeCodigos) {
        return [];
      }
      let codigos = await CodigoPromocional.getCode(cantidadDeCodigos);
      let codigosPromocionales = await CodigoPromocional.updateCode(
        codigos,
        ventaId,
        userData.identificacion,
        userData.correo,
        userData.telefono,
        userData.nombre
      );
      let info = await emailCodigosPromocionales.send(
        userData.correo,
        userData.nombre,
        ventaId,
        codigos
      );
      console.log(info);
      return codigosPromocionales;
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
      let ventaId = req.body.ventaId;
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
      let response = await mainController.setCode(
        req.body.totalVenta,
        req.body.personaId,
        req.body.ventaId,
        ip
      );
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  getCodeCsv: async () => {
    try {
      let response = await CodigoPromocional.getCodigosCSV();
      return response;
    } catch (error) {
      throw error;
    }
  },
  restoreCedulas: async () => {
    try {
      let lotteryToken = (await psdAuth.autenticarUsuario()).token;
      let codigos = await CodigoPromocional.find({ asignado: true });

      /*let venta = await Ventas.findOne({ ventaId: codigos[182].ventaId });
       let aux = await psdAuth.consultarDatosUsuario2(
        lotteryToken,
        venta.user,
        "192.168.1.1"
      );
      return aux; */
      let data = [];
      for (let i = 0; i < codigos.length; i++) {
        const codigo = codigos[i];
        let venta = await Ventas.findOne({ ventaId: codigo.ventaId });
        let aux = await psdAuth.consultarDatosUsuario2(
          lotteryToken,
          venta.user,
          "192.168.1.1"
        );
        codigo.cedula = venta.user;
        codigo.nombre = aux.nombre;
        await codigo.save();
        data.push(aux);
      }
      return data;
    } catch (error) {
      throw error;
    }
  },
  getCodeCsvHttp: async (req, res) => {
    try {
      let ip = req.headers["x-forwarded-for"];
      let response = await mainController.getCodeCsv();
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  getTxt: async (req, res) => {
    try {
      let ip = req.headers["x-forwarded-for"];
      let response = await mainController.getCodeCsv();

      res.setHeader({"Content-Disposition":`attachment; filename=\"Lista de códigos al${getCurrentTimeStamp()}.txt\"`});
      res.send(response.values.join(""));
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
};
function getCurrentTimeStamp() {
  let date = new Date(Date.now()).toLocaleString("es-EC", {
    timeZone: "America/Bogota",
  });
  let a = date.split(/\D/);
  let y = a[2];
  let m = a[1].length === 2 ? a[1] : `0${a[1]}`;
  let d = a[0].length === 2 ? a[0] : `0${a[0]}`;
  let n = `${y}-${d}-${m} ${a[4]}:${a[5]}:${a[6]}.000`;
  //let n = `${y}-${m}-${d} ${a[3]}:${a[4]}:${a[5]}.000`;
  return n;
}

module.exports = mainController;
