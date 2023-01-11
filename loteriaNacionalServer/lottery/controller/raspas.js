const Raspa = require("../model/raspa");
//const { apiGanadoresLogger } = require("../../config/logging");

/*************************** ACREDITACION DE PREMIOS ************************/

const raspasController = {
  crearRaspa: async (req, res) => {
    try {
      let response
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        errorMessage: e.message,
      };
      res.status(400).json(response);
    }
  },

  getRaspa: async (req, res) => {
    try {
      let response;
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

module.exports = raspasController;
