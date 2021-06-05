const express = require('express');
const lotteryRouter = express.Router();
const LotteryController = require('../controller/main');

lotteryRouter.post('/loteriaGanador', LotteryController.searchLoteriaWinner);

lotteryRouter.post('/lottoGanador', LotteryController.searchLottoWinner);

lotteryRouter.post('/pozoGanador', LotteryController.searchPozoWinner);

lotteryRouter.get('/pozoConsulta', LotteryController.searchPozoConsulta);

lotteryRouter.get('/lottoConsulta', LotteryController.searchLottoConsulta);

lotteryRouter.get('/loteriaConsulta', LotteryController.searchLoteriaConsulta);



lotteryRouter.get('/pozoSorteosJugados', LotteryController.searchPozoSorteosJugados);

lotteryRouter.get('/lottoSorteosJugados', LotteryController.searchLottoSorteosJugados);

lotteryRouter.get('/loteriaSorteosJugados', LotteryController.searchLoteriaSorteosJugados);


module.exports = lotteryRouter;