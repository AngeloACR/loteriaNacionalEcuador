const Ticket = require('../model/ticket');
const Transaction = require('../model/transaction');
const Lottery = require('../../loterianacional/controller/main');

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
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        response = await Lottery.consultarSorteosDisponibles(2, token);

        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.searchLoteriaSorteosDisponibles = async (req, res) => {
    try {
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        response = await Lottery.consultarSorteosDisponibles(1, token);

        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.searchPozoSorteosDisponibles = async (req, res) => {
    try {
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        response = await Lottery.consultarSorteosDisponibles(5, token);

        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.searchLottoCombinacionesDisponibles = async (req, res) => {
    try {
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        let sorteo = req.body.sorteo;
        let combinacion = req.body.combinacion;
        let combinacionFigura = req.body.combinacionFigura;
        let combinaciones = await Lottery.obtenerCombinacionesDisponibles(2, sorteo, token, combinacion, combinacionFigura);
        let reserva = await Lottery.reservarCombinaciones(2, sorteo, combinaciones, token);
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
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        let sorteo = req.body.sorteo;
        let combinacion = req.body.combinacion;
        let combinacionFigura = req.body.combinacionFigura;
        let combinaciones = await Lottery.obtenerCombinacionesDisponibles(1, sorteo, token, combinacion, combinacionFigura);
        let reserva = await Lottery.reservarCombinaciones(1, sorteo, combinaciones, token);
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
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        let sorteo = req.body.sorteo;
        let combinacion = req.body.combinacion;
        let combinacionFigura = req.body.combinacionFigura;
        let combinaciones = await Lottery.obtenerCombinacionesDisponibles(5, sorteo, token, combinacion, combinacionFigura);
        let reserva = await Lottery.reservarCombinaciones(5, sorteo, combinaciones, token);
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
