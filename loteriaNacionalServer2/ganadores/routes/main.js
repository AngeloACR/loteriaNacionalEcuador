const express = require("express");
const mainRouter = express.Router();
const mainController = require("../controller/main");

mainRouter.post("/acreditarPremios", mainController.pagarLoteriaHttp);
mainRouter.post("/ventaId", mainController.pagarPorVentaIdHttp);
mainRouter.post("/instantanea", mainController.pagarInstantaneasHttp);
mainRouter.post("/getGanador", mainController.getGanador);
mainRouter.post("/getGanadores", mainController.getGanadores);

module.exports = mainRouter;
