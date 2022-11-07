const express = require("express");
const lotteryRouter = express.Router();
const mainController = require("../controller/main");
const fileUpload = require("express-fileupload");

lotteryRouter.get("/", mainController.populate);
lotteryRouter.get("/files", mainController.getFileLink);
lotteryRouter.post(
  "/files",
  fileUpload({ createParentPath: true }),
  mainController.saveFiles
);
lotteryRouter.post("/status", mainController.setStatus);
lotteryRouter.get("/status", mainController.getStatus);
lotteryRouter.get("/getCodeCsv", mainController.getCodeCsvHttp);
lotteryRouter.get("/getTxt", mainController.getTxt);
lotteryRouter.post("/setCode", mainController.setCodeHttp);
lotteryRouter.post("/getCodes", mainController.getCodes);

module.exports = lotteryRouter;
