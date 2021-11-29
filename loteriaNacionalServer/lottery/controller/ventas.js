const Cache = require("../../cache/controller/main");
const config = require("../../config/environment");
const Ventas = require("../../loterianacional/controller/ventas");
const Reservas = require("./reservas");
const Auth = require("../../exalogic/controller/auth");
const Wallet = require("../../exalogic/controller/wallet");
const ganadoresController = require("./ganadores");
const { apiVentasLogger } = require("../../config/logging");
var { apiError } = require("../../errors/customError");
var errorHandler = require("../../errors/errorHandler");

/*************************** CONSULTA DE RESULTADOS************************/

//let sourceBoletos = config.sourceBoletosLocal;
//let sourceBoletos = config.sourceBoletosTest;
let sourceBoletos = config.sourceBoletosProd;

function getCurrentTimeStamp() {
  let date = new Date(Date.now()).toLocaleString("es-EC", {
    timeZone: "America/Bogota",
  });
  let a = date.split(/\D/);
  let y = a[2];
  let m = a[1].length === 2 ? a[1] : `0${a[1]}`;
  let d = a[0].length === 2 ? a[0] : `0${a[0]}`;
  let n = `${y}-${d}-${m} ${a[3]}:${a[4]}:${a[5]}.000`;
  return n;
}

const ventasController = {
  searchLottoSorteosDisponibles: async (req, res) => {
    try {
      let ip = req.headers["x-forwarded-for"];
      let lotteryToken = req.query.lotteryToken;
      let user = req.query.user;
      let finalResponse = await Ventas.consultarSorteosDisponibles(
        2,
        lotteryToken,
        user,
        ip
      );
      res.status(200).json(finalResponse);
    } catch (e) {
      apiVentasLogger.error("searchLottoSorteosDisponibles.error", {
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
  searchLoteriaSorteosDisponibles: async (req, res) => {
    try {
      let ip = req.headers["x-forwarded-for"];
      let lotteryToken = req.query.lotteryToken;
      let user = req.query.user;
      let finalResponse = await Ventas.consultarSorteosDisponibles(
        1,
        lotteryToken,
        user,
        ip
      );
      res.status(200).json(finalResponse);
    } catch (e) {
      apiVentasLogger.error("searchLoteriaSorteosDisponibles.error", {
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
  searchPozoSorteosDisponibles: async (req, res) => {
    try {
      let ip = req.headers["x-forwarded-for"];
      let lotteryToken = req.query.lotteryToken;
      let user = req.query.user;
      let finalResponse = await Ventas.consultarSorteosDisponibles(
        5,
        lotteryToken,
        user,
        ip
      );

      res.status(200).json(finalResponse);
    } catch (e) {
      apiVentasLogger.error("searchPozoSorteosDisponibles.error", {
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

  searchLottoCombinacionesDisponibles: async (req, res) => {
    try {
      let ip = req.headers["x-forwarded-for"];
      let lotteryToken = req.body.lotteryToken;
      let user = req.body.user;
      let sorteo = req.body.sorteo;
      let combinacion = req.body.combinacion;
      let combinacionFigura = req.body.combinacionFigura;
      let tipoSeleccion = req.body.tipoSeleccion;

      let combinacionesAux = await Ventas.obtenerCombinacionesDisponibles(
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
      apiVentasLogger.error("searchLottoCombinacionesDisponibles.error", {
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
  searchLoteriaCombinacionesDisponibles: async (req, res) => {
    try {
      let ip = req.headers["x-forwarded-for"];
      let lotteryToken = req.body.lotteryToken;
      let user = req.body.user;
      let sorteo = req.body.sorteo;
      let combinacion = req.body.combinacion;
      let combinacionFigura = req.body.combinacionFigura;
      let tipoSeleccion = req.body.tipoSeleccion;

      let combinacionesAux = await Ventas.obtenerCombinacionesDisponibles(
        1,
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
          combinacion: element.Num,
          display: element.Num.split(""),
          fraccionesDisponibles: element.Fra.split(","),
          seleccionados: [],
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
      apiVentasLogger.error("searchLoteriaCombinacionesDisponibles.error", {
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
  searchPozoCombinacionesDisponibles: async (req, res) => {
    try {
      let ip = req.headers["x-forwarded-for"];

      let lotteryToken = req.body.lotteryToken;
      let user = req.body.user;
      let sorteo = req.body.sorteo;
      let combinacion = req.body.combinacion;
      let combinacionFigura = req.body.combinacionFigura;
      let tipoSeleccion = req.body.tipoSeleccion;

      let combinacionesAux = await Ventas.obtenerCombinacionesDisponibles(
        5,
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

      response = {
        combinaciones,
      };

      res.status(200).json(response);
    } catch (e) {
      apiVentasLogger.error("searchPozoCombinacionesDisponibles.error", {
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
  getDescuentos: async (req, res) => {
    try {
      let ip = req.headers["x-forwarded-for"];

      let lotteryToken = req.query.lotteryToken;
      let user = req.query.user;

      let response = await Ventas.consultarDescuentos(lotteryToken, user, ip);

      res.status(200).json(response);
    } catch (e) {
      apiVentasLogger.error("reservarBoletos.error", {
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
  reservarBoletos: async (req, res) => {
    try {
      apiVentasLogger.silly("reservarBoletos");
      let ip = req.headers["x-forwarded-for"];

      let lotteryToken = req.body.lotteryToken;
      let user = req.body.user;
      let loteria = req.body.loteria ? req.body.loteria : [];
      let lotto = req.body.lotto ? req.body.lotto : [];
      let pozo = req.body.pozo ? req.body.pozo : [];
      let reservaId = req.body.reservaId ? req.body.reservaId : 0;

      let response = await Ventas.reservarCombinaciones(
        loteria,
        lotto,
        pozo,
        lotteryToken,
        reservaId,
        user,
        ip
      );

      let logData = {
        data: {
          loteria,
          lotto,
          pozo,
          lotteryToken,
          reservaId,
          user,
          ip,
        },
        response,
        function: "Ventas.reservarCombinaciones",
      };
      apiVentasLogger.info("reservarBoletos.loteria", logData);
      res.status(200).json(response);
    } catch (e) {
      apiVentasLogger.error("reservarBoletos.error", {
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
  eliminarBoletosDeReserva: async (req, res) => {
    try {
      apiVentasLogger.silly("eliminarBoletosDeReserva");
      let ip = req.headers["x-forwarded-for"];

      let lotteryToken = req.body.lotteryToken;
      let user = req.body.user;
      let loteria = req.body.loteria ? req.body.loteria : [];
      let lotto = req.body.lotto ? req.body.lotto : [];
      let pozo = req.body.pozo ? req.body.pozo : [];
      let reservaId = req.body.reservaId ? req.body.reservaId : 0;
      let finalResponse = await Ventas.eliminarReservas(
        loteria,
        lotto,
        pozo,
        lotteryToken,
        reservaId,
        user,
        ip
      );

      let logData = {
        data: {
          loteria,
          lotto,
          pozo,
          lotteryToken,
          reservaId,
          user,
          ip,
        },
        response: finalResponse,
        function: "Ventas.eliminarReservas",
      };
      apiVentasLogger.info("eliminarBoletosDeReserva.loteria", logData);
      res.status(200).json(finalResponse);
    } catch (e) {
      apiVentasLogger.error("eliminarBoletosDeReserva.error", {
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
  comprarBoletos: async (req, res) => {
    try {
      apiVentasLogger.silly("comprarBoletos");
      let ip = req.headers["x-forwarded-for"];

      let token = req.body.token;
      let lotteryToken = req.body.lotteryToken;

      let user = req.body.user;
      let accountId = req.body.accountId;
      let personaId = req.body.personaId;

      let loteriaAux = req.body.loteria;
      let lottoAux = req.body.lotto;
      let pozoAux = req.body.pozo;

      let total = parseFloat(req.body.amount).toFixed(2);
      let totalConDesc = parseFloat(req.body.amountConDesc).toFixed(2);

      let reservaId = req.body.reservaId;
      //let totalVenta = totalConDesc? totalConDesc : total;
      let totalVenta = total;
      /* CARGA DE COMPRA EN DB */
      let apiVentaData = {
        amount: totalVenta,
        loteria: loteriaAux,
        lotto: lottoAux,
        user,
        pozo: pozoAux,
        reservaId: reservaId,
        accountId,
        status: "Pendiente",
      };
      let apiVentaResponse = await ventasController.crearReserva(apiVentaData);
      let logData = {
        data: apiVentaData,
        response: apiVentaResponse,
        function: "ventasController.crearReserva",
      };
      apiVentasLogger.info("comprarBoletos.api", logData);

      let venta = apiVentaResponse.values;

      /* RESERVA CON EXALOGIC */
      let exaReservaId = Date.now();
      let reservationDetails = [];

      let loteria = [];
      for (id in loteriaAux) {
        let drawDateAux = loteriaAux[id].sorteo.fecha.split(" ")[0].split("/");
        let drawDate = `${drawDateAux[2]}-${drawDateAux[1]}-${drawDateAux[0]}`;
        let aux = {
          lotteryType: 1,
          lotteryName: "Loteria Nacional",
          drawNumber: parseInt(loteriaAux[id].sorteo.sorteo),
          drawDate,
          subTotal: parseFloat(loteriaAux[id].subtotal).toFixed(2),
          combinationC1: loteriaAux[id].ticket.combinacion,
          fractions: loteriaAux[id].ticket.seleccionados,
        };
        reservationDetails.push(aux);
        loteria.push(loteriaAux[id]);
      }
      let lotto = [];
      for (id in lottoAux) {
        let drawDateAux = lottoAux[id].sorteo.fecha.split(" ")[0].split("/");
        let drawDate = `${drawDateAux[2]}-${drawDateAux[1]}-${drawDateAux[0]}`;
        let aux = {
          lotteryType: 2,
          lotteryName: "Lotto",
          drawNumber: parseInt(lottoAux[id].sorteo.sorteo),
          drawDate,
          subTotal: parseFloat(lottoAux[id].subtotal).toFixed(2),
          combinationC1: lottoAux[id].ticket.combinacion1,
          combinationC2: lottoAux[id].ticket.combinacion2,
          combinationC3: lottoAux[id].ticket.combinacion3,
          combinationC4: lottoAux[id].ticket.combinacion4,
          combinationC5: lottoAux[id].ticket.combinacion5,
        };
        reservationDetails.push(aux);
        lotto.push(lottoAux[id]);
      }
      let pozo = [];
      for (id in pozoAux) {
        let drawDateAux = pozoAux[id].sorteo.fecha.split(" ")[0].split("/");
        let drawDate = `${drawDateAux[2]}-${drawDateAux[1]}-${drawDateAux[0]}`;
        let aux = {
          lotteryType: 5,
          lotteryName: "Pozo Millonario",
          drawNumber: parseInt(pozoAux[id].sorteo.sorteo),
          drawDate,
          subTotal: parseFloat(pozoAux[id].subtotal).toFixed(2),
          combinationC1: pozoAux[id].ticket.combinacion1,
          combinationC2: pozoAux[id].ticket.combinacion2,
          combinationC3: pozoAux[id].ticket.mascota,
        };
        reservationDetails.push(aux);
        pozo.push(pozoAux[id]);
      }
      let exaReservaData = {
        token,
        transactionId: exaReservaId,
        amount: totalVenta,
        reservationDetails,
      };

      let exaReservaResponse = await Wallet.reserveLottery(exaReservaData);
      if (!exaReservaResponse.status) {
        await errorHandler.exalogicReserveError(exaReservaData);
      }

      let reservaStatusResponse = await ventasController.actualizarVentaStatus(
        venta._id,
        "Reservada",
        exaReservaId
      );

      logData = {
        data: exaReservaData,
        response: exaReservaResponse,
        function: "Wallet.reserveLottery",
      };
      apiVentasLogger.info("comprarBoletos.api", logData);

      /* VENTA EN LOTERIA */
      let ordComp = exaReservaId;
      let loteriaVentaResponse = await Ventas.venderBoletos(
        ordComp,
        total,
        totalConDesc,
        loteria,
        lotto,
        pozo,
        lotteryToken,
        reservaId,
        user,
        ip
      );
      if (!loteriaVentaResponse.status) {
        await errorHandler.loteriaSellError(exaReservaData);
      }
      logData = {
        data: {
          ordComp,
          total,
          loteria,
          lotto,
          pozo,
          lotteryToken,
          reservaId,
          user,
          ip,
        },
        response: loteriaVentaResponse,
        function: "Ventas.venderBoletos",
      };
      apiVentasLogger.info("comprarBoletos.loteria", logData);
      let ventaLoteriaStatusResponse =
        await ventasController.actualizarVentaStatus(
          venta._id,
          "Procesada",
          loteriaVentaResponse.ticketId
        );

      /* VENTA EN EXALOGIC */

      let instantaneas = loteriaVentaResponse.instantaneas;
      let prizeDetails = [];
      let instantaneaStatus = false;
      let instantaneaData = {};
      if (instantaneas != "" && instantaneas.length != 0) {
        let loteriaSorteos = await Cache.getLoteriaSorteosDisponibles();
        let lottoSorteos = await Cache.getLottoSorteosDisponibles();
        let pozoSorteos = await Cache.getPozoSorteosDisponibles();
        instantaneaStatus = true;
        for (let j = 0; j < instantaneas.length; j++) {
          const instantanea = instantaneas[j];

          for (let i = 0; i < instantanea.premios.length; i++) {
            const premio = instantanea.premios[i];

            let sorteos;
            let nombreLoteria;
            let tipoLoteria = parseInt(instantanea.sorteo.JId);
            switch (tipoLoteria) {
              case 1:
                nombreLoteria = "Loteria Nacional";
                sorteos = loteriaSorteos;
                break;
              case 2:
                nombreLoteria = "Lotto";
                sorteos = lottoSorteos;

              default:
                nombreLoteria = "Pozo Millonario";
                sorteos = pozoSorteos;
                break;
            }
            let drawDateAux = sorteos
              .find((sorteo) => sorteo.sorteo == instantanea.sorteo.Sort)
              .fecha.split(" ")[0]
              .split("/");
            let drawDate = `${drawDateAux[2]}-${drawDateAux[1]}-${drawDateAux[0]}`;
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

            let ganador = {
              personaId: personaId,
              tipoLoteria: tipoLoteria,
              numeroSorteo: parseInt(instantanea.sorteo.Sort),
              combinacion1: premio.Num,
              codigoPremio: `${parseInt(instantanea.sorteo.Sort)}-INSTANTANEA`,
              fraccion: premio.Fra,
              descripcionPremio: premio.Prem,
              valorPremio: premio.Val,
              valorPremioDescuento: premio.ConDesc,
              ventaId: loteriaVentaResponse.ticketId,
              acreditado: true,
            };
            await ganadoresController.crearGanador(ganador);
            logData = {
              data: ganador,
              response: loteriaVentaResponse,
              function: "ganadoresController.crearGanador",
            };
            apiVentasLogger.info("comprarBoletos.api", logData);
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
        ticketId: loteriaVentaResponse.ticketId,
        amount: totalVenta,
        prizeDetails,
      };
      let exaVentaResponse = await Wallet.sellLottery(exaVentaData);
      if (!exaVentaResponse.status) {
        await errorHandler.exalogicSellError(
          exaVentaData,
          reservaId,
          lotteryToken,
          user,
          ip
        );
      }
      logData = {
        data: exaVentaData,
        response: exaVentaResponse,
        function: "Wallet.sellLottery",
      };
      apiVentasLogger.info("comprarBoletos.api", logData);

      let ventaExalogicStatusResponse =
        await ventasController.actualizarVentaStatus(
          venta._id,
          "Completada",
          exaVentaId
        );

      /* RESPUESTA DE API */
      let instantaneaResponse = {
        status: instantaneaStatus,
        data: instantaneaData,
      };
      let finalResponse = {
        data: apiVentaResponse,
        instantanea: instantaneaResponse,
        status: true,
      };

      res.status(200).json(finalResponse);
    } catch (e) {
      apiVentasLogger.error("comprarBoletos.error", {
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

  buscarLottoBoleto: async (req, res) => {
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
  buscarLoteriaBoleto: async (req, res) => {
    try {
      let sorteo = req.body.sorteo;
      let tipoLoteria = 1;
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
  buscarPozoBoleto: async (req, res) => {
    try {
      let sorteo = req.body.sorteo;
      let tipoLoteria = 5;
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

  crearReserva: async (apiReservaData) => {
    try {
      let loteriaAux = apiReservaData.loteria;
      let loteria = [];
      for (id in loteriaAux) {
        let aux = {};
        aux["combinacion1"] = loteriaAux[id].ticket.combinacion;
        aux["fracciones"] = loteriaAux[id].ticket.seleccionados;
        aux["subtotal"] = parseFloat(loteriaAux[id].subtotal).toFixed(2);
        aux["fecha"] = loteriaAux[id].sorteo.fecha;
        aux["sorteo"] = loteriaAux[id].sorteo.sorteo;
        loteria.push(aux);
      }
      let lottoAux = apiReservaData.lotto;
      let lotto = [];
      for (id in lottoAux) {
        let aux = {};
        aux["combinacion1"] = lottoAux[id].ticket.combinacion1;
        aux["combinacion2"] = lottoAux[id].ticket.combinacion2;
        aux["combinacion3"] = lottoAux[id].ticket.combinacion3;
        aux["combinacion4"] = lottoAux[id].ticket.combinacion4;
        aux["combinacion5"] = lottoAux[id].ticket.combinacion5;
        aux["sorteo"] = lottoAux[id].sorteo.sorteo;
        aux["subtotal"] = parseFloat(lottoAux[id].subtotal).toFixed(2);
        aux["fecha"] = lottoAux[id].sorteo.fecha;
        lotto.push(aux);
      }
      let pozoAux = apiReservaData.pozo;
      let pozo = [];
      for (id in pozoAux) {
        let aux = {};
        aux["combinacion1"] = pozoAux[id].ticket.combinacion1;
        aux["combinacion2"] = pozoAux[id].ticket.combinacion2;
        aux["mascota"] = pozoAux[id].ticket.mascota;
        aux["sorteo"] = pozoAux[id].sorteo.sorteo;
        aux["subtotal"] = parseFloat(pozoAux[id].subtotal).toFixed(2);
        aux["fecha"] = pozoAux[id].sorteo.fecha;
        pozo.push(aux);
      }
      let total = parseFloat(apiReservaData.amount).toFixed(2);
      let reservaId = apiReservaData.reservaId;
      let ventaId = apiReservaData.ventaId;
      let exaReservaId = apiReservaData.exaReservaId;
      let exaVentaId = apiReservaData.exaVentaId;
      let user = apiReservaData.user;
      let accountId = apiReservaData.accountId;
      let status = apiReservaData.status;
      let element = {
        loteria,
        exaReservaId,
        pozo,
        exaVentaId,
        lotto,
        total,
        reservaId,
        ventaId,
        user,
        accountId,
        status,
      };
      let response = await Reservas.addReserva(element);
      return response;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  actualizarVentaStatus: async (id, status, value) => {
    try {
      let venta = (await Reservas.getCompraById(id)).values;
      venta.status = status;
      switch (status) {
        case "Reservada":
          venta["exaReservaId"] = value;
          break;
        case "Procesada":
          venta["ventaId"] = value;

          break;

        default:
          venta["exaVentaId"] = value;
          break;
      }
      let response = await venta.save();

      logData = {
        data: {
          id,
          status,
          value,
        },
        response,
      };
      apiVentasLogger.info("actualizarVentasStatus.loteria", logData);
      return response;
    } catch (e) {
      apiVentasLogger.error("comprarBoletos.error", {
        errorMessage: e.message,
      });
      throw new Error(e.message);
    }
  },
  getCompra: async (req, res) => {
    try {
      let ticketId = req.body.ticketId;
      let accountId = req.body.accountId;
      let response = await Reservas.getCompraByVentaId(ticketId, accountId);
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
              exaReservaResponse,
              exaVentaResponse,
              exaCancelReponse,
              amount: parseFloat(total).toFixed(2),
              prizeDetails: [],
            };
            let exaVentaResponse = await Wallet.sellLottery(exaVentaData);
            response.push({
              hasBalance: true,
              exaReservaId: reservaId,
              ventaId: venta.ventaId,
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
};

module.exports = ventasController;
