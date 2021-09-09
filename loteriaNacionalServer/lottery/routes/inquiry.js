const express = require('express');
const lotteryRouter = express.Router();
const LotteryController = require('../controller/inquiry').inquiryLotteryController;
const InquiryController = require('../controller/inquiry').inquiryController;

lotteryRouter.post('/loteriaGanadorLoteria', LotteryController.searchLoteriaWinner);
lotteryRouter.post('/lottoGanadorLoteria', LotteryController.searchLottoWinner);
lotteryRouter.post('/pozoGanadorLoteria', LotteryController.searchPozoWinner);
lotteryRouter.post('/loteriaBoletinLoteria', LotteryController.searchLoteriaBoletin);
lotteryRouter.post('/lottoBoletinLoteria', LotteryController.searchLottoBoletin);
lotteryRouter.post('/pozoBoletinLoteria', LotteryController.searchPozoBoletin);
lotteryRouter.get('/loteriaUltimosResultadosLoteria', LotteryController.searchLoteriaUltimosResultados);
lotteryRouter.get('/lottoUltimosResultadosLoteria', LotteryController.searchLottoUltimosResultados);
lotteryRouter.get('/pozoUltimosResultadosLoteria', LotteryController.searchPozoUltimosResultados);
lotteryRouter.get('/pozoSorteosJugadosLoteria', LotteryController.searchPozoSorteosJugados);
lotteryRouter.get('/lottoSorteosJugadosLoteria', LotteryController.searchLottoSorteosJugados);
lotteryRouter.get('/loteriaSorteosJugadosLoteria', LotteryController.searchLoteriaSorteosJugados);

lotteryRouter.post('/ganadorLoteria', InquiryController.buscarLoteriaWinner);
lotteryRouter.post('/ganadorLotto', InquiryController.buscarLottoWinner);
lotteryRouter.post('/ganadorPozo', InquiryController.buscarPozoWinner);
lotteryRouter.post('/pozoPlancha', InquiryController.buscarPozoPlancha);
lotteryRouter.post('/loteriaBoletin', InquiryController.buscarLoteriaBoletin);
lotteryRouter.post('/lottoBoletin', InquiryController.buscarLottoBoletin);
lotteryRouter.post('/pozoBoletin', InquiryController.buscarPozoBoletin);
lotteryRouter.get('/loteriaUltimosResultados', InquiryController.buscarLoteriaUltimosResultados);
lotteryRouter.get('/lottoUltimosResultados', InquiryController.buscarLottoUltimosResultados);
lotteryRouter.get('/pozoUltimosResultados', InquiryController.buscarPozoUltimosResultados);
lotteryRouter.get('/pozoSorteosJugados', InquiryController.buscarPozoSorteosJugados);
lotteryRouter.get('/lottoSorteosJugados', InquiryController.buscarLottoSorteosJugados);
lotteryRouter.get('/loteriaSorteosJugados', InquiryController.buscarLoteriaSorteosJugados);
lotteryRouter.post('/resultadoPrueba', InquiryController.buscarResultadoPrueba);
lotteryRouter.get('/ultimosResultados', InquiryController.buscarUltimosResultados);


module.exports = lotteryRouter;