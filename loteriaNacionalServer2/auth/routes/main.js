const express = require("express");
const lotteryRouter = express.Router();
const mainController = require("../controller/main");

lotteryRouter.post("/", mainController.authUser);
lotteryRouter.get("/token", mainController.getToken);

module.exports = lotteryRouter;
