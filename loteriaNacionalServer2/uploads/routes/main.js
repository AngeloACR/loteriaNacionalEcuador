const express = require("express");
const lotteryRouter = express.Router();
const mainController = require("../controller/main");

lotteryRouter.get("/", mainController.getNewFiles);
lotteryRouter.get("/pega3", mainController.getPega3);
module.exports = lotteryRouter;
