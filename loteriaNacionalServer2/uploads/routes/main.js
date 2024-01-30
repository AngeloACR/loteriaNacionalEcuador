const express = require("express");
const lotteryRouter = express.Router();
const mainController = require("../controller/main");

lotteryRouter.get("/", mainController.getNewFiles);
lotteryRouter.get("/pega3Files", mainController.getPega3);
lotteryRouter.get("/pega4Files", mainController.getPega4);
lotteryRouter.get("/bingazoFiles", mainController.getBingazo);
module.exports = lotteryRouter;
