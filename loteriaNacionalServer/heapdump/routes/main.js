const express = require("express");
const lotteryRouter = express.Router();
const HeapdumpController = require("../controller/main");

lotteryRouter.get("/", HeapdumpController.print);

module.exports = lotteryRouter;
