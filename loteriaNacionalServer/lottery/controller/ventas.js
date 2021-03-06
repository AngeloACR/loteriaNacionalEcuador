const Lottery = require("../../loterianacional/controller/main");
const Results = require("../../results/controller/resultados");
const Resultados = require("../../results/controller/main");
const Sorteos = require("../../results/controller/sorteos");
const config = require("../../config/environment");
const Ventas = require("../../loterianacional/controller/ventas");
const Reservas = require("./reservas");
const Auth = require("../../exalogic/controller/auth");
const Wallet = require("../../exalogic/controller/wallet");

/*************************** CONSULTA DE RESULTADOS************************/

//let sourceBoletos = config.sourceBoletosLocal;
//let sourceBoletos = config.sourceBoletosTest;
let sourceBoletos = config.sourceBoletosProd;

const ventasController = {
  authUserHttp: async (req, res) => {
    try {
      let token = req.body.token;
      /* {
                "token": "661c0ce5ccabbeb1136a"
            } */
      let authData = {
        command: "checkToken",
        systemCode: "1",
        sessionToken: token,
        language: "en",
        currency: "USD",
      };
      console.log(authData);
      let response = await Auth.authUser(authData);
      if (response["password"]) delete response["password"];
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  getBalanceHttp: async (req, res) => {
    try {
      let token = req.body.token;
      /* {
    "token": "661c0ce5ccabbeb1136a"
} */

      let data = {
        command: "getBalance",
        systemCode: "1",
        sessionToken: token,
        language: "en",
        currency: "USD",
      };
      let response = await Wallet.getBalance(data);
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  sellLotteryHttp: async (req, res) => {
    try {
      //let token = req.query.token;
      /* {
                "token": "661c0ce5ccabbeb1136a"
                "reserveId": 123564987,
                "amount": "30.00"
                "ticketId": "13565132"
                "transactionId": "2223846696262170"
            } */
      let operationTimeStamp = new Date(Date.now())
        .toISOString()
        .replace("T", " ")
        .replace("Z", "");

      let data = {
        command: "sellLottery",
        systemCode: "1",
        sessionToken: req.body.token,
        transactionId: req.body.transactionId,
        reserveId: req.body.reserveId,
        language: "en",
        currency: "USD",
        operationTimeStamp: operationTimeStamp,
        ticketId: req.body.ticketId,
        amount: req.body.amount,
      };

      let response = await Wallet.sellLottery(data);
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  cancelLotteryHttp: async (req, res) => {
    try {
      let token = req.body.token;

      /* {
                "token": "661c0ce5ccabbeb1136a"
                "reserveId": 123564987,
                "amount": "30.00",
                "transactionId": "2223846696262170"
            } */
      let operationTimeStamp = new Date(Date.now())
        .toISOString()
        .replace("T", " ")
        .replace("Z", "");
      let data = {
        command: "cancelLottery",
        systemCode: "1",
        sessionToken: req.body.token,
        transactionId: req.body.transactionId,
        reserveId: req.body.reserveId,
        language: "en",
        currency: "USD",
        operationTimeStamp: operationTimeStamp,
        amount: req.body.amount,
      };
      let response = await Wallet.cancelLottery(data);
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  reserveLotteryHttp: async (req, res) => {
    try {
      /*
            {
                "token": "661c0ce5ccabbeb1136a",
                "transactionId": "2223846696262170",
                "amount": "40.00",
                "reservationDetails": [
                    {
                        "lotteryType": 2,
                        "lotteryName": "Lotto",
                        "drawNumber": 2578,
                        "drawDate": "2021-05-10",
                        "subTotal": 10.0,
                        "combinationC1": "267855",
                        "combinationC2": "256987",
                        "combinationC3": "526987",
                        "combinationC4": "075366"
                    }]
            }
            
            */
      let operationTimeStamp = new Date(Date.now())
        .toISOString()
        .replace("T", " ")
        .replace("Z", "");
      let data = {
        command: "reserveLottery",
        systemCode: "1",
        sessionToken: req.body.token,
        transactionId: req.body.transactionId,
        language: "en",
        currency: "USD",
        operationTimeStamp: operationTimeStamp,
        amount: req.body.amount,
        reservationDetails: req.body.reservationDetails,
      };

      let response = await Wallet.cancelLottery(data);
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  authUser: async (data) => {
    try {
      let token = data.token;
      /* {
                "token": "661c0ce5ccabbeb1136a"
            } */
      let authData = {
        command: "checkToken",
        systemCode: "1",
        sessionToken: token,
        language: "en",
        currency: "USD",
      };
      let response = await Auth.authUser(authData);
      if (response["password"]) delete response["password"];
      return response;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  getBalance: async (data) => {
    try {
      let token = data.token;
      /* {
    "token": "661c0ce5ccabbeb1136a"
} */

      let exaData = {
        command: "getBalance",
        systemCode: "1",
        sessionToken: token,
        language: "en",
        currency: "USD",
      };
      let response = await Wallet.getBalance(exaData);
      return response;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  sellLottery: async (data) => {
    try {
      /* {
                "token": "661c0ce5ccabbeb1136a"
                "reserveId": 123564987,
                "amount": "30.00"
                "ticketId": "13565132"
                "transactionId": "2223846696262170"
            } */
      let operationTimeStamp = new Date(Date.now())
        .toISOString()
        .replace("T", " ")
        .replace("Z", "");

      let exaData = {
        command: "sellLottery",
        systemCode: "1",
        sessionToken: data.token,
        transactionId: data.transactionId,
        reserveId: data.reserveId,
        language: "en",
        currency: "USD",
        operationTimeStamp: operationTimeStamp,
        ticketId: data.ticketId,
        amount: data.amount,
        prizeDetails: data.prizeDetails,
      };
      let response = await Wallet.sellLottery(exaData);
      return response;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  cancelLottery: async (data) => {
    try {
      /* {
                "token": "661c0ce5ccabbeb1136a"
                "reserveId": 123564987,
                "amount": "30.00",
                "transactionId": "2223846696262170"
            } */
      let operationTimeStamp = new Date(Date.now())
        .toISOString()
        .replace("T", " ")
        .replace("Z", "");
      let exaData = {
        command: "cancelLottery",
        systemCode: "1",
        sessionToken: data.token,
        transactionId: data.transactionId,
        reserveId: data.reserveId,
        language: "en",
        currency: "USD",
        operationTimeStamp: operationTimeStamp,
        amount: data.amount,
      };
      let response = await Wallet.cancelLottery(exaData);
      return response;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  reserveLottery: async (data) => {
    try {
      /*
            {
                "token": "661c0ce5ccabbeb1136a",
                "transactionId": "2223846696262170",
                "amount": "40.00",
                "reservationDetails": [
                    {
                        "lotteryType": 2,
                        "lotteryName": "Lotto",
                        "drawNumber": 2578,
                        "drawDate": "2021-05-10",
                        "subTotal": 10.0,
                        "combinationC1": "267855",
                        "combinationC2": "256987",
                        "combinationC3": "526987",
                        "combinationC4": "075366"
                    }]
            }
            
            */
      let operationTimeStamp = new Date(Date.now())
        .toISOString()
        .replace("T", " ")
        .replace("Z", "");
      let exaData = {
        command: "reserveLottery",
        systemCode: "1",
        sessionToken: data.token,
        transactionId: data.transactionId,
        language: "en",
        currency: "USD",
        operationTimeStamp: operationTimeStamp,
        amount: data.amount,
        reservationDetails: data.reservationDetails,
      };
      console.log(exaData);
      let response = await Wallet.reserveLottery(exaData);
      return response;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  searchLottoSorteosDisponibles: async (req, res) => {
    try {
      /*             let token = req.query.token;
                        let authData = {
                            token
                        }
                        let response = await ventasController.authUser(authData);
                        let lotteryToken = response.lotteryToken;
                        let user = response.user_;
             */ let lotteryToken = req.query.lotteryToken;
      let user = req.query.user;
      let finalResponse = await Ventas.consultarSorteosDisponibles(
        2,
        lotteryToken,
        user
      );
      res.status(200).json(finalResponse);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  searchLoteriaSorteosDisponibles: async (req, res) => {
    try {
      /*             let token = req.query.token;
                        let authData = {
                            token
                        }
                        let response = await ventasController.authUser(authData);
                        let lotteryToken = response.lotteryToken;
                        let user = response.user_;
             */
      let lotteryToken = req.query.lotteryToken;
      let user = req.query.user;
      let finalResponse = await Ventas.consultarSorteosDisponibles(
        1,
        lotteryToken,
        user
      );
      res.status(200).json(finalResponse);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      let errorstack = e.stack;
      res.status(400).json(response);
    }
  },
  searchPozoSorteosDisponibles: async (req, res) => {
    try {
      /*             let token = req.query.token;
            let authData = {
                token
            }
            let response = await ventasController.authUser(authData);
            let lotteryToken = response.lotteryToken;
            let user = response.user_;
 */ let lotteryToken = req.query.lotteryToken;
      let user = req.query.user;
      let finalResponse = await Ventas.consultarSorteosDisponibles(
        5,
        lotteryToken,
        user
      );

      res.status(200).json(finalResponse);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  searchLottoCombinacionesDisponibles: async (req, res) => {
    try {
      /* let token = req.body.token;

            let response = await ventasController.authUser(token); */
      let lotteryToken = req.body.lotteryToken;
      let user = req.body.user;
      let sorteo = req.body.sorteo;
      let combinacion = req.body.combinacion;
      let combinacionFigura = req.body.combinacionFigura;

      let combinacionesAux = await Ventas.obtenerCombinacionesDisponibles(
        2,
        sorteo,
        lotteryToken,
        combinacion,
        combinacionFigura,
        user
      );
      let combinaciones = combinacionesAux.map((element) => {
        let combinacion = {
          combinacion1: element.Num,
          combinacion2: element.Num2,
          combinacion3: element.Num3,
          combinacion4: element.Num4,
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
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  searchLoteriaCombinacionesDisponibles: async (req, res) => {
    try {
      /* let token = req.body.token;

            let response = await ventasController.authUser(token); */
      let lotteryToken = req.body.lotteryToken;
      let user = req.body.user;
      let sorteo = req.body.sorteo;
      let combinacion = req.body.combinacion;
      let combinacionFigura = req.body.combinacionFigura;

      let combinacionesAux = await Ventas.obtenerCombinacionesDisponibles(
        1,
        sorteo,
        lotteryToken,
        combinacion,
        combinacionFigura,
        user
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
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  searchPozoCombinacionesDisponibles: async (req, res) => {
    try {
      /* let token = req.body.token;

            let response = await ventasController.authUser(token); */
      let lotteryToken = req.body.lotteryToken;
      let user = req.body.user;
      let sorteo = req.body.sorteo;
      let combinacion = req.body.combinacion;
      let combinacionFigura = req.body.combinacionFigura;

      let combinacionesAux = await Ventas.obtenerCombinacionesDisponibles(
        5,
        sorteo,
        lotteryToken,
        combinacion,
        combinacionFigura,
        user
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
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  reservarBoletos: async (req, res) => {
    try {
      /* let token = req.body.token;

            let response = await ventasController.authUser(token); */
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
        user
      );

      //let reserva = await Ventas.reservarCombinaciones(5, sorteo, combinaciones, token);
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  eliminarBoletosDeReserva: async (req, res) => {
    try {
      /* let token = req.body.token;

            let response = await ventasController.authUser(token); */
      let lotteryToken = req.body.lotteryToken;
      let user = req.body.user;
      let loteria = req.body.loteria ? req.body.loteria : [];
      let lotto = req.body.lotto ? req.body.lotto : [];
      let pozo = req.body.pozo ? req.body.pozo : [];
      let reservaId = req.body.reservaId ? req.body.reservaId : 0;
      console.log(req.body);
      let finalResponse = await Ventas.eliminarReservas(
        loteria,
        lotto,
        pozo,
        lotteryToken,
        reservaId,
        user
      );

      res.status(200).json(finalResponse);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  comprarBoletos: async (req, res) => {
    try {
      let exaBalanceData = { token: req.body.token };
      let exaReservaId = Date.now();
      let token = req.body.token;
      let reservationDetails = [];
      let loteriaAux = req.body.loteria;
      let lottoAux = req.body.lotto;
      let pozoAux = req.body.pozo;
      let total = parseFloat(req.body.amount).toFixed(2);
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
        amount: total,
        reservationDetails,
      };
      let exaReservaResponse = await ventasController.reserveLottery(
        exaReservaData
      );
      // if(exaReservaResponse.code<0) throw new Error('No se pudo reservar saldo, por favor intente de nuevo');

      let lotteryToken = req.body.lotteryToken;
      let user = req.body.user;

      let reservaId = req.body.reservaId;
      let ordComp = exaReservaId;
      let loteriaVentaResponse = await Ventas.venderBoletos(
        ordComp,
        total,
        loteria,
        lotto,
        pozo,
        lotteryToken,
        reservaId,
        user
      );
      // if(loteriaVentaResponse.status<0) throw new Error('No se pudo procesar la compra, por favor intente de nuevo');
      console.log(loteriaVentaResponse);
      let instantaneas = loteriaVentaResponse.instantaneas;
      let prizeDetails = [];
      let instantaneaStatus = false;
      let instantaneaData = {};
      if (instantaneas != "" && instantaneas.length != 0) {
        instantaneaStatus = true;
        /*
        prizeDetails: [
            {
              combination: '18771',
              fraction: '47',
              prizeName: 'INSTANTANEA REINTEGROS',
              subtotal: '1.00',
            },
            {
              combination: '18771',
              fraction: '88',
              prizeName: 'INSTANTANEA REINTEGROS',
              subtotal: '1.00',
            }
          ],
          */
        let total = 0;
        let prizeDetails = [];
        instantaneas.forEach((instantanea) => {
          instantanea.premios.forEach((premio) => {
            let prizeDetail = {
              lotteryType: instantanea.sorteo.JId,
              lotteryName: instantanea.sorteo.JNomb,
              drawNumber: instantanea.sorteo.Sort,
              drawDate: instantanea.sorteo.SortNomb,
              combinationC1: premio.Num,
              fractions: [premio.Fra],
              prize: parseFloat(premio.Val).toFixed(2),
              prizeWithDiscount: parseFloat(premio.ConDesc).toFixed(2),
              prizeDescription: premio.Prem,
            };
            prizeDetails.push(prizeDetail);
            total += parseFloat(premio.ConDesc);
          });
        });
        let exaInstantaneaData = {
          token,
          amount: parseFloat(total).toFixed(2),
        };
        //let exaInstantaneaResponse = await ventasController.addBalance(exaInstantaneaData);
        instantaneaData = prizeDetails;
      }
      let exaVentaId = Date.now();
      let exaVentaData = {
        token,
        transactionId: exaVentaId,
        reserveId: exaReservaId,
        ticketId: loteriaVentaResponse.ticketId,
        amount: total,
        prizeDetails,
      };
      let exaVentaResponse = await ventasController.sellLottery(exaVentaData);
      // if(exaVentaResponse.code<0) throw new Error('No se pudo procesar la compra, por favor intente de nuevo');

      let apiVentaData = {
        amount: req.body.amount,
        loteria: req.body.loteria,
        lotto: req.body.lotto,
        pozo: req.body.pozo,
        reservaId: req.body.reservaId,
        ventaId: loteriaVentaResponse.ticketId,
        exaReservaId,
        exaVentaId,
      };
      let apiVentaResponse = await ventasController.crearReserva(apiVentaData);
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
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  buscarLottoBoleto: async (req, res) => {
    try {
      let sorteo = req.body.sorteo;
      let tipoLoteria = 2;
      let boletinAddress = `${sourceBoletos}B${tipoLoteria}${sorteo}.jpg`;

      res.status(200).json(boletinAddress);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  buscarLoteriaBoleto: async (req, res) => {
    try {
      let sorteo = req.body.sorteo;
      let tipoLoteria = 1;
      let boletinAddress = `${sourceBoletos}B${tipoLoteria}${sorteo}.jpg`;

      res.status(200).json(boletinAddress);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
      };
      res.status(400).json(response);
    }
  },
  buscarPozoBoleto: async (req, res) => {
    try {
      let sorteo = req.body.sorteo;
      let tipoLoteria = 5;
      let boletinAddress = `${sourceBoletos}B${tipoLoteria}${sorteo}.jpg`;
      res.status(200).json(boletinAddress);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
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
      let element = {
        loteria,
        exaReservaId,
        pozo,
        exaVentaId,
        lotto,
        total,
        reservaId,
        ventaId,
      };
      let response = await Reservas.addReserva(element);
      return response;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  crearVenta: async (data) => {
    return data;
  },
  getCompra: async (req, res) => {
    try {
      let ticketId = req.body.ticketId;
      let response = await Reservas.getCompraByVentaId(ticketId);
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

module.exports = ventasController;
