const express = require('express');
const lotteryRouter = express.Router();
const mainController = require('../controller/main');

lotteryRouter.post('/sellLottery', mainController.sellLottery);
lotteryRouter.post('/cancelLottery', mainController.cancelLottery);
lotteryRouter.post('/reserveLottery', mainController.reserveLottery);
lotteryRouter.post('/getBalance', mainController.getBalance);


module.exports = lotteryRouter;