const express = require('express');
const lotteryRouter = express.Router();
const LotteryController = require('../controller/main');

lotteryRouter.get('/loteriaGanador', LotteryController.searchLoteriaWinner);

lotteryRouter.get('/lottoGanador', LotteryController.searchLottoWinner);

lotteryRouter.get('/pozoGanador', LotteryController.searchPozoWinner);

lotteryRouter.get('/pozoConsulta', LotteryController.searchPozoConsulta);

lotteryRouter.get('/lottoConsulta', LotteryController.searchLottoConsulta);

lotteryRouter.get('/loteriaConsulta', LotteryController.searchLoteriaConsulta);



lotteryRouter.get('/pozoSorteosJugados', LotteryController.searchPozoSorteosJugados);

lotteryRouter.get('/lottoSorteosJugados', LotteryController.searchLottoSorteosJugados);

lotteryRouter.get('/loteriaSorteosJugados', LotteryController.searchLoteriaSorteosJugados);


module.exports = lotteryRouter;