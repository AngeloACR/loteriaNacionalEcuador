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
      let response = {
        resultadosLoteria,
        premiosLoteria,
        ganadoresLoteria,
        resultadosLotto,
        premiosLotto,
        ganadoresLotto,
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
  getPega3: async (req, res) => {
    try {
      const files = (await fs.readdir("/home/lottoweb/pega3")).map((item) => {
        return {
          sorteo: parseInt(item.split(".")[0].split("-")[1]),
          tipoArchivo: item.split(".")[0].split("-")[0],
          ruta: `https://ventas-api.loteria.com.ec/uploads/pega3/${item}`,
          nombre: item.split(".")[0],
        };
      });

      let boletines = files.filter((item) => item.tipoArchivo === "T");
      boletines.sort((a, b) => b.sorteo - a.sorteo);
      let ultimosResultados = files
        .filter((item) => item.tipoArchivo === "U")
        .sort((a, b) => b.sorteo - a.sorteo);
      let sorteos = files
        .reduce((prev, curr) => {
          let index = prev.findIndex((item) => item === curr.sorteo);
          if (index === -1) prev.push(curr.sorteo);
          return prev;
        }, [])
        .sort((a, b) => b - a);
      res.status(200).json({ boletines, ultimosResultados, sorteos });
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  getBingazo: async (req, res) => {
    try {
      const files = (await fs.readdir("/home/lottoweb/bingazo")).map((item) => {
        return {
          sorteo: parseInt(item.split(".")[0].split("-")[1]),
          tipoArchivo: item.split(".")[0].split("-")[0],
          ruta: `https://ventas-api.loteria.com.ec/uploads/bingazo/${item}`,
          nombre: item.split(".")[0],
        };
      });

      let boletines = files.filter((item) => item.tipoArchivo === "T");
      boletines.sort((a, b) => b.sorteo - a.sorteo);
      let ultimosResultados = files
        .filter((item) => item.tipoArchivo === "U")
        .sort((a, b) => b.sorteo - a.sorteo);
      let sorteos = files
        .reduce((prev, curr) => {
          let index = prev.findIndex((item) => item === curr.sorteo);
          if (index === -1) prev.push(curr.sorteo);
          return prev;
        }, [])
        .sort((a, b) => b - a);
      res.status(200).json({ boletines, ultimosResultados, sorteos });
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
