const psdResultados = require("../../psdLoteria/resultados");
const psdSorteos = require("../../psdLoteria/sorteos");
const psdVentas = require("../../psdLoteria/ventas");
const Results = require("../models/main");
const Premios = require("../models/premio");
const UltimoResultado = require("../models/ultimoResultado");
const Sorteos = require("../models/sorteo");
const config = require("../../environments/production");
const { response } = require("express");

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

  buscarWinner: async (req, res) => {
    try {
      let sorteo = req.body.sorteo;
      let combinaciones = req.body.combinaciones;
      let response = [];
      let length = combinaciones.length;
      //await mainController.validateSorteo(sorteo, 2);
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

  buscarBoletin: async (req, res) => {
    try {
      let sorteo = req.body.sorteo;
      let tipoLoteria = 2;
      let boletinAddress = `${sourceBoletines}T${tipoLoteria}${sorteo}.jpg`;

      res.status(200).json(boletinAddress);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },

  buscarUltimosResultados: async (req, res) => {
    try {
      response = await psdResultados.consultarUltimosResultados(2, token);
      res.status(200).json(response);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },

  buscarSorteosJugados: async (req, res) => {
    try {
      response = await Sorteos.getSorteos(2);

      res.status(200).json(response);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },
  
  getSorteo: async (req, res) => {
    try {
      let sorteo = req.body.sorteo
      response = await Sorteos.getSorteoByNumber(sorteo);
      if(!response.status) throw new Error("El sorteo no se encuentra cargado")
      res.status(200).json(response.values);
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
        2,
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
        2,
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
          combinacion3: element.Num3,
          combinacion4: element.Num4,
          combinacion5: element.Num5,
          display: element.Num.split(""),
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
  buscarBoleto: async (req, res) => {
    try {
      let sorteo = req.body.sorteo;
      let tipoLoteria = 2;
      let boletinAddress = `${sourceBoletos}B${tipoLoteria}${sorteo}.png`;

      res.status(200).json(boletinAddress);
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
};

module.exports = mainController;
