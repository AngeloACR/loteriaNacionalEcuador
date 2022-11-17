const alboranAuth = require("../../alboran/auth");
const psdAuth = require("../../psdLoteria/auth");
const fs = require("fs").promises;

const mainController = {
  getNewFiles: async (req, res) => {
    try {
      const files = (await fs.readdir("/home/lottoweb/resultados")).map(
        (item) => {
          return {
            sorteo: parseInt(item.split(".")[0].split("-")[2]),
            tipoLoteria: parseInt(item.split(".")[0].split("-")[1]),
            tipoArchivo: item.split(".")[0].split("-")[0],
          };
        }
      );
      let resultadosLoteria = files
        .filter((item) => {
          return item.tipoArchivo == "BOLPRE" && item.tipoLoteria == 1;
        })
        .sort((a, b) => b.sorteo - a.sorteo)[0].sorteo;
      let premiosLoteria = files
        .filter((item) => {
          return item.tipoArchivo == "PREM" && item.tipoLoteria == 1;
        })
        .sort((a, b) => a.sorteo - b.sorteo)[0].sorteo;
      let ganadoresLoteria = files
        .filter((item) => {
          return item.tipoArchivo == "GANWEB" && item.tipoLoteria == 1;
        })
        .sort((a, b) => a.sorteo - b.sorteo)[0].sorteo;
      let resultadosLotto = files
        .filter((item) => {
          return item.tipoArchivo == "BOLPRE" && item.tipoLoteria == 2;
        })
        .sort((a, b) => a.sorteo - b.sorteo)[0].sorteo;
      let premiosLotto = files
        .filter((item) => {
          return item.tipoArchivo == "PREM" && item.tipoLoteria == 2;
        })
        .sort((a, b) => a.sorteo - b.sorteo)[0].sorteo;
      let ganadoresLotto = files
        .filter((item) => {
          return item.tipoArchivo == "GANWEB" && item.tipoLoteria == 2;
        })
        .sort((a, b) => a.sorteo - b.sorteo)[0].sorteo;
      let resultadosPozo = files
        .filter((item) => {
          return item.tipoArchivo == "BOLPRE" && item.tipoLoteria == 5;
        })
        .sort((a, b) => a.sorteo - b.sorteo)[0].sorteo;
      let premiosPozo = files
        .filter((item) => {
          return item.tipoArchivo == "PREM" && item.tipoLoteria == 5;
        })
        .sort((a, b) => a.sorteo - b.sorteo)[0].sorteo;
      let ganadoresPozo = files
        .filter((item) => {
          return item.tipoArchivo == "GANWEB" && item.tipoLoteria == 5;
        })
        .sort((a, b) => a.sorteo - b.sorteo)[0].sorteo;
      let resultadosMillonaria = files
        .filter((item) => {
          return item.tipoArchivo == "BOLPRE" && item.tipoLoteria == 14;
        })
        .sort((a, b) => a.sorteo - b.sorteo)[0].sorteo;
      let premiosMillonaria = files
        .filter((item) => {
          return item.tipoArchivo == "PREM" && item.tipoLoteria == 14;
        })
        .sort((a, b) => a.sorteo - b.sorteo)[0].sorteo;
      let ganadoresMillonaria = files
        .filter((item) => {
          return item.tipoArchivo == "GANWEB" && item.tipoLoteria == 14;
        })
        .sort((a, b) => a.sorteo - b.sorteo)[0].sorteo;

      let response = {
        resultadosLoteria,
        premiosLoteria,
        ganadoresLoteria,
        resultadosLotto,
        premiosLotto,
        ganadoresLotto,
        resultadosMillonaria,
        premiosMillonaria,
        ganadoresMillonaria,
        resultadosPozo,
        premiosPozo,
        ganadoresPozo,
      };

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
