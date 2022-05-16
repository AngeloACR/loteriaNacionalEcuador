const express = require("express");
const mainRouter = express.Router();
const mainController = require("../controller/main");

mainRouter.post('/comprarBoletos', mainController.comprarBoletos);
mainRouter.post('/getCompra', mainController.getCompra);
mainRouter.get('/getDescuentos', mainController.getDescuentos);

module.exports = mainRouter;
