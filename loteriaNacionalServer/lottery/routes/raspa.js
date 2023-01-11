const express = require("express");
const lotteryRouter = express.Router();
const RaspaController = require("../controller/raspas");

lotteryRouter.post("/", RaspaController.crearRaspa);

module.exports = lotteryRouter;
