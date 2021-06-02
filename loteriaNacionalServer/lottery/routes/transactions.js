const express = require('express');
const transactionRouter = express.Router();
const LotteryController = require('../controller/main');

transactionRouter.post('/checkBalance', LotteryController.checkBalance);

transactionRouter.post('/buyTickets', LotteryController.buyTickets);

module.exports = transactionRouter;