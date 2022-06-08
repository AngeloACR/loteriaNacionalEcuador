const express = require("express");
const mainRouter = express.Router();
const mainController = require("../controller/main");

mainRouter.post('/combinacionesDisponibles', mainController.searchCombinacionesDisponibles);
mainRouter.get('/sorteosDisponibles', mainController.searchSorteosDisponibles);

mainRouter.post('/ganador', mainController.buscarWinner);
mainRouter.get('/ultimosResultados', mainController.buscarUltimosResultados);


mainRouter.put('/sorteosJugados', mainController.actualizarSorteosJugados);
mainRouter.put('/ultimoResultado', mainController.actualizarUltimoResultado);
module.exports = mainRouter;