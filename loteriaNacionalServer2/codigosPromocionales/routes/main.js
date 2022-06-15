const express = require('express');
const lotteryRouter = express.Router();
const mainController = require('../controller/main');

lotteryRouter.get('/', mainController.populate);
lotteryRouter.get('/getCodeCsv', mainController.getCodeCsvHttp);
lotteryRouter.get('/getText', mainController.getText);
lotteryRouter.post('/setCode', mainController.setCodeHttp);
lotteryRouter.post('/getCodes', mainController.getCodes);


module.exports = lotteryRouter;