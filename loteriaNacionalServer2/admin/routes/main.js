const express = require("express");
const lotteryRouter = express.Router();
const mainController = require("../controller/main");
const fileUpload = require("express-fileupload");

lotteryRouter.get("/popup", mainController.getPopupLink);
lotteryRouter.get("/popup/status", mainController.getPopupStatus);
lotteryRouter.put("/popup/status", mainController.setPopupStatus);
lotteryRouter.put("/popup/type", mainController.setPopupType);
lotteryRouter.put("/popup/image", mainController.setPopupImage);
lotteryRouter.post(
  "/popup",
  fileUpload({ createParentPath: true }),
  mainController.savePopupFiles
);

module.exports = lotteryRouter;
