const Ticket = require('../model/ticket');
const Transaction = require('../model/transaction');


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

module.exports.searchWinnerTickets = async (req, res) => {
    try {

        res.status(200).json();
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
