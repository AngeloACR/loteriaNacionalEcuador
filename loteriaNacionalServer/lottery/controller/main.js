const Ticket = require('../model/ticket');
const Transaction = require('../model/transaction');
const Lottery = require('../../loterianacional/controller/main');



module.exports.checkBalance = async (req, res) => {
    try {

        res.status(200).json();
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.buyTickets = async (req, res) => {
    try {

        res.status(200).json();
    } catch (e) {
        res.status(400).json(e.toString());
    }
};





module.exports.searchLoteriaUltimosResultados = async (req, res) => {
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

module.exports.searchPozoUltimosResultados = async (req, res) => {
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

module.exports.searchLottoConsulta = async (req, res) => {
    try {
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        response = await Lottery.consultarBoletos(2, token);

        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.searchLoteriaConsulta = async (req, res) => {
    try {
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        response = await Lottery.consultarBoletos(1, token);

        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.searchPozoConsulta = async (req, res) => {
    try {
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        response = await Lottery.consultarBoletos(5, token);

        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};



module.exports.searchLottoSorteosJugados = async (req, res) => {
    try {
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        response = await Lottery.consultarSorteos(2, token);

        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.searchLoteriaSorteosJugados = async (req, res) => {
    try {
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        response = await Lottery.consultarSorteos(1, token);

        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.searchPozoSorteosJugados = async (req, res) => {
    try {
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        response = await Lottery.consultarSorteos(5, token);

        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.getAvailableTickets = async (req, res) => {
    try {

        res.status(200).json();
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.getSingleTicketData = async (req, res) => {
    try {

        res.status(200).json();
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

const LotteryController = module.exports
