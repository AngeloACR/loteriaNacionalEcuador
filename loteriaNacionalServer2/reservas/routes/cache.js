const express = require("express");
const mainRouter = express.Router();
const cacheController = require("../controller/cache");

mainRouter.post("/actualizarCarrito", cacheController.actualizarCarrito);
mainRouter.post("/getCarrito", cacheController.getCarrito);
mainRouter.post("/borrarCarrito", cacheController.borrarCarritoHttp);
mainRouter.post("/validar", cacheController.validar);

module.exports = mainRouter;
