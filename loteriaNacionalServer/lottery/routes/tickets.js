const express = require('express');
const ticketRouter = express.Router();
const LotteryController = require('../controller/main');

ticketRouter.post('/winners', LotteryController.searchWinnerTickets);

ticketRouter.get('/', LotteryController.getAvailableTickets);

ticketRouter.get('/single', LotteryController.getSingleTicketData);

module.exports = ticketRouter;