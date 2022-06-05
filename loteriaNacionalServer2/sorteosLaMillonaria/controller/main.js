const psdResultados = require("../../psdLoteria/resultados");
const psdSorteos = require("../../psdLoteria/sorteos");
const psdVentas = require("../../psdLoteria/ventas");
const Results = require("../models/main");
const Premios = require("../models/premio");
const Sorteos = require("../models/sorteo");
const config = require("../../environments/production");
Results.on("index", function (err) {
  if (err) {
    console.error("User index error: %s", err);
  } else {
    console.info("User indexing complete");
  }
});
/*************************** CONSULTA DE RESULTADOS************************/

const mainController = {
  validateSorteo: async (sorteo) => {
    try {
      let status = (await Results.getResultadosBySorteo(sorteo)).status;

      if (!status)
        throw new Error(
          "La información del sorteo no esta disponible en este momento, por favor vuelve a intentarlo más tarde"
        );
      return status;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  searchSorteosDisponibles: async (req, res) => {
    try {
      let ip = req.headers["x-forwarded-for"];
      let lotteryToken = req.query.lotteryToken;
      let user = req.query.user;
      let finalResponse = await psdSorteos.consultarSorteosDisponibles(
        14,
        lotteryToken,
        user,
        ip
      );

      res.status(200).json(finalResponse);
    } catch (e) {
      apiVentasLogger.error("searchSorteosDisponibles.error", {
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
  searchSeries: async (req, res) => {
    try {
      let ip = req.headers["x-forwarded-for"];
      let lotteryToken = req.query.lotteryToken;
      let user = req.query.user;
      let sorteo = req.query.sorteo;
      let finalResponse = await psdVentas.recuperarSeriesLaMillonaria(
        lotteryToken,
        user,
        sorteo,
        ip
      );

      res.status(200).json(finalResponse);
    } catch (e) {
      apiVentasLogger.error("searchSorteosDisponibles.error", {
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

  searchCombinacionesDisponibles: async (req, res) => {
    try {
      let ip = req.headers["x-forwarded-for"];

      let lotteryToken = req.body.lotteryToken;
      let user = req.body.user;
      let sorteo = req.body.sorteo;
      let combinacion = req.body.combinacion;
      let combinacionFigura = req.body.combinacionFigura;
      let tipoSeleccion = req.body.tipoSeleccion;

      let combinacionesAux = await psdVentas.obtenerCombinacionesDisponibles(
        14,
        sorteo,
        lotteryToken,
        combinacion,
        combinacionFigura,
        user,
        tipoSeleccion,
        ip
      );

      let combinaciones = combinacionesAux.map((element) => {
        let combinacion = {
          combinacion1: element.Num,
          combinacion2: element.Num2,
          fraccionesDisponibles: element.Fra.split(","),
          seleccionados: [],
          display: element.Num.split(","),
          status: false,
          identificador: Math.random(),
        };
        return combinacion;
      });

      response = {
        combinaciones,
      };

      res.status(200).json(response);
    } catch (e) {
      apiVentasLogger.error("searchCombinacionesDisponibles.error", {
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
  buscarWinner: async (req, res) => {
    try {
      let sorteo = req.body.sorteo;
      let combinaciones = req.body.combinaciones;
      let response = [];
      let length = combinaciones.length;
      await mainController.validateSorteo(sorteo, 14);
      for (let i = 0; i < length; i++) {
        let aux = await Results.getResultadoGanador(sorteo, combinaciones[i]);
        if (aux.status) {
          let n = aux.values.length;
          for (let j = 0; j < n; j++) {
            let boleto = aux.values[j];
            let premio = await Premios.getPremioByCodigo(boleto.codigoPremio);
            boleto["premio"] = premio.values;
            let responseAux = {
              status: true,
              combinacion: combinaciones[i].principal,
              serie: combinaciones[i].serie,
              sorteo,
              data: boleto,
            };
            response.push(responseAux);
          }
        } else {
          let responseAux = {
            status: false,
            combinacion: combinaciones[i].principal,
            serie: combinaciones[i].serie,
            sorteo,
          };
          response.push(responseAux);
        }
      }
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

  buscarSorteosJugados: async (req, res) => {
    try {
      response = await Sorteos.getSorteos(14);
      res.status(200).json(response);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },

  cronActualizarUltimoResultado: async () => {
    try {
      await UltimoResultado.actualizar();
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
    }
  },
  cronActualizarSorteosJugados: async () => {
    try {
      await Sorteos.actualizarSorteosJugados();
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
    }
  },
};

module.exports = mainController;
