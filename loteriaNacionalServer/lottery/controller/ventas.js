const Lottery = require('../../loterianacional/controller/main');
const Results = require('../../results/controller/resultados');
const Resultados = require('../../results/controller/main');
const Sorteos = require('../../results/controller/sorteos');
const config = require('../../config/environment');
const Ventas = require('../../loterianacional/controller/ventas');
const Reservas = require('./reservas');
const Auth = require('../../exalogic/controller/auth');
const Wallet = require('../../exalogic/controller/wallet');

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
                "command": "checkToken",
                "systemCode": "1",
                "sessionToken": token,
                "language": "en",
                "currency": "USD"
            }
            let response = await Auth.authUser(authData);
            if (response['password']) delete response['password'];
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },
    getBalanceHttp: async (req, res) => {
        try {
            let token = req.body.token;
            /* {
    "token": "661c0ce5ccabbeb1136a"
} */

            let data = {
                "command": "getBalance",
                "systemCode": "1",
                "sessionToken": token,
                "language": "en",
                "currency": "USD"
            }
            let response = await Wallet.getBalance(data);
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
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
            let operationTimeStamp = new Date(Date.now()).toISOString().replace('T', " ").replace("Z", "");

            let data = {
                "command": "sellLottery",
                "systemCode": "1",
                "sessionToken": req.body.token,
                "transactionId": req.body.transactionId,
                "reserveId": req.body.reserveId,
                "language": "en",
                "currency": "USD",
                "operationTimeStamp": operationTimeStamp,
                "ticketId": req.body.ticketId,
                "amount": req.body.amount
            }
            let response = await Wallet.sellLottery(data);
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
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
            let operationTimeStamp = new Date(Date.now()).toISOString().replace('T', " ").replace("Z", "");
            let data = {
                "command": "cancelLottery",
                "systemCode": "1",
                "sessionToken": req.body.token,
                "transactionId": req.body.transactionId,
                "reserveId": req.body.reserveId,
                "language": "en",
                "currency": "USD",
                "operationTimeStamp": operationTimeStamp,
                "amount": req.body.amount
            }
            let response = await Wallet.cancelLottery(data);
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
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
            let operationTimeStamp = new Date(Date.now()).toISOString().replace('T', " ").replace("Z", "");
            let data = {
                "command": "reserveLottery",
                "systemCode": "1",
                "sessionToken": req.body.token,
                "transactionId": req.body.transactionId,
                "language": "en",
                "currency": "USD",
                "operationTimeStamp": operationTimeStamp,
                "amount": req.body.amount,
                "reservationDetails": req.body.reservationDetails
            }

            let response = await Wallet.cancelLottery(data);
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },
    authUser: async (data) => {
        try {
            let token = data.token;
            /* {
                "token": "661c0ce5ccabbeb1136a"
            } */
            let authData = {
                "command": "checkToken",
                "systemCode": "1",
                "sessionToken": token,
                "language": "en",
                "currency": "USD"
            }
            let response = await Auth.authUser(authData);
            if (response['password']) delete response['password'];
            return response;
        } catch (e) {
            throw e;
        }
    },
    getBalance: async (data) => {
        try {
            let token = data.token;
            /* {
    "token": "661c0ce5ccabbeb1136a"
} */

            let exaData = {
                "command": "getBalance",
                "systemCode": "1",
                "sessionToken": token,
                "language": "en",
                "currency": "USD"
            }
            let response = await Wallet.getBalance(exaData);
            return response;
        } catch (e) {
            throw e;
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
            let operationTimeStamp = new Date(Date.now()).toISOString().replace('T', " ").replace("Z", "");

            let exaData = {
                "command": "sellLottery",
                "systemCode": "1",
                "sessionToken": data.token,
                "transactionId": data.transactionId,
                "reserveId": data.reserveId,
                "language": "en",
                "currency": "USD",
                "operationTimeStamp": operationTimeStamp,
                "ticketId": data.ticketId,
                "amount": data.amount
            }
            let response = await Wallet.sellLottery(exaData);
            return response;
        } catch (e) {
            throw e;
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
            let operationTimeStamp = new Date(Date.now()).toISOString().replace('T', " ").replace("Z", "");
            let exaData = {
                "command": "cancelLottery",
                "systemCode": "1",
                "sessionToken": data.token,
                "transactionId": data.transactionId,
                "reserveId": data.reserveId,
                "language": "en",
                "currency": "USD",
                "operationTimeStamp": operationTimeStamp,
                "amount": data.amount
            }
            let response = await Wallet.cancelLottery(exaData);
            return response;
        } catch (e) {
            throw e;
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
            let operationTimeStamp = new Date(Date.now()).toISOString().replace('T', " ").replace("Z", "");
            let exaData = {
                "command": "reserveLottery",
                "systemCode": "1",
                "sessionToken": data.token,
                "transactionId": data.transactionId,
                "language": "en",
                "currency": "USD",
                "operationTimeStamp": operationTimeStamp,
                "amount": data.amount,
                "reservationDetails": data.reservationDetails
            }

            let response = await Wallet.cancelLottery(exaData);
            return response;
        } catch (e) {
            throw e;
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
             */            let lotteryToken = req.query.lotteryToken;
            let user = req.query.user;
            let finalResponse = await Ventas.consultarSorteosDisponibles(2, lotteryToken, user);
            res.status(200).json(finalResponse);
        } catch (e) {
            res.status(400).json(e.toString());
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
             */            let lotteryToken = req.query.lotteryToken;
            let user = req.query.user;
            let finalResponse = await Ventas.consultarSorteosDisponibles(1, lotteryToken, user);

            res.status(200).json(finalResponse);
        } catch (e) {
            res.status(400).json(e.toString());
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
 */            let lotteryToken = req.query.lotteryToken;
            let user = req.query.user;
            let finalResponse = await Ventas.consultarSorteosDisponibles(5, lotteryToken, user);

            res.status(200).json(finalResponse);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    searchLottoCombinacionesDisponibles: async (req, res) => {
        try {
            /* let token = req.body.token;

            let response = await ventasController.authUser(token); */
            let lotteryToken = req.body.lotteryToken
            let user = req.body.user
            let sorteo = req.body.sorteo;
            let combinacion = req.body.combinacion;
            let combinacionFigura = req.body.combinacionFigura;

            let combinacionesAux = await Ventas.obtenerCombinacionesDisponibles(2, sorteo, lotteryToken, combinacion, combinacionFigura, user);
            let combinaciones = combinacionesAux.map(element => {
                let combinacion = {
                    combinacion1: element.Num,
                    combinacion2: element.Num2,
                    combinacion3: element.Num3,
                    combinacion4: element.Num4,
                    display: element.Num.split(""),
                    status: false,
                    identificador: Math.random()
                }
                return combinacion
            });
            response = {
                combinaciones
            }

            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    searchLoteriaCombinacionesDisponibles: async (req, res) => {
        try {
            /* let token = req.body.token;

            let response = await ventasController.authUser(token); */
            let lotteryToken = req.body.lotteryToken
            let user = req.body.user
            let sorteo = req.body.sorteo;
            let combinacion = req.body.combinacion;
            let combinacionFigura = req.body.combinacionFigura;

            let combinacionesAux = await Ventas.obtenerCombinacionesDisponibles(1, sorteo, lotteryToken, combinacion, combinacionFigura, user);

            let combinaciones = combinacionesAux.map(element => {
                let combinacion = {

                    combinacion: element.Num,
                    display: element.Num.split(""),
                    fraccionesDisponibles: element.Fra.split(","),
                    seleccionados: [],
                    status: false,
                    identificador: Math.random()
                }
                return combinacion
            });

            response = {
                combinaciones
            }
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    searchPozoCombinacionesDisponibles: async (req, res) => {
        try {
            /* let token = req.body.token;

            let response = await ventasController.authUser(token); */
            let lotteryToken = req.body.lotteryToken
            let user = req.body.user
            let sorteo = req.body.sorteo;
            let combinacion = req.body.combinacion;
            let combinacionFigura = req.body.combinacionFigura;

            let combinacionesAux = await Ventas.obtenerCombinacionesDisponibles(5, sorteo, lotteryToken, combinacion, combinacionFigura, user);

            let combinaciones = combinacionesAux.map(element => {
                let combinacion = {
                    mascota: element.Fig,
                    combinacion1: element.Num,
                    combinacion2: element.Num2,
                    display: element.Num2.split(','),
                    //display: element.Num2.match(/.{1,2}/g),
                    status: false,
                    identificador: Math.random()
                }
                return combinacion
            });
            response = {
                combinaciones
            }

            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    reservarBoletos: async (req, res) => {
        try {
            /* let token = req.body.token;

            let response = await ventasController.authUser(token); */
            let lotteryToken = req.body.lotteryToken
            let user = req.body.user
            let loteria = req.body.loteria ? req.body.loteria : [];
            let lotto = req.body.lotto ? req.body.lotto : [];
            let pozo = req.body.pozo ? req.body.pozo : [];
            let reservaId = req.body.reservaId ? req.body.reservaId : 0;

            let reservasAux = await Ventas.reservarCombinaciones(loteria, lotto, pozo, lotteryToken, reservaId, user);

            //let reserva = await Ventas.reservarCombinaciones(5, sorteo, combinaciones, token);
            let reserva = "";
            response = {
                reservasAux,
                reserva
            }
            res.status(200).json(response);
        } catch (e) {
            console.log(e.toString());
            res.status(400).json(e.toString());
        }
    },

    eliminarBoletosDeReserva: async (req, res) => {
        try {
            /* let token = req.body.token;

            let response = await ventasController.authUser(token); */
            let lotteryToken = req.body.lotteryToken
            let user = req.body.user
            let loteria = req.body.loteria ? req.body.loteria : [];
            let lotto = req.body.lotto ? req.body.lotto : [];
            let pozo = req.body.pozo ? req.body.pozo : [];
            let reservaId = req.body.reservaId ? req.body.reservaId : 0;

            let reservasAux = await Ventas.eliminarReservas(loteria, lotto, pozo, lotteryToken, reservaId, user);

            //let reserva = await Ventas.reservarCombinaciones(5, sorteo, combinaciones, token);
            let reserva = "";
            let finalResponse = {
                reservasAux,
                reserva
            }

            res.status(200).json(finalResponse);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },
    comprarBoletos: async (req, res) => {
        try {
            let exaBalanceData = { token: req.body.token };
            //let balanceResponse = ventasController.getBalance(exaBalanceData)
            // if(balanceResponse.code<0) throw new Error('Balance insuficiente');
            let apiReservaData = {
                amount: req.body.amount,
                loteria: req.body.loteria,
                lotto: req.body.lotto,
                pozo: req.body.pozo,
                reservaId: req.body.reservaId,
            }
            //let apiReservaResponse = await ventasController.crearReserva(apiReservaData);
            let reservationDetails = [];
            let loteriaAux = req.body.loteria;
            let lottoAux = req.body.lotto;
            let pozoAux = req.body.pozo;
            console.log("preparando response details")
            let loteria = []
            for (id in loteriaAux) {
                let aux = {
                    "lotteryType": 1,
                    "lotteryName": "Loteria Nacional",
                    "drawNumber": loteriaAux[id].sorteo.sorteo,
                    "drawDate": loteriaAux[id].sorteo.fecha,
                    "subTotal": loteriaAux[id].subtotal,
                    "combinationC1": loteriaAux[id].ticket.combinacion1,
                    "fractions": loteriaAux[id].ticket.seleccionados,
                }
                reservationDetails.push(aux)
                loteria.push(loteriaAux[id])
            }
            let lotto = []
            for (id in lottoAux) {

                let aux = {
                    "lotteryType": 2,
                    "lotteryName": "Lotto",
                    "drawNumber": lottoAux[id].sorteo.sorteo,
                    "drawDate": lottoAux[id].sorteo.fecha,
                    "subTotal": lottoAux[id].subtotal,
                    "combinationC1": lottoAux[id].ticket.combinacion1,
                    "combinationC2": lottoAux[id].ticket.combinacion2,
                    "combinationC3": lottoAux[id].ticket.combinacion3,
                    "combinationC4": lottoAux[id].ticket.combinacion4,
                }
                reservationDetails.push(aux)
                lotto.push(lottoAux[id])
            }
            let pozo = []
            for (id in pozoAux) {

                let aux = {
                    "lotteryType": 5,
                    "lotteryName": "Pozo Millonario",
                    "drawNumber": pozoAux[id].sorteo.sorteo,
                    "drawDate": pozoAux[id].sorteo.fecha,
                    "subTotal": pozoAux[id].subtotal,
                    "combinationC1": pozoAux[id].ticket.combinacion1,
                    "combinationC2": pozoAux[id].ticket.combinacion2,
                    "combinationC3": pozoAux[id].ticket.combinacion3
                }
                reservationDetails.push(aux)
                pozo.push(pozoAux[id])
            }
            console.log("preparando reserve data")
            let exaReservaData = {
                token: req.body.token,
                transactionId: req.body.reservaId,
                amount: req.body.amount,
                reservationDetails,
            }
            //let exaReservaResponse = ventasController.reserveLottery(exaReservaData)
            // if(exaReservaResponse.code<0) throw new Error('No se pudo reservar saldo, por favor intente de nuevo');
            console.log("preparando sell data")

            let lotteryToken = req.body.lotteryToken
            let user = req.body.user

            let reservaId = req.body.reservaId;
            let ordComp = "39225"
            let total = req.body.amount
            console.log("En venta de loteria");
            console.log(req.body)
            let loteriaVentaResponse = await Ventas.venderBoletos(ordComp, total, loteria, lotto, pozo, lotteryToken, reservaId, user);
            // if(loteriaVentaResponse.status<0) throw new Error('No se pudo procesar la compra, por favor intente de nuevo');

            let exaVentaData = {
                token,
                transactionId: req.body.transactionId,
                reserveId: req.body.reservaId,
                ticketId: loteriaVentaResponse.ticketId,
                amount: req.body.amount
            }
            //let exaVentaResponse = ventasController.sellLottery(exaVentaData)
            // if(exaVentaResponse.code<0) throw new Error('No se pudo procesar la compra, por favor intente de nuevo');

            let apiVentaData = {

            };
            //let apiVentaResponse = ventasController.crearVenta(apiVentaData);
            let finalResponse = {
                data: loteriaVentaResponse,
                status: true
            }

            res.status(200).json(finalResponse);
        } catch (e) {
            res.status(400).json(JSON.stringify(e));
        }
    },
    buscarLottoBoleto: async (req, res) => {
        try {
            let sorteo = req.body.sorteo;
            let tipoLoteria = 2
            let boletinAddress = `${sourceBoletos}B${tipoLoteria}${sorteo}.jpg`

            res.status(200).json(boletinAddress);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    buscarLoteriaBoleto: async (req, res) => {
        try {
            let sorteo = req.body.sorteo;
            let tipoLoteria = 1
            let boletinAddress = `${sourceBoletos}B${tipoLoteria}${sorteo}.jpg`

            res.status(200).json(boletinAddress);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    buscarPozoBoleto: async (req, res) => {
        try {
            let sorteo = req.body.sorteo;
            let tipoLoteria = 5
            let boletinAddress = `${sourceBoletos}B${tipoLoteria}${sorteo}.jpg`
            res.status(200).json(boletinAddress);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },
    crearReserva: async (apiReservaData) => {
        let loteriaAux = apiReservaData.loteria
        let loteria = []
        for (id in loteriaAux) {
            let aux = loteriaAux[id].ticket;
            aux['fracciones'] = loteriaAux[id].ticket.seleccionados;
            aux['sorteo'] = loteriaAux[id].sorteo.sorteo;
            loteria.push(aux)
        }
        let lottoAux = apiReservaData.lotto
        let lotto = []
        for (id in lottoAux) {
            let aux = lottoAux[id];
            aux['sorteo'] = loteriaAux[id].sorteo.sorteo;
            lotto.push(aux)
        }
        let pozoAux = apiReservaData.pozo
        let pozo = []
        for (id in pozoAux) {
            let aux = pozoAux[id];
            aux['sorteo'] = loteriaAux[id].sorteo.sorteo;
            pozo.push(aux)
        }
        let total = apiReservaData.amount
        let reservaId = apiReservaData.reservaId
        let element = {
            loteria,
            pozo,
            lotto,
            total,
            reservaId

        }
        let response = await Reservas.addReserva(element);
        return response;
    },
    crearVenta: async (data) => {
        return data
    }
}

module.exports = ventasController;