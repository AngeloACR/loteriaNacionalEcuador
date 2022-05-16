const Lottery = require("../../loterianacional/controller/main");
const Results = require("../../results/controller/resultados");
const Premios = require("../../results/controller/premios");
const Resultados = require("../../results/controller/main");
const Sorteos = require("../../results/controller/sorteos");
const config = require("../../config/environment");

/*************************** CONSULTA DE RESULTADOS************************/

//let sourceBoletines = config.sourceBoletinesLocal;
let sourceBoletines = config.sourceBoletinesTest;
//let sourceBoletines = config.sourceBoletinesProd;

const inquiryController = {
  validateSorteo: async (sorteo, tipoLoteria) => {
    try {
      let status;
      switch (tipoLoteria) {
        case 1:
          status = await Results.getResultadosLoteria(sorteo);
          break;
        case 2:
          status = await Results.getResultadosLotto(sorteo);

          break;

        case 5:
          status = await Results.getResultadosPozo(sorteo);

          break;
        case 14:
          status = await Results.getResultadosMillonaria(sorteo);

          break;
      }
      if (!status)
        throw new Error(
          "La información del sorteo no esta disponible en este momento, por favor vuelve a intentarlo más tarde"
        );
      return status;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  buscarPozoPlancha: async (req, res) => {
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

          let aux = await Results.getResultadoGanadorPozo(sorteo, combinacion);
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

  buscarPozoWinner: async (req, res) => {
    try {
      let sorteo = req.body.sorteo;
      let combinaciones = req.body.combinaciones;
      let response = [];
      let length = combinaciones.length;
      await inquiryController.validateSorteo(sorteo, 5);
      for (let i = 0; i < length; i++) {
        let aux = await Results.getResultadoGanadorPozo(
          sorteo,
          combinaciones[i]
        );
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
  
  buscarPozoBoletin: async (req, res) => {
    try {
      let sorteo = req.body.sorteo;
      let tipoLoteria = 5;
      let boletinAddress = `${sourceBoletines}T${tipoLoteria}${sorteo}.jpg`;
      res.status(200).json(boletinAddress);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },

  buscarPozoUltimosResultados: async (req, res) => {
    try {
      response = await Lottery.consultarUltimosResultados(5, token);
      res.status(200).json(response);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },

  buscarPozoSorteosJugados: async (req, res) => {
    try {
      response = await Sorteos.getSorteos(5);

      res.status(200).json(response);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },

  buscarMillonariaBoletin: async (req, res) => {
    try {
      let sorteo = req.body.sorteo;
      let tipoLoteria = 14;
      let boletinAddress = `${sourceBoletines}T${tipoLoteria}${sorteo}.jpg`;
      res.status(200).json(boletinAddress);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },

  buscarMillonariaWinner: async (req, res) => {
    try {
      let sorteo = req.body.sorteo;
      let combinaciones = req.body.combinaciones;
      let response = [];
      let length = combinaciones.length;
      await inquiryController.validateSorteo(sorteo, 14);
      for (let i = 0; i < length; i++) {
        let aux = await Results.getResultadoGanadorMillonaria(
          sorteo,
          combinaciones[i]
        );
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

  buscarMilloriaSorteosJugados: async (req, res) => {
    try {
      response = await Sorteos.getSorteos(14);
      res.status(200).json(response);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },


  buscarLoteriaWinner: async (req, res) => {
    try {
      let sorteo = req.body.sorteo;
      let combinaciones = req.body.combinaciones;
      let response = [];
      let length = combinaciones.length;
      await inquiryController.validateSorteo(sorteo, 1);
      for (let i = 0; i < length; i++) {
        let aux = await Results.getResultadoGanadorLoteria(
          sorteo,
          combinaciones[i]
        );
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

  buscarLoteriaSorteosJugados: async (req, res) => {
    try {
      response = await Sorteos.getSorteos(1);
      res.status(200).json(response);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },

  buscarLoteriaBoletin: async (req, res) => {
    try {
      let sorteo = req.body.sorteo;
      let tipoLoteria = 1;
      let boletinAddress = `${sourceBoletines}T${tipoLoteria}${sorteo}.jpg`;

      res.status(200).json(boletinAddress);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },

  buscarLoteriaUltimosResultados: async (req, res) => {
    try {
      response = await Lottery.consultarUltimosResultados(1, token);
      res.status(200).json(response);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },

  buscarLottoWinner: async (req, res) => {
    try {
      let sorteo = req.body.sorteo;
      let combinaciones = req.body.combinaciones;
      let response = [];
      let length = combinaciones.length;
      await inquiryController.validateSorteo(sorteo, 2);
      for (let i = 0; i < length; i++) {
        let aux = await Results.getResultadoGanadorLotto(
          sorteo,
          combinaciones[i]
        );
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


  buscarLottoBoletin: async (req, res) => {
    try {
      let sorteo = req.body.sorteo;
      let tipoLoteria = 2;
      let boletinAddress = `${sourceBoletines}T${tipoLoteria}${sorteo}.jpg`;

      res.status(200).json(boletinAddress);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },

  buscarLottoUltimosResultados: async (req, res) => {
    try {
      response = await Lottery.consultarUltimosResultados(2, token);
      res.status(200).json(response);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },

  buscarLottoSorteosJugados: async (req, res) => {
    try {
      response = await Sorteos.getSorteos(2);

      res.status(200).json(response);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },





  buscarResultadoPrueba: async (req, res) => {
    try {
      let sorteo = req.body.sorteo;
      let combinacion = req.body.combinacion;
      let response = await Results.getResultadoGanador(sorteo, combinacion);

      res.status(200).json(response);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },

  buscarUltimosResultados: async (req, res) => {
    try {
      let response = await Resultados.getUltimosResultados();

      res.status(200).json(response);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },
};

const mainInquiryController = {
  inquiryController,
};

module.exports = mainInquiryController;
