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


    searchLottoSorteosDisponibles: async (req, res) => {
        try {
            let token = req.params.token;

            let response = await Auth.authUser(token);
            response = await Ventas.consultarSorteosDisponibles(2, response.lotteryToken);


            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    searchLoteriaSorteosDisponibles: async (req, res) => {
        try {
            let token = req.params.token;

            let response = await Auth.authUser(token);
            response = await Ventas.consultarSorteosDisponibles(1, response.lotteryToken);

            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    searchPozoSorteosDisponibles: async (req, res) => {
        try {
            let token = req.params.token;

            let response = await Auth.authUser(token);
            response = await Ventas.consultarSorteosDisponibles(5, response.lotteryToken);

            res.status(200).json(response);
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
            console.log(combinacionesAux);
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
                    display: element.Num.match(/.{1,2}/g),
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
}

module.exports = ventasController;