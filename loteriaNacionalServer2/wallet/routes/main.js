const express = require("express");
const lotteryRouter = express.Router();
const mainController = require("../controller/main");

lotteryRouter.post("/sellLottery", mainController.sellLotteryHttp);
lotteryRouter.post("/cancelLottery", mainController.cancelLotteryHttp);
lotteryRouter.post("/cancelMany", mainController.cancelManyHttp);
lotteryRouter.post("/reserveLottery", mainController.reserveLotteryHttp);
lotteryRouter.post("/getBalance", mainController.getBalanceHttp);

module.exports = lotteryRouter;
