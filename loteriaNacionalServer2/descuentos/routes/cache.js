const express = require("express");
const mainRouter = express.Router();
const cacheController = require("../controller/cache");

//mainRouter.get("/", cacheController.getActives);

module.exports = mainRouter;
