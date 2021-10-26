const express = require("express");
const lotteryRouter = express.Router();
const CartController = require("../controller/cart");

lotteryRouter.post("/actualizarCarrito", CartController.actualizarCarrito);
lotteryRouter.post("/getCarrito", CartController.getCarrito);
lotteryRouter.post("/borrarCarrito", CartController.borrarCarritoHttp);

module.exports = lotteryRouter;
