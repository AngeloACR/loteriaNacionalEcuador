const psdResultados = require("../../psdLoteria/resultados");
const psdSorteos = require("../../psdLoteria/sorteos");
const psdVentas = require("../../psdLoteria/ventas");
const Results = require("../models/main");
const Premios = require("../models/premio");
const Master = require("../models/master");
const UltimoResultado = require("../models/ultimoResultado");
const Sorteos = require("../models/sorteo");
const config = require("../../environments/production");
const { sorteosPozoMillonarioLogger } = require("../logging");

/*************************** CONSULTA DE RESULTADOS************************/

const mainController = {
  validateSorteo: async (numeroSorteo) => {
    try {
      let master = await Master.findOne({ numeroSorteo });

      if (!master || !master.resultados || !master.resultados.status)
        throw new Error(
          "La información del sorteo no esta disponible en este momento, por favor vuelve a intentarlo más tarde"
        );
      return master.resultados.status;
    } catch (e) {
      throw new Error(e.message);
    }
  },

  validateSorteoHttp: async (req, res) => {
    try {
      let sorteo = req.body.sorteo;
      let response = await mainController.validateSorteo(sorteo);
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
  buscarPlancha: async (req, res) => {
    try {
      let sorteo = req.body.sorteo;
      let boletoInicial = parseInt(req.body.boletoInicial);
      let boletoFinal = parseInt(req.body.boletoFinal);

      let size = boletoFinal - boletoInicial + 1;
      let boletos = [...Array(size).keys()].map(
        (i) => parseInt(i) + boletoInicial
      );
      let auxResult = await Results.getResultadosByCodigos(sorteo, boletos);
      let auxPremios = [];
      let response;
      if (auxResult.status) {
        response = auxResult.values.map((boleto) => {
          auxPremios.push(Premios.getPremioByCodigo(boleto.codigoPremio));
          boleto["premio"] = premio.values;
          return {
            status: true,
            combinacion: combinacion,
            sorteo,
            data: boleto,
          };
        });
        let premios = await Promise.all(auxPremios);
        response = response.map((element, i) => {
          element.data["premio"] = premios[i].values;
        });
        let boletosNoGanadores = boletos.filter((boleto) =>
          response.some((item) => item.data.codigo == boleto)
        );
        response = [
          ...response,
          ...boletosNoGanadores.map((boleto) => {
            return {
              status: false,
              combinacion: boleto,
              sorteo,
            };
          }),
        ];
      } else {
        response = boletos.map((boleto) => {
          return {
            status: false,
            combinacion: boleto,
            sorteo,
          };
        });
      }
      res.status(200).json(response);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },
  /*   buscarPlancha: async (req, res) => {
    try {
      let sorteo = req.body.sorteo;
      let boletoInicial = parseInt(req.body.boletoInicial);
      let boletoFinal = parseInt(req.body.boletoFinal);

      let size = boletoFinal - boletoInicial + 1;
      let boletos = [...Array(size).keys()].map((i) =>
        (parseInt(i) + boletoInicial).toString()
      );
      let response = [];
      let length = boletos.length;
      for (let i = 0; i < length; i++) {
        let auxResult = await Results.getResultadoByCodigo(sorteo, boletos[i]);
        if (auxResult.status) {
          let combinacion = auxResult.values.combinacion1;

          let aux = await Results.getResultadoGanador(sorteo, combinacion);
          if (aux.status) {
            let n = aux.values.length;
            for (let j = 0; j < n; j++) {
              let boleto = aux.values[j];
              let premio = await Premios.getPremioByCodigo(boleto.codigoPremio);
              boleto["premio"] = premio.values;
              let responseAux = {
                status: true,
                combinacion: combinacion,
                sorteo,
                data: boleto,
              };
              response.push(responseAux);
            }
          } else {
            let responseAux = {
              status: false,
              combinacion,
              sorteo,
            };
            response.push(responseAux);
          }
        } else {
          let responseAux = {
            status: false,
            combinacion: boletos[i],
            sorteo,
          };
          response.push(responseAux);
        }
      }
      res.status(200).json(response);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },
 */
  buscarWinner: async (req, res) => {
    try {
      let sorteo = req.body.sorteo;
      let combinaciones = req.body.combinaciones;
      let response = [];
      let length = combinaciones.length;
      //await mainController.validateSorteo(sorteo, 5);
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
              combinacion: combinaciones[i],
              sorteo,
              data: boleto,
            };
            response.push(responseAux);
          }
        } else {
          let responseAux = {
            status: false,
            combinacion: combinaciones[i],
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

  buscarUltimosResultados: async (req, res) => {
    try {
      let response = await psdResultados.consultarUltimosResultados(17, token);
      res.status(200).json(response);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },

  buscarSorteosJugados: async (req, res) => {
    try {
      let response = await Sorteos.getSorteos();

      res.status(200).json(response);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },

  searchSorteosDisponibles: async (req, res) => {
    try {
      let ip = req.headers["x-forwarded-for"];
      let lotteryToken = req.query.lotteryToken;
      let user = req.query.user;
      let finalResponse = await psdSorteos.consultarSorteosDisponibles(
        17,
        lotteryToken,
        user,
        ip
      );

      res.status(200).json(finalResponse);
    } catch (e) {
      sorteosPozoMillonarioLogger.error("searchSorteosDisponibles.error", {
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
        17,
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
          mascota: element.Fig,
          combinacion1: element.Num,
          combinacion2: element.Num2,
          display: element.Num2.split(","),
          status: false,
          identificador: Math.random(),
        };
        return combinacion;
      });

      let response = {
        combinaciones,
      };

      res.status(200).json(response);
    } catch (e) {
      sorteosPozoMillonarioLogger.error(
        "searchCombinacionesDisponibles.error",
        {
          errorMessage: e.message,
        }
      );
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
  actualizarUltimoResultado: async (req, res) => {
    try {
      let response = await UltimoResultado.actualizar();
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

  actualizarSorteosJugados: async (req, res) => {
    try {
      let response = await Sorteos.actualizarSorteosJugados();
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
  limpiarDBHttp: async function (req, res) {
    try {
      console.log("Limpiando DB por http");
      let response = await mainController.limpiarDB();
      res.status(200).json(response);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },
  limpiarDB: async function () {
    try {
      console.log("Empezando limpieza de DB");
      let sorteos = (await Sorteos.getSorteos()).values;
      var today = new Date();
      var minDate = new Date(new Date().setDate(today.getDate() - 90));
      let outdatedSorteos = sorteos.filter((sorteo) => {
        let fechaSorteo = new Date(
          sorteo.fecha.split(" ")[0].split("/").reverse().join("-")
        );
        return fechaSorteo.getTime() < minDate.getTime();
      });

      for (let i = 0; i < outdatedSorteos.length; i++) {
        const sorteo = outdatedSorteos[i];

        await Results.deleteResultadosBySorteo(sorteo.sorteo);
        await Premios.deletePremiosBySorteo(sorteo.sorteo);
        await Sorteos.deleteSorteo(sorteo.sorteo);
      }

      return outdatedSorteos;
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      console.log(response);
    }
  },
};

module.exports = mainController;
