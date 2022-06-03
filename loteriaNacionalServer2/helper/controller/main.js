const UltimosResultadosLoteria = require("../../sorteosLoteriaNacional/models/ultimoResultado");
const UltimosResultadosLotto = require("../../sorteosLotto/models/ultimoResultado");
const UltimosResultadosPozoMillonario = require("../../sorteosPozoMillonario/models/ultimoResultado");
const UltimosResultadosLaMillonaria = require("../../sorteosLaMillonaria/models/ultimoResultado");
const UltimosResultados = require("../../../loteriaNacionalServer/results/model/ultimoResultado");
const db = require("../database").db;
const SorteosLoteria = require("../../sorteosLoteriaNacional/models/sorteo");
const SorteosLotto = require("../../sorteosLotto/models/sorteo");
const SorteosPozoMillonario = require("../../sorteosPozoMillonario/models/sorteo");
const SorteosLaMillonaria = require("../../sorteosLaMillonaria/models/sorteo");

const { helperLogger } = require("../logging");
const ipTool = require("ip");

/*************************** HERRAMIENTAS DE APOYO PARA SOPORTE TECNICO DEL SISTEMA ************************/

const helperController = {
  corregirTransaccion: async (req, res) => {
    try {
      let data = req.body.data;
      let response = [];
      for (let index = 0; index < data.length; index++) {
        const element = data[index];

        let reservaId = element.reservaId;
        let token = element.token;
        let reservationDetails = element.reservationDetails;
        let ventaData = await Reservas.getCompraByExaReservaId(reservaId);
        if (ventaData.status) {
          let venta = ventaData.values;
          let saldoData = await Wallet.getBalance({ token });
          let loteria = venta.loteria;
          let total = 0;
          for (let index = 0; index < loteria.length; index++) {
            const boleto = loteria[index];
            total += parseFloat(boleto.subtotal);
          }
          let lotto = venta.lotto;
          for (let index = 0; index < lotto.length; index++) {
            const boleto = lotto[index];
            total += parseFloat(boleto.subtotal);
          }
          let pozo = venta.pozo;
          for (let index = 0; index < pozo.length; index++) {
            const boleto = pozo[index];
            total += parseFloat(boleto.subtotal);
          }
          if (total <= saldoData.balance) {
            let exaCancelId = Date.now();
            let exaCancelData = {
              token: token,
              transactionId: exaCancelId,
              reserveId: reservaId,
              amount: parseFloat(total).toFixed(2),
            };
            let exaCancelResponse = await Wallet.cancelLottery(exaCancelData);
            let exaReservaId = Date.now();
            let exaReservaData = {
              token,
              transactionId: exaReservaId,
              amount: parseFloat(total).toFixed(2),
              reservationDetails,
            };
            let exaReservaResponse = await Wallet.reserveLottery(
              exaReservaData
            );
            let exaVentaId = Date.now();
            let exaVentaData = {
              token,
              transactionId: exaVentaId,
              reserveId: exaReservaId,
              ticketId: venta.ventaId,
              amount: parseFloat(total).toFixed(2),
              prizeDetails: [],
            };
            let exaVentaResponse = await Wallet.sellLottery(exaVentaData);
            response.push({
              hasBalance: true,
              exaReservaId: reservaId,
              ventaId: venta.ventaId,
              exaReservaResponse,
              exaVentaResponse,
              exaCancelResponse,
              total,
            });
          } else {
            response.push({
              hasBalance: false,
              reservaId,
              ventaId: venta.ventaId,
              total,
            });
          }
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
  corregirVenta: async (req, res) => {
    try {
      let data = req.body.data;
      let response = [];
      for (let index = 0; index < data.length; index++) {
        const element = data[index];

        if (element.hasBalance) {
          let reservaId = element.reservaId;
          let newReservaId = element.exaReservaResponse.transactionId;
          let newVentaId = element.exaVentaResponse.transactionId;
          let newTotal = parseFloat(element.total).toFixed(2);
          let response = [];
          let ventaData = await Reservas.updateCompraByExaReservaId(
            reservaId,
            newReservaId,
            newVentaId,
            newTotal
          );
          response.push(ventaData);
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
  ventasProblema: async (req, res) => {
    try {
      let response = await Reservas.getCompraByStatus("Procesada");
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
  ventasProblema2: async (req, res) => {
    try {
      let response = await Reservas.getComprasProblema2(req.body.user);
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
  recuperarDatosDeVentas: async (req, res) => {
    try {
      let data = req.body.data;
      let response = [];
      let acumulado = 0;
      for (let index = 0; index < data.length; index++) {
        const reservaId = data[index];
        let ventaData = await Reservas.getCompraByExaReservaId(reservaId);
        response.push(ventaData);
        acumulado = ventaData.status
          ? acumulado + parseFloat(ventaData.values.total)
          : acumulado;
      }
      res.status(200).json({ acumulado, data: response });
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  } /* 
    resolverVentasDeDescuadre: async (req, res) => {
  
      let data = req.body.data;
      let response = [];
      for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let exaReservaId = item.exaReservaId;
        let venta = await Reservas.getCompraByExaReservaId(exaReservaId)
        response.push(venta);
      }
      res.status(200).json(response);
    }, */,
  resolverVentasDeDescuadre: async (req, res) => {
    let data = req.body.data;
    let response = [];
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      let ticketId = item.ticketId;
      let token = item.token;
      let exaReservaId = item.exaReservaId;
      let totalVenta = item.totalVenta;
      let instantaneas = item.instantaneas;
      let prizeDetails = [];
      let instantaneaStatus = false;
      let instantaneaData = {};
      if (instantaneas != "" && instantaneas.length != 0) {
        instantaneaStatus = true;
        for (let j = 0; j < instantaneas.length; j++) {
          const instantanea = instantaneas[j];

          for (let i = 0; i < instantanea.premios.length; i++) {
            const premio = instantanea.premios[i];
            let nombreLoteria;
            let tipoLoteria = parseInt(instantanea.sorteo.JId);
            let drawDate = instantanea.drawDate;
            let prizeDetail = {
              lotteryType: tipoLoteria,
              lotteryName: nombreLoteria,
              drawNumber: parseInt(instantanea.sorteo.Sort),
              drawDate,
              combinationC1: premio.Num,
              fractions: premio.Fra,
              prize: parseFloat(premio.Val).toFixed(2),
              prizeWithDiscount: parseFloat(premio.ConDesc).toFixed(2),
              prizeDescription: premio.Prem.normalize("NFD").replace(
                /[\u0300-\u036f]/g,
                ""
              ),
            };
            if (premio.Num2) prizeDetail["combinationC2"] = premio.Num2;
            let ganador = {
              personaId: item.personaId,
              tipoLoteria: tipoLoteria,
              numeroSorteo: parseInt(instantanea.sorteo.Sort),
              combinacion1: premio.Num,
              codigoPremio: `${parseInt(instantanea.sorteo.Sort)}-INSTANTANEA`,
              fraccion: premio.Fra,
              descripcionPremio: premio.Prem,
              valorPremio: premio.Val,
              valorPremioDescuento: premio.ConDesc,
              ventaId: ticketId,
              acreditado: true,
            };
            await ganadoresController.crearGanador(ganador);
            prizeDetails.push(prizeDetail);
          }
        }
        instantaneaData = prizeDetails;
      }

      let exaVentaId = Date.now();
      let exaVentaData = {
        token,
        transactionId: exaVentaId,
        reserveId: exaReservaId,
        ticketId: ticketId,
        amount: totalVenta,
        prizeDetails,
      };
      let exaVentaResponse = await Wallet.sellLottery(exaVentaData);
      let venta = await Reservas.getCompraByExaReservaId(exaReservaId);
      let ventaExalogicStatusResponse =
        await ventasController.actualizarVentaStatus(
          venta.values.id,
          "Completada",
          exaVentaId
        );

      let instantaneaResponse = {
        status: instantaneaStatus,
        data: instantaneaData,
      };
      let finalResponse = {
        exaReservaId,
        data: exaVentaResponse,
        instantanea: instantaneaResponse,
        status: true,
      };
      response.push(finalResponse);
    }
    res.status(200).json(response);
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

  pruebaCorreo: async (req, res) => {
    try {
      let response = await Correos.sendEmail(
        "angeloCrincoli91@gmail.com",
        "Angelo",
        941
      );
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        errorMessage: e.message,
      };
      res.status(400).json(response);
    }
  },
  pruebaConsulta: async (req, res) => {
    try {
      let lotteryToken = (await Ventas.autenticarUsuario()).token;
      let response = await Ventas.consultarDatosUsuario2(
        lotteryToken,
        "0915693667",
        "192.168.1.1"
      );
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        errorMessage: e.message,
      };
      res.status(400).json(response);
    }
  },
  pruebaOrden: async (req, res) => {
    try {
      let lotteryToken = (await Ventas.autenticarUsuario()).token;
      let datos = await Ventas.consultarDatosUsuario(
        lotteryToken,
        43011,
        "192.168.1.1"
      );
      let ordenId = await Ventas.agregarOrdenPago(
        "754405",
        "1",
        "6710",
        "1488865",
        "39",
        lotteryToken,
        Date.now(),
        Date.now(),
        "0915693667",
        "192.168.1.1"
      );
      res.status(200).json(ordenId);
    } catch (e) {
      let response = {
        status: "error",
        errorMessage: e.message,
      };
      res.status(400).json(response);
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
  corregirGanadores: async (req, res) => {
    try {
      let queryB = { acreditado: false, numeroSorteo: "2690" };
      let queryC = { acreditado: false, numeroSorteo: "2691" };
      let queryD = { acreditado: false, numeroSorteo: "2692" };

      let ganadoresB = await Ganadores.updateMany(queryB, {
        $set: {
          combinacion2: "",
        },
      });
      let ganadoresC = await Ganadores.updateMany(queryC, {
        $set: {
          combinacion2: "",
        },
      });
      let ganadoresD = await Ganadores.updateMany(queryD, {
        $set: {
          combinacion2: "",
        },
      });

      res.status(200).json({ ganadoresB, ganadoresC, ganadoresD });
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
  parseMicroServicios: async (req, res) => {
    try {
      let auxA = await db.model("UltimoResultados").findOne({ tipoLoteria: 1 }).lean();
      let auxB = await db.model("UltimoResultados").findOne({ tipoLoteria: 2 }).lean();
      let auxC = await db.model("UltimoResultados").findOne({ tipoLoteria: 5 }).lean();
      let auxD = await db.model("UltimoResultados").findOne({ tipoLoteria: 14 }).lean();

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
          combinacion1: auxD.combinacion1,
          combinacion2: auxD.combinacion2,
        },
        numeroSorteo: auxD.numeroSorteo,
        codigoPremioPrincipal: auxD.codigoPremioPrincipal,
      };

      let lotto = {
        ultimoResultadoLotto: { combinacion1: auxB.combinacion1 },
        resultadoLottoPlus: auxB.resultadoLottoPlus,
        resultadosLottito: auxB.resultadosLottito,
        resultadoNosVemosJefe: auxB.resultadoNosVemosJefe,
        resultadoAntojito: auxB.resultadoAntojito,
        codigoPremioLottoPlus: auxB.codigoPremioLottoPlus,
        codigoPremioLottito: auxB.codigoPremioLottito,
        codigoPremioNosVemosJefe: auxB.codigoPremioNosVemosJefe,
        codigoPremioAntojito: auxB.codigoPremioAntojito,
        numeroSorteo: auxB.numeroSorteo,
        codigoPremioPrincipal: auxB.codigoPremioPrincipal,
      };

      let pozo = {
        ultimoResultadoPozo: {
          combinacion2: auxC.combinacion2,
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

      let auxE = await db.model("Sorteos").findOne({ tipoLoteria: 1 });
      let auxF = await db.model("Sorteos").findOne({ tipoLoteria: 2 });
      let auxG = await db.model("Sorteos").findOne({ tipoLoteria: 5 });
      let auxH = await db.model("Sorteos").findOne({ tipoLoteria: 14 });

      let queryE = { sorteo: auxE.sorteo };
      let queryF = { sorteo: auxF.sorteo };
      let queryG = { sorteo: auxG.sorteo };
      let queryH = { sorteo: auxH.sorteo };

      let responseE = await SorteosLoteria.updateOne(
        queryE,
        { $set: auxE },
        { upsert: true } // Make this update into an upsert
      );
      let responseF = await SorteosLotto.updateOne(
        queryF,
        { $set: auxF },
        { upsert: true } // Make this update into an upsert
      );
      let responseG = await SorteosPozoMillonario.updateOne(
        queryG,
        { $set: auxG },
        { upsert: true } // Make this update into an upsert
      );
      let responseH = await SorteosLaMillonaria.updateOne(
        queryH,
        { $set: auxH },
        { upsert: true } // Make this update into an upsert
      );

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

module.exports = helperController;
