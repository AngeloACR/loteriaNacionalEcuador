const Descuento = require("../models/main");
const { descuentosLogger } = require("../logging");

/*************************** GESTION DE RESERVAS ************************/

const ventasController = {
  create: async (req, res) => {
    try {
      descuentosLogger.silly("create");
      let descuento = await Descuento.crear(req.body);
      let logData = {
        data: req.body,
        response: descuento,
        function: "create",
      };
      descuento.validateIfActive()
      descuentosLogger.info("create.loteria", logData);
      res.status(200).json(descuento);
    } catch (e) {
      descuentosLogger.error("create.error", {
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
  getAll: async (req, res) => {
    try {
      descuentosLogger.silly("getAll");
      let descuentos = await Descuento.getAll();
      let logData = {
        data: {},
        response: descuentos,
        function: "getAll",
      };
      descuentosLogger.info("getAll.loteria", logData);
      res.status(200).json(finalResponse);
    } catch (e) {
      descuentosLogger.error("getAll.error", {
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
  getActives: async (req, res) => {
    try {
      descuentosLogger.silly("getActives");
      let descuentos = await Descuento.getActives();
      let logData = {
        data: {},
        response: descuentos,
        function: "getActives",
      };
      descuentosLogger.info("getActives.loteria", logData);
      res.status(200).json(finalResponse);
    } catch (e) {
      descuentosLogger.error("getActives.error", {
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
  validateActives: async () => {
    try {
      descuentosLogger.silly("validateActives");
      let descuentos = await Descuento.getAll();
      let aux = descuentos.map((descuento) => descuento.validateIfActive());
      await Promise.allSettled(aux);
      let logData = {
        data: {},
        response: descuentos,
        function: "getAllvalidateActives",
      };
      descuentosLogger.info("validateActives.loteria", logData);
    } catch (e) {
      descuentosLogger.error("validateActives.error", {
        errorMessage: e.message,
      });
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      throw new Error(e.message);
    }
  },
};

module.exports = ventasController;
