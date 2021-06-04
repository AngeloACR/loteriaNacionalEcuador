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
        response = await Lottery.consultarBoletoGanador(2, 5447, 306589, token);

        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.searchLoteriaWinner = async (req, res) => {
    try {
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        response = await Lottery.consultarBoletoGanador(1, 5447, 306589, token);

        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.searchPozoWinner = async (req, res) => {
    try {
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        response = await Lottery.consultarBoletoGanador(5, 5447, 306589, token);

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



module.exports.searchLottoSorteos = async (req, res) => {
    try {
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        response = await Lottery.consultarSorteos(2, token);

        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.searchLoteriaSorteos = async (req, res) => {
    try {
        let response = await Lottery.autenticarUsuario();
        let token = response.token;
        response = await Lottery.consultarSorteos(1, token);

        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.searchPozoSorteos = async (req, res) => {
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
