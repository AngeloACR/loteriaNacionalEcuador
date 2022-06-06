const express = require("express");
const mainRouter = express.Router();
const mainController = require("../controller/main");

mainRouter.post(
  "/combinacionesDisponibles",
  mainController.searchCombinacionesDisponibles
);
mainRouter.get("/sorteosDisponibles", mainController.searchSorteosDisponibles);
mainRouter.get("/getSeries", mainController.searchSeries);
mainRouter.post("/ganador", mainController.buscarWinner);

mainRouter.put("/sorteosJugados", mainController.actualizarSorteosJugados);
mainRouter.put("/ultimoResultado", mainController.actualizarUltimoResultado);

module.exports = mainRouter;
