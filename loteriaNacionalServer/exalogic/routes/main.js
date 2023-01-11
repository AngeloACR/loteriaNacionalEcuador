const express = require('express');
const lotteryRouter = express.Router();
const ExalogicAuthController = require('../controller/auth');
const ExalogicWalletController = require('../controller/wallet');

lotteryRouter.post('/authUser', ExalogicAuthController.authUserHttp);
lotteryRouter.post('/sellLottery', ExalogicWalletController.sellLotteryHttp);
lotteryRouter.post('/cancelLottery', ExalogicWalletController.cancelLotteryHttp);
lotteryRouter.post('/reserveLottery', ExalogicWalletController.reserveLotteryHttp);
lotteryRouter.post('/getBalance', ExalogicWalletController.getBalanceHttp);


module.exports = lotteryRouter;