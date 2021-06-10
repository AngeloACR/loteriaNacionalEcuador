const express = require('express');
const lotteryRouter = express.Router();
const LotteryController = require('../controller/main');

lotteryRouter.post('/loteriaGanador', LotteryController.searchLoteriaWinner);

lotteryRouter.post('/lottoGanador', LotteryController.searchLottoWinner);

lotteryRouter.post('/pozoGanador', LotteryController.searchPozoWinner);

lotteryRouter.post('/loteriaBoletin', LotteryController.searchLoteriaBoletin);

lotteryRouter.post('/lottoBoletin', LotteryController.searchLottoBoletin);

lotteryRouter.post('/pozoBoletin', LotteryController.searchPozoBoletin);

lotteryRouter.get('/pozoConsulta', LotteryController.searchPozoConsulta);

lotteryRouter.get('/lottoConsulta', LotteryController.searchLottoConsulta);

lotteryRouter.get('/loteriaConsulta', LotteryController.searchLoteriaConsulta);


lotteryRouter.get('/loteriaUltimosResultados', LotteryController.searchLoteriaUltimosResultados);
lotteryRouter.get('/lottoUltimosResultados', LotteryController.searchLottoUltimosResultados);
lotteryRouter.get('/pozoUltimosResultados', LotteryController.searchPozoUltimosResultados);







lotteryRouter.get('/pozoSorteosJugados', LotteryController.searchPozoSorteosJugados);

lotteryRouter.get('/lottoSorteosJugados', LotteryController.searchLottoSorteosJugados);

lotteryRouter.get('/loteriaSorteosJugados', LotteryController.searchLoteriaSorteosJugados);


module.exports = lotteryRouter;