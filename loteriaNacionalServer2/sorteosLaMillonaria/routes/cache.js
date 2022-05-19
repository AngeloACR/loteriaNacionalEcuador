const express = require("express");
const mainRouter = express.Router();

const cacheController = require("../controller/cache");

mainRouter.get("/ultimoResultado", cacheController.getUltimoResultado);
mainRouter.get("/sorteosJugados", cacheController.getSorteosHttp);
mainRouter.get(
  "/sorteosDisponibles",
  cacheController.getSorteosDisponiblesHttp
);
mainRouter.get('/actualizar', cacheController.actualizarHttp);

module.exports = mainRouter;
