const express = require("express");
const mainRouter = express.Router();
const mainController = require("../controller/main");

mainRouter.post("/acreditarPremios", mainController.pagarLoteriaHttp);
mainRouter.post("/getGanador", mainController.getGanador);
mainRouter.post("/getGanadores", mainController.getGanadores);

module.exports = mainRouter;
