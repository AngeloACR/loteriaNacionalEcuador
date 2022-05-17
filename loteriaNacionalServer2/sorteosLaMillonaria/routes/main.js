const express = require("express");
const mainRouter = express.Router();
const mainController = require("../controller/main");

mainRouter.post(
  "/combinacionesDisponibles",
  mainController.searchCombinacionesDisponibles
);
mainRouter.get("/sorteosDisponibles", mainController.searchSorteosDisponibles);
mainRouter.get("/getSeries", mainController.searchSeries);

mainRouter.get("/sorteosJugados", mainController.buscarSorteosJugados);
mainRouter.get("/ultimosResultados", mainController.buscarUltimosResultados);
mainRouter.post("/ganador", mainController.buscarWinner);

module.exports = mainRouter;