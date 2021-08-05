const Lottery = require('../../loterianacional/controller/main');
const Ventas = require('../../loterianacional/controller/ventas');

/*************************** CONSULTA DE RESULTADOS************************/

module.exports.searchLoteriaWinner = async (req, res) => {
    try {
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        let sorteo = req.body.sorteo;
        let combinaciones = req.body.combinaciones;
        response = [];
        let length = combinaciones.length;
        for (let i = 0; i < length; i++) {
            let aux = await Lottery.consultarBoletoGanador(1, sorteo, combinaciones[i], token);
            response.push(aux);
        }
        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.searchLottoWinner = async (req, res) => {
    try {
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        let sorteo = req.body.sorteo;
        let combinaciones = req.body.combinaciones;
        response = [];
        let length = combinaciones.length;
        for (let i = 0; i < length; i++) {
            let aux = await Lottery.consultarBoletoGanador(2, sorteo, combinaciones[i], token);
            response.push(aux);
        }
        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.searchPozoWinner = async (req, res) => {
    try {
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        let sorteo = req.body.sorteo;
        let combinaciones = req.body.combinaciones;
        response = [];
        let length = combinaciones.length;
        for (let i = 0; i < length; i++) {
            let aux = await Lottery.consultarBoletoGanador(5, sorteo, combinaciones[i], token);
            response.push(aux);
        }
        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.searchLottoBoletin = async (req, res) => {
    try {
        let sorteo = req.body.sorteo;
        let tipoLoteria = 2
        let boletinAddress = `http://admin-loteria.gustavoliver.com/boletines/boletin-${tipoLoteria}${sorteo}.jpg`
        res.status(200).json(boletinAddress);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.searchLoteriaBoletin = async (req, res) => {
    try {
        let sorteo = req.body.sorteo;
        let tipoLoteria = 1
        let boletinAddress = `http://admin-loteria.gustavoliver.com/boletines/boletin-${tipoLoteria}${sorteo}.jpg`

        res.status(200).json(boletinAddress);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.searchPozoBoletin = async (req, res) => {
    try {
        let sorteo = req.body.sorteo;
        let tipoLoteria = 5
        let boletinAddress = `http://admin-loteria.gustavoliver.com/boletines/boletin-${tipoLoteria}${sorteo}.jpg`
        res.status(200).json(boletinAddress);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.searchLoteriaUltimosResultados = async (req, res) => {
    try {
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        response = await Lottery.consultarUltimosResultados(1, token);
        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.searchLottoUltimosResultados = async (req, res) => {
    try {
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        response = await Lottery.consultarUltimosResultados(2, token);
        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.searchPozoUltimosResultados = async (req, res) => {
    try {
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        response = await Lottery.consultarUltimosResultados(5, token);
        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};


module.exports.searchLottoSorteosJugados = async (req, res) => {
    try {
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        response = await Lottery.consultarSorteosJugados(2, token);

        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.searchLoteriaSorteosJugados = async (req, res) => {
    try {
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        response = await Lottery.consultarSorteosJugados(1, token);

        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.searchPozoSorteosJugados = async (req, res) => {
    try {
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        response = await Lottery.consultarSorteosJugados(5, token);

        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

/*************************** COMPRA DE BOLETOS ************************/


module.exports.searchLottoSorteosDisponibles = async (req, res) => {
    try {
        let response = await Ventas.autenticarUsuario();
        let token = response.token;
        response = await Ventas.consultarSorteosDisponibles(2, token);


        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.searchLoteriaSorteosDisponibles = async (req, res) => {
    try {
        let response = await Ventas.autenticarUsuario();
        let token = response.token;
        response = await Ventas.consultarSorteosDisponibles(1, token);

        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.searchPozoSorteosDisponibles = async (req, res) => {
    try {
        let response = await Ventas.autenticarUsuario();
        let token = response.token;
        response = await Ventas.consultarSorteosDisponibles(5, token);

        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.searchLottoCombinacionesDisponibles = async (req, res) => {
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
};

module.exports.searchLoteriaCombinacionesDisponibles = async (req, res) => {
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

        //let combinaciones = await Ventas.obtenerCombinacionesDisponibles(1, sorteo, token, combinacion, combinacionFigura);

        let combinaciones = ticketsNacional;

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
};

module.exports.searchPozoCombinacionesDisponibles = async (req, res) => {
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
};



const LotteryController = module.exports
