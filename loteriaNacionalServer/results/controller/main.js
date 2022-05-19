var xml2js = require("xml2js");
var parser = xml2js.Parser();
var database = require("../../database");

const Lottery = require("../../loterianacional/controller/main");
const ResultadosController = require("./resultados");
const PremiosController = require("./premios");
const SorteosController = require("./sorteos");
const UltimosResultadosLoteria = require("../../../loteriaNacionalServer2/sorteosLoteriaNacional/models/ultimoResultado");
const UltimosResultadosLotto = require("../../../loteriaNacionalServer2/sorteosLotto/models/ultimoResultado");
const UltimosResultadosPozoMillonario = require("../../../loteriaNacionalServer2/sorteosPozoMillonario/models/ultimoResultado");
const UltimosResultadosLaMillonaria = require("../../../loteriaNacionalServer2/sorteosLaMillonaria/models/ultimoResultado");
const Sorteos = require("../model/sorteo");
const SorteosLoteria = require("../../../loteriaNacionalServer2/sorteosLoteriaNacional/models/sorteo");
const SorteosLotto = require("../../../loteriaNacionalServer2/sorteosLotto/models/sorteo");
const SorteosPozoMillonario = require("../../../loteriaNacionalServer2/sorteosPozoMillonario/models/sorteo");
const SorteosLaMillonaria = require("../../../loteriaNacionalServer2/sorteosLaMillonaria/models/sorteo");

var fs = require("fs");
const ultimoResultado = require("../model/ultimoResultado");
const resultadosController = require("./resultados");

const mainController = {
  agregarSorteosHTTP: async (req, res) => {
    try {
      let response = await mainController.agregarSorteos();
      res.status(200).json(response);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },
  ultimoResultadoPozo: async (req, res) => {
    try {
      let data = await Lottery.autenticarUsuario();
      let ultimoResultado = await Lottery.consultarUltimosResultados(
        5,
        data.token
      );

      let codigoPremio = `${ultimoResultado.SortId}-1`;
      let resultado = {
        tipoLoteria: 5,
        numeroSorteo: ultimoResultado.SortId,
        combinacion2: ultimoResultado.Comb,
        combinacion3: "",
        combinacion1: "",
        codigoPremio,
        combinacionGanadora: "2",
      };
      res.status(200).json(resultado);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },
  agregarUltimoResultadoPozo: async (req, res) => {
    try {
      let data = await Lottery.autenticarUsuario();
      let ultimoResultado = await Lottery.consultarUltimosResultados(
        5,
        data.token
      );

      let codigoPremio = `${ultimoResultado.SortId}-1`;
      let resultado = {
        tipoLoteria: 5,
        numeroSorteo: ultimoResultado.SortId,
        combinacion2: ultimoResultado.Comb,
        combinacion3: "",
        combinacion1: "",
        codigoPremio,
        combinacionGanadora: "2",
      };
      let response = await ResultadosController.updateUltimoResultado(
        resultado
      );
      res.status(200).json(response);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },
  agregarSorteos: async function () {
    try {
      let response = await Lottery.autenticarUsuario();
      let token = response.token;

      let sorteosLotto = await Lottery.consultarSorteosJugados(2, token);
      let sorteosLoteriaNacional = await Lottery.consultarSorteosJugados(
        1,
        token
      );
      let sorteosPozoMillonario = await Lottery.consultarSorteosJugados(
        5,
        token
      );
      let sorteosLaMillonaria = await Lottery.consultarSorteosJugados(
        14,
        token
      );

      response = [];
      let lottoResponse = await SorteosController.setSorteos(2, sorteosLotto);
      response.push(lottoResponse);
      let loteriaNacionalResponse = await SorteosController.setSorteos(
        1,
        sorteosLoteriaNacional
      );
      response.push(loteriaNacionalResponse);
      let pozoMillonarioResponse = await SorteosController.setSorteos(
        5,
        sorteosPozoMillonario
      );
      response.push(pozoMillonarioResponse);
      let laMillonariaResponse = await SorteosController.setSorteos(
        14,
        sorteosLaMillonaria
      );
      response.push(laMillonariaResponse);
      let responseAux = {
        status: true,
        values: response,
      };
      return responseAux;
    } catch (error) {
      let response = {
        status: false,
        msg: error.toString().replace("Error: ", ""),
      };
      return response;
    }
  },

  getUltimosResultadosHttp: async function (req, res) {
    try {
      let response = await mainController.getUltimosResultados();
      res.status(200).json(response);
    } catch (error) {
      let response = {
        status: false,
        msg: error.toString().replace("Error: ", ""),
      };
      res.status(400).json(error.toString());
    }
  },
  getUltimosResultados: async function () {
    try {
      let loteriaNacionalResponse =
        await ResultadosController.getUltimoResultado(1);
      let lottoResponse = await ResultadosController.getUltimoResultado(2);
      let pozoMillonarioResponse =
        await ResultadosController.getUltimoResultado(5);
      let laMillonariaResponse = await ResultadosController.getUltimoResultado(
        14
      );
      let response = {
        loteriaNacional: loteriaNacionalResponse.values,
        lotto: lottoResponse.values,
        pozoMillonario: pozoMillonarioResponse.values,
        laMillonaria: laMillonariaResponse.values,
      };

      return response;
    } catch (error) {
      let response = {
        status: false,
        msg: error.toString().replace("Error: ", ""),
      };
      return response;
    }
  },
  actualizarUltimosResultadosHttp: async function (req, res) {
    try {
      let response = await mainController.actualizarUltimosResultados();
      res.status(200).json(response);
    } catch (error) {
      let response = {
        status: false,
        msg: error.toString().replace("Error: ", ""),
      };
      res.status(400).json(error.toString());
    }
  },
  actualizarUltimosResultados: async function () {
    try {
      let data = await Lottery.autenticarUsuario();
      let token = data.token;
      let loteria = await Lottery.consultarUltimosResultados(1, token);
      let lotto = await Lottery.consultarUltimosResultados(2, token);
      let pozoMillonario = await Lottery.consultarUltimosResultados(5, token);
      let laMillonaria = await Lottery.consultarUltimosResultados(14, token);
      let response = {
        loteria,
        lotto,
        pozoMillonario,
        laMillonaria,
      };
      let ultimoResultadoMillonaria = {};
      for (let index = 0; index < laMillonaria.length; index++) {
        const resultado = laMillonaria[index];
        if (resultado.codigoPremio.includes("-1")) {
          ultimoResultadoMillonaria = {
            tipoLoteria: "14",

            codigoPremioPrincipal: resultado.codigoPremio,
            combinacion1: resultado.combinacion,
            combinacion2: resultado.serie,
            numeroSorteo: resultado.sorteo,
          };
        }
      }
      await resultadosController.updateUltimoResultado(
        ultimoResultadoMillonaria
      );
      let ultimoResultadoLoteria = {};
      for (let index = 0; index < loteria.length; index++) {
        const resultado = loteria[index];
        if (resultado.codigoPremio.includes("-1")) {
          ultimoResultadoLoteria = {
            tipoLoteria: "1",

            codigoPremioPrincipal: resultado.codigoPremio,
            combinacion1: resultado.combinacion,
            numeroSorteo: resultado.sorteo,
          };
        }
      }
      await resultadosController.updateUltimoResultado(ultimoResultadoLoteria);
      let ultimoResultadoLotto = {
        tipoLoteria: "2",
        combinacion1: "",
        codigoPremioPrincipal: "",
        codigoPremioLottoPlus: "",
        codigoPremioLottito: "",
        codigoPremioNosVemosJefe: "",
        codigoPremioAntojito: "",
        resultadoLottoPlus: {
          combinacion2: "",
        },
        resultadoAntojito: {
          combinacion5: "",
        },
        resultadosLottito: [],
        resultadoNosVemosJefe: {
          combinacion4: "",
        },
        numeroSorteo: "",
      };
      for (let index = 0; index < lotto.length; index++) {
        const resultado = lotto[index];
        ultimoResultadoLotto.numeroSorteo = resultado.sorteo;
        if (resultado.codigoPremio.includes("-1")) {
          ultimoResultadoLotto.combinacion1 = resultado.combinacion;
          ultimoResultadoLotto.codigoPremioPrincipal = resultado.codigoPremio;
        } else if (resultado.codigoPremio.includes("-23")) {
          ultimoResultadoLotto.resultadoLottoPlus.combinacion2 =
            resultado.combinacion;
          ultimoResultadoLotto.codigoPremioLottoPlus = resultado.codigoPremio;
        } else if (resultado.codigoPremio.includes("-24")) {
          ultimoResultadoLotto.resultadosLottito.push({
            combinacion3: resultado.combinacion,
          });
          ultimoResultadoLotto.codigoPremioLottito = resultado.codigoPremio;
        } else if (resultado.codigoPremio.includes("-25")) {
          ultimoResultadoLotto.resultadoNosVemosJefe.combinacion4 =
            resultado.combinacion;
          ultimoResultadoLotto.codigoPremioNosVemosJefe =
            resultado.codigoPremio;
        } else if (resultado.codigoPremio.includes("-26")) {
          ultimoResultadoLotto.resultadoAntojito.combinacion5 =
            resultado.combinacion;
          ultimoResultadoLotto.codigoPremioAntojito = resultado.codigoPremio;
        }
      }
      await resultadosController.updateUltimoResultado(ultimoResultadoLotto);
      let ultimoResultadoPozo = {
        tipoLoteria: "5",
        combinacion2: "",
        codigoPremio: "",
        mascota: "",
        numeroSorteo: "",
      };
      for (let index = 0; index < pozoMillonario.length; index++) {
        const resultado = pozoMillonario[index];
        ultimoResultadoPozo.numeroSorteo = resultado.sorteo;
        if (resultado.codigoPremio.includes("-1")) {
          ultimoResultadoPozo.combinacion2 = resultado.combinacion;
          ultimoResultadoPozo.codigoPremioPrincipal = resultado.codigoPremio;
        } else if (resultado.codigoPremio.includes("-6")) {
          ultimoResultadoPozo.mascota = resultado.combinacion;
          if (resultado.combinacion.length == 1)
            ultimoResultadoPozo.mascota = `0${resultado.combinacion}`;
        }
      }
      await resultadosController.updateUltimoResultado(ultimoResultadoPozo);
      return response;
    } catch (error) {
      let response = {
        status: false,
        msg: error.toString().replace("Error: ", ""),
      };
      throw new Error(error.message);
    }
  },
  parseResultadosHttp: async function (req, res) {
    try {
      console.log("Actualizando tablas de resultados por http");
      let response = await mainController.parseResultados();
      res.status(200).json(response);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },
  parseResultados: async function () {
    console.time("parseResultados");
    console.log("Parsing loteria");
    await ResultadosController.parseResultadosLoteria();
    console.log("Parsing lotto");
    await ResultadosController.parseResultadosLotto();
    console.log("Parsing pozo");
    await ResultadosController.parseResultadosPozo();
    console.timeEnd("parseResultados");
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
    console.log("Empezando limpieza de DB");
    let sorteos = (await SorteosController.getAllSorteos()).values;
    let outdatedSorteos = [];
    let n = sorteos.length;
    return new Promise(async (resolve, reject) => {
      try {
        for (let i = 0; i < sorteos.length; i++) {
          const sorteo = sorteos[i];

          let date = sorteo.fecha;
          let day = date.split(" ")[0].split("/")[0];
          let month = parseInt(date.split(" ")[0].split("/")[1]) - 1;
          let year = parseInt(date.split(" ")[0].split("/")[2]);
          let today = new Date();
          let todayYear = today.getYear() + 1900;
          let todayMonth = today.getMonth();
          let todayDay = today.getDay();
          let limit;
          let limitYear;
          if (todayMonth < 3) {
            limit = todayMonth + 9;
            limitYear = todayYear - 1;
          } else {
            limit = todayMonth - 3;
            limitYear = todayYear;
          }
          console.log(month);
          if (
            (month < limit || (month == limit && day <= todayDay)) &&
            year <= limitYear
          ) {
            console.log(`I should be deleting this sorteo: ${sorteo.sorteo}`);
            outdatedSorteos.push(sorteo.sorteo);
            await ResultadosController.deleteResultadosBySorteo(sorteo.sorteo);
            await PremiosController.deletePremiosBySorteo(sorteo.sorteo);
            await SorteosController.deleteSorteo(sorteo.sorteo);
          }
        }

        resolve(outdatedSorteos);
      } catch (e) {
        reject(e);
      }
    });
  },

  parseMicroServicios: async (req, res) => {
    try {
      let auxA = await ultimoResultado.findOne({ tipoLoteria: 1 }).lean();
      let auxB = await ultimoResultado.findOne({ tipoLoteria: 2 }).lean();
      let auxC = await ultimoResultado.findOne({ tipoLoteria: 5 }).lean();
      let auxD = await ultimoResultado.findOne({ tipoLoteria: 14 }).lean();

      let queryA = { numeroSorteo: auxA.numeroSorteo };
      let queryB = { numeroSorteo: auxB.numeroSorteo };
      let queryC = { numeroSorteo: auxC.numeroSorteo };
      let queryD = { numeroSorteo: auxD.numeroSorteo };

      let loteria = {
        ultimoResultadoLoteria: {
          combinacion1: auxA.ultimoResultadoLoteria.combinacion1,
        },
        numeroSorteo: auxA.numeroSorteo,
        codigoPremioPrincipal: auxA.codigoPremioPrincipal,
      };

      let millonaria = {
        ultimoResultadoMillonaria: {
          combinacion1: auxD.ultimoResultadoMillonaria.combinacion1,
          combinacion2: auxD.ultimoResultadoMillonaria.combinacion2,
        },
        numeroSorteo: auxD.numeroSorteo,
        codigoPremioPrincipal: auxD.codigoPremioPrincipal,
      };

      let lotto = {
        ultimoResultadoLotto: { combinacion1: auxB.ultimoResultadoLotto.combinacion1 },
        resultadoLottoPlus: {combinacion2: auxB.resultadoLottoPlus.combinacion2},
        resultadosLottito: auxB.resultadosLottito.map(item=> {return {combinacion3: item.combinacion3}}),
        resultadoNosVemosJefe: {combinacion4: auxB.resultadoNosVemosJefe.combinacion4},
        resultadoAntojito: {combinacion5: auxB.resultadoAntojito.combinacion5},
        codigoPremioLottoPlus: auxB.codigoPremioLottoPlus,
        codigoPremioLottito: auxB.codigoPremioLottito,
        codigoPremioNosVemosJefe: auxB.codigoPremioNosVemosJefe,
        codigoPremioAntojito: auxB.codigoPremioAntojito,
        numeroSorteo: auxB.numeroSorteo,
        codigoPremioPrincipal: auxB.codigoPremioPrincipal,
      };

      let pozo = {
        ultimoResultadoPozo: {
          combinacion2: auxC.ultimoResultadoPozo.combinacion2,
        },
        mascota: auxC.mascota,
        numeroSorteo: auxC.numeroSorteo,
        codigoPremioPrincipal: auxC.codigoPremioPrincipal,
      };

      let responseA = await UltimosResultadosLoteria.updateOne(
        queryA,
        { $set: loteria },
        { upsert: true } // Make this update into an upsert
      );
      let responseB = await UltimosResultadosLotto.updateOne(
        queryB,
        { $set: lotto },
        { upsert: true } // Make this update into an upsert
      );
      let responseC = await UltimosResultadosPozoMillonario.updateOne(
        queryC,
        { $set: pozo },
        { upsert: true } // Make this update into an upsert
      );
      let responseD = await UltimosResultadosLaMillonaria.updateOne(
        queryD,
        { $set: millonaria },
        { upsert: true } // Make this update into an upsert
      );

      let auxE = await Sorteos.find({ tipoLoteria: 1 });
      let auxF = await Sorteos.find({ tipoLoteria: 2 });
      let auxG = await Sorteos.find({ tipoLoteria: 5 });
      let auxH = await Sorteos.find({ tipoLoteria: 14 });

      let responseE = [];
      let responseF = [];
      let responseG = [];
      let responseH = [];
      for (let i = 0; i < auxE.length; i++) {
        let queryE = { sorteo: auxE[i].sorteo };
        responseE.push( await SorteosLoteria.updateOne(
          queryE,
          {
            $set: {
              sorteo: auxE[i].sorteo,
              precio: auxE[i].precio,
              fecha: auxE[i].fecha,
              cantidadDeFracciones: auxE[i].cantidadDeFracciones,
              valorPremioPrincipal: auxE[i].valorPremioPrincipal,
              nombre: auxE[i].nombre,
            },
          },
          { upsert: true } // Make this update into an upsert
        ));
      }
      for (let i = 0; i < auxF.length; i++) {
        let queryF = { sorteo: auxF[i].sorteo };
        responseF.push(
          await SorteosLotto.updateOne(
            queryF,
            {
              $set: {
                sorteo: auxF[i].sorteo,
                precio: auxF[i].precio,
                fecha: auxF[i].fecha,
                cantidadDeFracciones: auxF[i].cantidadDeFracciones,
                valorPremioPrincipal: auxF[i].valorPremioPrincipal,
                nombre: auxF[i].nombre,
              },
            },
            { upsert: true } // Make this update into an upsert
          )
        );
      }
      for (let i = 0; i < auxG.length; i++) {
        let queryG = { sorteo: auxG[i].sorteo };
        responseG.push( await SorteosPozoMillonario.updateOne(
          queryG,
          {
            $set: {
              sorteo: auxG[i].sorteo,
              precio: auxG[i].precio,
              fecha: auxG[i].fecha,
              cantidadDeFracciones: auxG[i].cantidadDeFracciones,
              valorPremioPrincipal: auxG[i].valorPremioPrincipal,
              nombre: auxG[i].nombre,
            },
          },
          { upsert: true } // Make this update into an upsert
        ));
      }
      for (let i = 0; i < auxH.length; i++) {
        let queryH = { sorteo: auxH[i].sorteo };
        responseH.push( await SorteosLaMillonaria.updateOne(
          queryH,
          {
            $set: {
              sorteo: auxH[i].sorteo,
              precio: auxH[i].precio,
              fecha: auxH[i].fecha,
              cantidadDeFracciones: auxH[i].cantidadDeFracciones,
              valorPremioPrincipal: auxH[i].valorPremioPrincipal,
              nombre: auxH[i].nombre,
            },
          },
          { upsert: true } // Make this update into an upsert
        ));
      }

      res.status(200).json({
        responseA,
        responseB,
        responseC,
        responseD,
        responseE,
        responseF,
        responseG,
        responseH,
      });
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
