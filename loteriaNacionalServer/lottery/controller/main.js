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

module.exports.searchLottoWinner = async (req, res) => {
    try {
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        let sorteo = req.sorteo;
        let combinacion = req.combinacion;
        response = await Lottery.consultarBoletoGanador(2, sorteo, combinacion, token);

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
        let combinacion = req.body.combinacion[0];
        console.log(combinacion)
        response = await Lottery.consultarBoletoGanador(1, sorteo, combinacion, token);

        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.searchPozoWinner = async (req, res) => {
    try {
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        let sorteo = req.sorteo;
        let combinacion = req.combinacion;
        response = await Lottery.consultarBoletoGanador(5, sorteo, combinacion, token);

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
