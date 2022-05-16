const express = require("express");
const mainRouter = express.Router();
const mainController = require("../controller/main");

mainRouter.post('/reservarBoletos', mainController.reservarBoletos);
mainRouter.post('/eliminarBoletosDeReserva', mainController.eliminarBoletosDeReserva);

module.exports = mainRouter;
