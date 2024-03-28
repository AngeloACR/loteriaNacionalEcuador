const express = require("express");
const mainRouter = express.Router();
const mainController = require("../controller/main");

mainRouter.post("/", mainController.create);
mainRouter.get("/", mainController.getActives);
mainRouter.get("/all", mainController.getAll);
mainRouter.put("/active/:id", mainController.changeActive);

module.exports = mainRouter;
