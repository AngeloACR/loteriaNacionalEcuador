const CacheLoteria = require("../../sorteosLoteriaNacional/controller/cache"); // COMUNICAR POR gRPC
const CacheLotto = require("../../sorteosLotto/controller/cache"); // COMUNICAR POR gRPC
const CachePozo = require("../../sorteosPozoMillonario/controller/cache"); // COMUNICAR POR gRPC
const CacheLaMillonaria = require("../../sorteosLaMillonaria/controller/cache"); // COMUNICAR POR gRPC
const CodigosPromocionales = require("../../codigosPromocionales/controller/main"); // COMUNICAR POR gRPC
const psdVentas = require("../../psdLoteria/ventas");
const Ventas = require("../models/main");
const Wallet = require("../../exalogic/wallet"); // COMUNICAR POR gRPC
const Ganadores = require("../../ganadores/models/main"); // COMUNICAR POR gRPC
const { ventasLogger } = require("../logging");
var errorHandler = require("../errors").errorHandler;

/*************************** VENTA DE BOLETOS************************/

const ventasController = {
  getDescuentos: async (req, res) => {
    try {
      let ip = req.headers["x-forwarded-for"];

      let lotteryToken = req.query.lotteryToken;
      let user = req.query.user;

      let response = await psdVentas.consultarDescuentos(
        lotteryToken,
        user,
        ip
      );

      res.status(200).json(response);
    } catch (e) {
      ventasLogger.error("reservarBoletos.error", {
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
  reservarSaldoExalogic: async (
    reservationDetails,
    venta,
    token,
    totalVenta
  ) => {
    /* RESERVA CON EXALOGIC */
    let exaReservaId = Date.now();

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

    let reservaStatusResponse = await Ventas.actualizarStatus(
      venta._id,
      "Reservada",
      exaReservaId
    );

    let logData = {
      data: exaReservaData,
      response: exaReservaResponse,
      function: "Wallet.reserveLottery",
    };
    ventasLogger.info("reservaSaldoExalogic.api", logData);
    return exaReservaResponse;
  },
  ventaPSD: async (
    exaReservaId,

    total,
    totalConDesc,
    loteria,
    lotto,
    pozo,
    millonaria,
    lotteryToken,
    reservaId,
    user,
    venta,
    ip
  ) => {
    let ordComp = exaReservaId;
    let loteriaVentaResponse = await psdVentas.venderBoletos(
      ordComp,
      total,
      totalConDesc,
      loteria,
      lotto,
      pozo,
      millonaria,
      lotteryToken,
      reservaId,
      user,
      ip
    );
    if (!loteriaVentaResponse.status) {
      await errorHandler.loteriaSellError(exaReservaData);
    }
    let logData = {
      data: {
        ordComp,
        total,
        loteria,
        lotto,
        pozo,
        millonaria,
        lotteryToken,
        reservaId,
        user,
        ip,
      },
      response: loteriaVentaResponse,
      function: "Ventas.venderBoletos",
    };
    ventasLogger.info("comprarBoletos.loteria", logData);
    let ventaLoteriaStatusResponse = await Ventas.actualizarStatus(
      venta._id,
      "Procesada",
      loteriaVentaResponse.ticketId
    );
    return loteriaVentaResponse;
  },
  ventaExalogic: async (
    loteriaVentaResponse,
    venta,
    personaId,
    reservationDetails,
    exaReservaId,
    lotteryToken,
    token,
    totalVenta,
    user,
    ip
  ) => {
    /* VENTA EN EXALOGIC */

    let instantaneas = loteriaVentaResponse.instantaneas;
    let prizeDetails = [];
    let instantaneaStatus = false;
    let instantaneaData = {};
    if (instantaneas != "" && instantaneas.length != 0) {
      let loteriaSorteos = await CacheLoteria.getSorteosDisponibles();
      let lottoSorteos = await CacheLotto.getSorteosDisponibles();
      let pozoSorteos = await CachePozo.getSorteosDisponibles();
      let millonariaSorteos = await CacheLaMillonaria.getSorteosDisponibles();
      instantaneaStatus = true;
      for (let j = 0; j < instantaneas.length; j++) {
        const instantanea = instantaneas[j];

        for (let i = 0; i < instantanea.premios.length; i++) {
          const premio = instantanea.premios[i];

          let nombreLoteria;
          let tipoLoteria = parseInt(instantanea.sorteo.JId);

          let prizeDetail = {
            lotteryType: tipoLoteria,
            drawNumber: parseInt(instantanea.sorteo.Sort),
            combinationC1: premio.Num,
            lotteryName: nombreLoteria,
            prize: parseFloat(premio.Val).toFixed(2),
            prizeWithDiscount: parseFloat(premio.ConDesc).toFixed(2),
            prizeDescription: premio.Prem.normalize("NFD").replace(
              /[\u0300-\u036f]/g,
              ""
            ),
          };

          let drawDateAux;
          switch (tipoLoteria) {
            case 1:
              prizeDetail["lotteryName"] = "Loteria Nacional";
              drawDateAux = loteriaSorteos
                .find((sorteo) => sorteo.sorteo == instantanea.sorteo.Sort)
                .fecha.split(" ")[0]
                .split("/");
              prizeDetail[
                "drawDate"
              ] = `${drawDateAux[2]}-${drawDateAux[1]}-${drawDateAux[0]}`;
              prizeDetail["fractions"] = premio.Fra;

              break;
            case 2:
              prizeDetail["lotteryName"] = "Lotto";
              drawDateAux = lottoSorteos
                .find((sorteo) => sorteo.sorteo == instantanea.sorteo.Sort)
                .fecha.split(" ")[0]
                .split("/");
              prizeDetail[
                "drawDate"
              ] = `${drawDateAux[2]}-${drawDateAux[1]}-${drawDateAux[0]}`;
              let item = reservationDetails.find(
                (element) => prizeDetail.combinationC1 == element.combinationC1
              );
              prizeDetail["combinationC2"] = item.combinationC2;
              prizeDetail["combinationC3"] = item.combinationC3;
              prizeDetail["combinationC4"] = item.combinationC4;
              prizeDetail["combinationC5"] = item.combinationC5;
              break;

            case 5:
              prizeDetail["lotteryName"] = "Pozo Millonario";
              drawDateAux = pozoSorteos
                .find((sorteo) => sorteo.sorteo == instantanea.sorteo.Sort)
                .fecha.split(" ")[0]
                .split("/");
              prizeDetail[
                "drawDate"
              ] = `${drawDateAux[2]}-${drawDateAux[1]}-${drawDateAux[0]}`;
              break;
            case 14:
              prizeDetail["lotteryName"] = "La Millonaria";
              drawDateAux = millonariaSorteos
                .find((sorteo) => sorteo.sorteo == instantanea.sorteo.Sort)
                .fecha.split(" ")[0]
                .split("/");
              prizeDetail[
                "drawDate"
              ] = `${drawDateAux[2]}-${drawDateAux[1]}-${drawDateAux[0]}`;
              prizeDetail["fractions"] = premio.Fra;
              prizeDetail["combinationC2"] = premio.Num2;
              break;
          }
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
          await Ganadores.crearGanador(ganador);
          let logData = {
            data: ganador,
            response: loteriaVentaResponse,
            function: "Ganadores.crearGanador",
          };
          ventasLogger.info("comprarBoletos.api", logData);
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
    let logData = {
      data: exaVentaData,
      response: exaVentaResponse,
      function: "Wallet.sellLottery",
    };
    ventasLogger.info("comprarBoletos.api", logData);

    let ventaExalogicStatusResponse = await Ventas.actualizarStatus(
      venta._id,
      "Completada",
      exaVentaId
    );
    let instantaneaResponse = {
      status: instantaneaStatus,
      data: instantaneaData,
    };

    return { exaVentaResponse, instantaneaResponse };
  },
  comprarBoletos: async (req, res) => {
    try {
      ventasLogger.silly("comprarBoletos");
      let ip = req.headers["x-forwarded-for"]
        ? req.headers["x-forwarded-for"]
        : req.socket.remoteAddress;

      let token = req.body.token;
      let lotteryToken = req.body.lotteryToken;

      let user = req.body.user;
      let accountId = req.body.accountId;
      let personaId = req.body.personaId;

      let loteriaAux = req.body.loteria;
      let lottoAux = req.body.lotto;
      let pozoAux = req.body.pozo;
      let millonariaAux = req.body.millonaria;
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
      let millonaria = [];
      for (id in millonariaAux) {
        let drawDateAux = millonariaAux[id].sorteo.fecha.split(" ")[0].split("/");
        let drawDate = `${drawDateAux[2]}-${drawDateAux[1]}-${drawDateAux[0]}`;
        let aux = {
          lotteryType: 14,
          lotteryName: "La Millonaria",
          drawNumber: parseInt(millonariaAux[id].sorteo.sorteo),
          drawDate,
          subTotal: parseFloat(millonariaAux[id].subtotal).toFixed(2),
          combinationC1: millonariaAux[id].ticket.combinacion1,
          combinationC2: millonariaAux[id].ticket.combinacion2,
          fractions: millonariaAux[id].ticket.seleccionados,
        };
        reservationDetails.push(aux);
        millonaria.push(millonariaAux[id]);
      }
      let total = parseFloat(req.body.amount).toFixed(2);
      let hasDescuento = req.body.hasDescuento;
      let totalConDesc = parseFloat(req.body.amountConDesc).toFixed(2);

      let reservaId = req.body.reservaId;
      //let totalVenta = hasDescuento ? totalConDesc : total;
      let totalVenta = total;
      /* CARGA DE COMPRA EN DB */
      let apiVentaData = {
        amount: total,
        amountConDesc: totalConDesc,
        loteria: loteriaAux,
        lotto: lottoAux,
        millonaria: millonariaAux,
        user,
        pozo: pozoAux,
        reservaId: reservaId,
        accountId,
        status: "Pendiente",
      };
      let apiVentaResponse = await ventasController.crearVenta(apiVentaData);

      let venta = apiVentaResponse.values;

      let reservaStatusResponse = await ventasController.reservarSaldoExalogic(
        reservationDetails,
        venta,
        token,
        totalVenta
      );
      let exaReservaId = reservaStatusResponse.transactionId;
      /* VENTA EN LOTERIA */
      let loteriaVentaResponse = await ventasController.ventaPSD(
        exaReservaId,
        total,
        totalConDesc,
        loteria,
        lotto,
        pozo,
        millonaria,
        lotteryToken,
        reservaId,
        user,
        venta,
        ip
      );
      let exaVentaResponse = await ventasController.ventaExalogic(
        loteriaVentaResponse,
        venta,
        personaId,
        reservationDetails,
        exaReservaId,
        lotteryToken,
        token,
        totalVenta,
        user,
        ip
      );

      /* GENERAR CODIGOS PROMOCIONALES */
      let codigoPromocionalResponse = await CodigosPromocionales.setCode(
        parseFloat(totalVenta),
        personaId,
        loteriaVentaResponse.ticketId,
        ip
      );

      /* RESPUESTA DE API */
      let instantaneaResponse = exaVentaResponse.instantaneaResponse;
      let finalResponse = {
        data: apiVentaResponse,
        instantanea: instantaneaResponse,
        codigoPromocional: codigoPromocionalResponse,
        status: true,
      };

      res.status(200).json(finalResponse);
    } catch (e) {
      ventasLogger.error("comprarBoletos.error", {
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

  crearVenta: async (apiReservaData) => {
    try {
      let loteriaAux = apiReservaData.loteria;
      let loteria = [];
      for (id in loteriaAux) {
        let aux = {};
        aux["combinacion1"] = loteriaAux[id].ticket.combinacion;
        aux["fracciones"] = loteriaAux[id].ticket.seleccionados;
        aux["subtotal"] = parseFloat(loteriaAux[id].subtotal).toFixed(2);
        aux["tieneDescuento"] = loteriaAux[id].tieneDescuento;
        aux["subtotalConDesc"] = parseFloat(
          loteriaAux[id].subtotalConDesc
        ).toFixed(2);
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
        aux["tieneDescuento"] = lottoAux[id].tieneDescuento;
        aux["subtotalConDesc"] = parseFloat(
          lottoAux[id].subtotalConDesc
        ).toFixed(2);
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
        aux["tieneDescuento"] = pozoAux[id].tieneDescuento;
        aux["subtotalConDesc"] = parseFloat(
          pozoAux[id].subtotalConDesc
        ).toFixed(2);
        aux["fecha"] = pozoAux[id].sorteo.fecha;
        pozo.push(aux);
      }
      let millonariaAux = apiReservaData.millonaria;
      let millonaria = [];
      for (id in millonariaAux) {
        let aux = {};
        aux["combinacion1"] = millonariaAux[id].ticket.combinacion1;
        aux["combinacion2"] = millonariaAux[id].ticket.combinacion2;
        aux["fracciones"] = millonariaAux[id].ticket.seleccionados;
        aux["sorteo"] = millonariaAux[id].sorteo.sorteo;
        aux["subtotal"] = parseFloat(millonariaAux[id].subtotal).toFixed(2);
        aux["tieneDescuento"] = millonariaAux[id].tieneDescuento;
        aux["subtotalConDesc"] = parseFloat(
          millonariaAux[id].subtotalConDesc
        ).toFixed(2);
        aux["fecha"] = millonariaAux[id].sorteo.fecha;
        millonaria.push(aux);
      }
      let total = parseFloat(apiReservaData.amount).toFixed(2);
      let totalConDesc = parseFloat(apiReservaData.amountConDesc).toFixed(2);
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
        millonaria,
        total,
        totalConDesc,
        reservaId,
        ventaId,
        user,
        accountId,
        status,
      };
      let response = await Ventas.addVenta(element);
      return response;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  actualizarVentaStatus: async (id, status, value) => {
    try {
      let venta = (await Ventas.getVentaById(id)).values;
      venta["status"] = status;
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

      let logData = {
        data: {
          id,
          status,
          value,
        },
        response,
      };
      ventasLogger.info("actualizarVentasStatus.loteria", logData);
      return response;
    } catch (e) {
      ventasLogger.error("comprarBoletos.error", {
        errorMessage: e.message,
      });
      throw new Error(e.message);
    }
  },
  getCompra: async (req, res) => {
    try {
      let ticketId = req.body.ticketId;
      let accountId = req.body.accountId;
      let personaId = req.body.personaId;
      let codigoPromocionalResponse = await CodigosPromocionales.getCode(
        personaId,
        ticketId,
        ip
      );

      let response = await Ventas.getVentaByVentaId(ticketId, accountId);
      response['codigoPromocional'] = codigoPromocionalResponse;
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
