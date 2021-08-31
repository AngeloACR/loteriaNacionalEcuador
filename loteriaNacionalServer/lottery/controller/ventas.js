const Lottery = require('../../loterianacional/controller/main');
const Results = require('../../results/controller/resultados');
const Resultados = require('../../results/controller/main');
const Sorteos = require('../../results/controller/sorteos');
const config = require('../../config/environment');
const Ventas = require('../../loterianacional/controller/ventas');
const Auth = require('../../exalogic/controller/auth');
const Wallet = require('../../exalogic/controller/wallet');

/*************************** CONSULTA DE RESULTADOS************************/

//let sourceBoletos = config.sourceBoletosLocal;
let sourceBoletos = config.sourceBoletosTest;
//let sourceBoletos = config.sourceBoletosProd;


const ventasController = {

    authUser: async (req, res) => {
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
            console.log(authData)
            let response = await Auth.authUser(authData);
            let finalResponse = {
                authData: response
            }
            res.status(200).json(finalResponse);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },
    getBalance: async (req, res) => {
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
            let finalResponse = {
                getBalanceData: response
            }
            res.status(200).json(finalResponse);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },
    sellLottery: async (req, res) => {
        try {
            //let token = req.query.token;
            /* {
                "token": "661c0ce5ccabbeb1136a"
                "reserveId": 123564987,
                "amount": "30.00"
                "ticketId": "13565132"
                "transactionId": "2223846696262170"
            } */

            let data = {
                "command": "sellLottery",
                "systemCode": "1",
                "sessionToken": req.body.token,
                "transactionId": req.body.transactionId,
                "reserveId": req.body.reserveId,
                "language": "en",
                "currency": "USD",
                "operationTimeStamp": Date.now(),
                "ticketId": req.body.ticketId,
                "amount": req.body.amount
            }

            let response = await Wallet.sellLottery(data);
            let finalResponse = {
                getBalanceData: response
            }
            res.status(200).json(finalResponse);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },
    cancelLottery: async (req, res) => {
        try {
            let token = req.body.token;

            /* {
                "token": "661c0ce5ccabbeb1136a"
                "reserveId": 123564987,
                "amount": "30.00",
                "transactionId": "2223846696262170"
            } */
            let data = {
                "command": "cancelLottery",
                "systemCode": "1",
                "sessionToken": req.body.token,
                "transactionId": req.body.transactionId,
                "reserveId": req.body.reserveId,
                "language": "en",
                "currency": "USD",
                "operationTimeStamp": Date.now(),
                "amount": req.body.amount
            }
            let response = await Wallet.cancelLottery(data);
            let finalResponse = {
                getBalanceData: response
            }
            res.status(200).json(finalResponse);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },
    reserveLottery: async (req, res) => {
        try {
            /*
            {
                "token": "661c0ce5ccabbeb1136a"
                "transactionId": "2223846696262170",
                "amount": "40.00",
                "reservationDetails": [
                    {
                        "lotteryType": 2,
                        "lotteryName": "Lotto",
                        "drawNumber": 2578,
                        "drawDate": "2021-05-10",
                        "subTotal": 10.0,
                        "combinationC": "267855",
                        "combinationC2": "256987",
                        "combinationC3": "526987",
                        "combinationC4": "075366"
                    }]
            }
            
            */
            let data = {
                "command": "reserveLottery",
                "systemCode": "1",
                "sessionToken": req.body.token,
                "transactionId": "2223846696262170",
                "language": "en",
                "currency": "USD",
                "operationTimeStamp": Date.now(),
                "amount": req.body.amount,
                "reservationDetails": req.body.reservationDetails
            }

            let response = await Wallet.cancelLottery(data);
            let finalResponse = {
                getBalanceData: response
            }
            res.status(200).json(finalResponse);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    searchLottoSorteosDisponibles: async (req, res) => {
        try {
            let token = req.query.token;

            let response = await Auth.authUser(token);
            let lotteryToken = response.lotteryToken;
            let finalResponse = await Ventas.consultarSorteosDisponibles(2, lotteryToken);
            res.status(200).json(finalResponse);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    searchLoteriaSorteosDisponibles: async (req, res) => {
        try {
            let token = req.query.token;
            //let response = await Auth.authUser(token);
            let response = await Ventas.autenticarUsuario();
            let lotteryToken = response.token;
            let finalResponse = await Ventas.consultarSorteosDisponibles(1, lotteryToken);

            res.status(200).json(finalResponse);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    searchPozoSorteosDisponibles: async (req, res) => {
        try {
            let token = req.query.token;

            let response = await Auth.authUser(token);
            let lotteryToken = response.lotteryToken;
            let finalResponse = await Ventas.consultarSorteosDisponibles(5, lotteryToken);

            res.status(200).json(finalResponse);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    searchLottoCombinacionesDisponibles: async (req, res) => {
        try {
            let token = req.body.token;

            let response = await Auth.authUser(token);
            let sorteo = req.body.sorteo;
            let combinacion = req.body.combinacion;
            let combinacionFigura = req.body.combinacionFigura;

            let combinacionesAux = await Ventas.obtenerCombinacionesDisponibles(2, sorteo, response.lotteryToken, combinacion, combinacionFigura);
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
            //let reserva = await Ventas.reservarCombinaciones(2, sorteo, combinaciones, token);
            let reserva = "";
            response = {
                combinaciones,
                reserva
            }

            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    searchLoteriaCombinacionesDisponibles: async (req, res) => {
        try {
            let token = req.body.token;

            let response = await Auth.authUser(token);
            let sorteo = req.body.sorteo;
            let combinacion = req.body.combinacion;
            let combinacionFigura = req.body.combinacionFigura;

            let combinacionesAux = await Ventas.obtenerCombinacionesDisponibles(1, sorteo, response.lotteryToken, combinacion, combinacionFigura);

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

            //let reserva = await Ventas.reservarCombinaciones(1, sorteo, combinaciones, token);
            let reserva = "";
            response = {
                combinaciones,
                reserva
            }
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    searchPozoCombinacionesDisponibles: async (req, res) => {
        try {
            let token = req.body.token;

            let response = await Auth.authUser(token);
            let sorteo = req.body.sorteo;
            let combinacion = req.body.combinacion;
            let combinacionFigura = req.body.combinacionFigura;

            let combinacionesAux = await Ventas.obtenerCombinacionesDisponibles(5, sorteo, response.lotteryToken, combinacion, combinacionFigura);

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
            //let reserva = await Ventas.reservarCombinaciones(5, sorteo, combinaciones, token);
            let reserva = "";
            response = {
                combinaciones,
                reserva
            }

            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    reservarBoletos: async (req, res) => {
        try {
            let token = req.body.token;
            console.log(token);

            let response = await Auth.authUser(token);
            console.log(response);
            let loteria = req.body.loteria ? req.body.loteria : [];
            let lotto = req.body.lotto ? req.body.lotto : [];
            let pozo = req.body.pozo ? req.body.pozo : [];
            let reservaId = req.body.reservaId ? req.body.reservaId : 0;
            console.log(loteria);
            console.log(lotto);
            console.log(pozo);
            console.log(reservaId);

            let reservasAux = await Ventas.reservarCombinaciones(loteria, lotto, pozo, response.lotteryToken, reservaId);
            console.log(reservasAux);

            //let reserva = await Ventas.reservarCombinaciones(5, sorteo, combinaciones, token);
            let reserva = "";
            response = {
                reservasAux,
                reserva
            }
            console.log(response);
            res.status(200).json(response);
        } catch (e) {
            console.log(e.toString());
            res.status(400).json(e.toString());
        }
    },

    eliminarBoletosDeReserva: async (req, res) => {
        try {
            let token = req.body.token;

            let response = await Auth.authUser(token);
            let loteria = req.body.loteria ? req.body.loteria : [];
            let lotto = req.body.lotto ? req.body.lotto : [];
            let pozo = req.body.pozo ? req.body.pozo : [];
            let reservaId = req.body.reservaId ? req.body.reservaId : 0;

            let reservasAux = await Ventas.eliminarReservas(loteria, lotto, pozo, response.lotteryToken, reservaId);

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
}

module.exports = ventasController;