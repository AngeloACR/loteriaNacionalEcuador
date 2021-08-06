const Lottery = require('../../loterianacional/controller/main');
const Results = require('../../results/controller/resultados');
const Resultados = require('../../results/controller/main');
const Sorteos = require('../../results/controller/sorteos');
const config = require('../../config/environment');
const Ventas = require('../../loterianacional/controller/ventas');

/*************************** CONSULTA DE RESULTADOS************************/

//let sourceBoletos = config.sourceBoletosLocal;
let sourceBoletos = config.sourceBoletosTest;
//let sourceBoletos = config.sourceBoletosProd;


const ventasController = {


    searchLottoSorteosDisponibles: async (req, res) => {
        try {
            let response = await Ventas.autenticarUsuario();
            let token = response.token;
            response = await Ventas.consultarSorteosDisponibles(2, token);


            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    searchLoteriaSorteosDisponibles: async (req, res) => {
        try {
            let response = await Ventas.autenticarUsuario();
            let token = response.token;
            response = await Ventas.consultarSorteosDisponibles(1, token);

            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    searchPozoSorteosDisponibles: async (req, res) => {
        try {
            let response = await Ventas.autenticarUsuario();
            let token = response.token;
            response = await Ventas.consultarSorteosDisponibles(5, token);

            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    searchLottoCombinacionesDisponibles: async (req, res) => {
        try {
            let response = await Ventas.autenticarUsuario();
            let token = response.token;
            let sorteo = req.body.sorteo;
            let combinacion = req.body.combinacion;
            let combinacionFigura = req.body.combinacionFigura;
            let ticketsLotto = [
                {
                    numeros: [1, 4, 5, 7, 4],
                    status: false,
                    identificador: Math.random()
                },
                {
                    numeros: [8, 4, 5, 7, 4],
                    status: false,
                    identificador: Math.random()
                },
                {
                    numeros: [3, 4, 5, 7, 4],
                    status: false,
                    identificador: Math.random()
                },
                {
                    numeros: [4, 4, 5, 7, 4],
                    status: false,
                    identificador: Math.random()
                },
                {
                    numeros: [9, 4, 5, 7, 4],
                    status: false,
                    identificador: Math.random()
                },
                {
                    numeros: [5, 4, 5, 7, 4],
                    status: false,
                    identificador: Math.random()
                },
                {
                    numeros: [2, 4, 5, 7, 4],
                    status: false,
                    identificador: Math.random()
                },
                {
                    numeros: [6, 4, 5, 7, 4],
                    status: false,
                    identificador: Math.random()
                },
                {
                    numeros: [4, 4, 5, 7, 4],
                    status: false,
                    identificador: Math.random()
                },
                {
                    numeros: [6, 4, 5, 7, 4],
                    status: false,
                    identificador: Math.random()
                },
                {
                    numeros: [4, 4, 5, 7, 4],
                    status: false,
                    identificador: Math.random()
                }
            ];

            //let combinaciones = await Ventas.obtenerCombinacionesDisponibles(2, sorteo, token, combinacion, combinacionFigura);
            let combinaciones = ticketsLotto;
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
            let response = await Ventas.autenticarUsuario();
            let token = response.token;
            let sorteo = req.body.sorteo;
            let combinacion = req.body.combinacion;
            let combinacionFigura = req.body.combinacionFigura;
            let ticketsNacional = [
                {
                    numeros: [1, 4, 5, 7, 4],
                    seleccionados: [],
                    status: false,
                    identificador: Math.random()
                },
                {
                    numeros: [8, 4, 5, 7, 4],
                    seleccionados: [],
                    status: false,
                    identificador: Math.random()
                },
                {
                    numeros: [3, 4, 5, 7, 4],
                    seleccionados: [],
                    status: false,
                    identificador: Math.random()
                },
                {
                    numeros: [4, 4, 5, 7, 4],
                    seleccionados: [],
                    status: false,
                    identificador: Math.random()
                },
                {
                    numeros: [9, 4, 5, 7, 4],
                    seleccionados: [],
                    status: false,
                    identificador: Math.random()
                },
                {
                    numeros: [5, 4, 5, 7, 4],
                    seleccionados: [],
                    status: false,
                    identificador: Math.random()
                },
                {
                    numeros: [2, 4, 5, 7, 4],
                    seleccionados: [],
                    status: false,
                    identificador: Math.random()
                },
                {
                    numeros: [6, 4, 5, 7, 4],
                    seleccionados: [],
                    status: false,
                    identificador: Math.random()
                },
                {
                    numeros: [4, 4, 5, 7, 4],
                    seleccionados: [],
                    status: false,
                    identificador: Math.random()
                },
                {
                    numeros: [6, 4, 5, 7, 4],
                    seleccionados: [],
                    status: false,
                    identificador: Math.random()
                },
                {
                    numeros: [4, 4, 5, 7, 4],
                    seleccionados: [],
                    status: false,
                    identificador: Math.random()
                }
            ];

            let combinacionesAux = await Ventas.obtenerCombinacionesDisponibles(1, sorteo, token, combinacion, combinacionFigura);
            console.log(combinacionesAux);
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
            });;

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
            let response = await Ventas.autenticarUsuario();
            let token = response.token;
            let sorteo = req.body.sorteo;
            let combinacion = req.body.combinacion;
            let combinacionFigura = req.body.combinacionFigura;
            let ticketsAnimales = [
                {
                    ruta:
                        "../../../../assets/mascotas/mascotas pozo millonario-ballena.png",
                    nombre: "ballena",
                    numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
                    status: false,
                    identificador: Math.random()
                },
                {
                    ruta:
                        "../../../../assets/mascotas/mascotas pozo millonario-camaron.png",
                    nombre: "camaron",
                    numero: [12, 54, 32, 58, 64, 72, 44, 7, 45, 23, 67, 99],
                    status: false,
                    identificador: Math.random()
                },
                {
                    ruta: "../../../../assets/mascotas/mascotas pozo millonario-foca.png",
                    nombre: "foca",
                    numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
                    status: false,
                    identificador: Math.random()
                },
                {
                    ruta: "../../../../assets/mascotas/mascotas pozo millonario-perro.png",
                    nombre: "perro",
                    numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
                    status: false,
                    identificador: Math.random()
                },
                {
                    ruta:
                        "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
                    nombre: "congrejo",
                    numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
                    status: false,
                    identificador: Math.random()
                },
                {
                    ruta: "../../../../assets/mascotas/mascotas pozo millonario-conejo.png",
                    nombre: "conejo",
                    numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
                    status: false,
                    identificador: Math.random()
                },
                {
                    ruta: "../../../../assets/mascotas/mascotas pozo millonario-delfin.png",
                    nombre: "delfin",
                    numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
                    status: false,
                    identificador: Math.random()
                },
                {
                    ruta: "../../../../assets/mascotas/mascotas pozo millonario-mono.png",
                    nombre: "mono",
                    numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
                    status: false,
                    identificador: Math.random()
                },
                {
                    ruta: "../../../../assets/mascotas/mascotas pozo millonario-mono.png",
                    nombre: "mono",
                    numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
                    status: false,
                    identificador: Math.random()
                },
                {
                    ruta: "../../../../assets/mascotas/mascotas pozo millonario-mono.png",
                    nombre: "mono",
                    numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
                    status: false,
                    identificador: Math.random()
                },
                {
                    ruta:
                        "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
                    nombre: "congrejo",
                    numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
                    status: false,
                    identificador: Math.random()
                },
                {
                    ruta:
                        "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
                    nombre: "congrejo",
                    numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
                    status: false,
                    identificador: Math.random()
                },
                {
                    ruta:
                        "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
                    nombre: "congrejo",
                    numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
                    status: false,
                    identificador: Math.random()
                },
                {
                    ruta:
                        "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
                    nombre: "congrejo",
                    numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
                    status: false,
                    identificador: Math.random()
                },
                {
                    ruta:
                        "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
                    nombre: "congrejo",
                    numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
                    status: false,
                    identificador: Math.random()
                },
                {
                    ruta:
                        "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
                    nombre: "congrejo",
                    numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
                    status: false,
                    identificador: Math.random()
                },
                {
                    ruta:
                        "../../../../assets/mascotas/mascotas pozo millonario-cangrejo.png",
                    nombre: "congrejo",
                    numero: [24, 78, 96, 54, 32, 10, 44, 7, 45, 23, 67, 99],
                    status: false,
                    identificador: Math.random()
                }
            ];

            //let combinaciones = await Ventas.obtenerCombinacionesDisponibles(5, sorteo, token, combinacion, combinacionFigura);
            let combinaciones = ticketsAnimales
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