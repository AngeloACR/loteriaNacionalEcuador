const express = require('express');
const lotteryRouter = express.Router();
const LotteryController = require('../controller/main');

lotteryRouter.post('/loteriaGanador', LotteryController.searchLoteriaWinner);

lotteryRouter.post('/lottoGanador', LotteryController.searchLottoWinner);

lotteryRouter.post('/pozoGanador', LotteryController.searchPozoWinner);

lotteryRouter.post('/pozoConsulta', LotteryController.searchPozoConsulta);

lotteryRouter.post('/lottoConsulta', LotteryController.searchLottoConsulta);

lotteryRouter.post('/loteriaConsulta', LotteryController.searchLoteriaConsulta);



lotteryRouter.post('/pozoSorteos', LotteryController.searchPozoSorteos);

lotteryRouter.post('/lottoSorteos', LotteryController.searchLottoSorteos);

lotteryRouter.post('/loteriaSorteos', LotteryController.searchLoteriaSorteos);


module.exports = lotteryRouter;