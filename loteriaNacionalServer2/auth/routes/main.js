const express = require('express');
const lotteryRouter = express.Router();
const mainController = require('../controller/main');

lotteryRouter.post('/', mainController.authUser);
lotteryRouter.post('/test', mainController.authUserPSD);


module.exports = lotteryRouter;