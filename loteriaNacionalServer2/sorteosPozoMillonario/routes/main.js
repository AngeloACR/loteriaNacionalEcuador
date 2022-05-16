const express = require("express");
const mainRouter = express.Router();
const mainController = require("../controller/main");

mainRouter.post('/combinacionesDisponibles', mainController.searchCombinacionesDisponibles);
mainRouter.get('/sorteosDisponibles', mainController.searchSorteosDisponibles);

mainRouter.post('/ganador', mainController.buscarWinner);
mainRouter.post('/plancha', mainController.buscarPlancha);
mainRouter.get('/ultimosResultados', mainController.buscarUltimosResultados);
mainRouter.get('/sorteosJugados', mainController.buscarSorteosJugados);

module.exports = mainRouter;
