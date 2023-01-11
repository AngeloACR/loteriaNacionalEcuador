const express = require('express');
const lotteryRouter = express.Router();
const InquiryController = require('../controller/inquiry').inquiryController;


lotteryRouter.post('/ganadorLoteria', InquiryController.buscarLoteriaWinner);
lotteryRouter.post('/ganadorLotto', InquiryController.buscarLottoWinner);
lotteryRouter.post('/ganadorMillonaria', InquiryController.buscarMillonariaWinner);
lotteryRouter.post('/ganadorPozo', InquiryController.buscarPozoWinner);
lotteryRouter.post('/pozoPlancha', InquiryController.buscarPozoPlancha);

lotteryRouter.post('/loteriaBoletin', InquiryController.buscarLoteriaBoletin);
lotteryRouter.post('/lottoBoletin', InquiryController.buscarLottoBoletin);
lotteryRouter.post('/pozoBoletin', InquiryController.buscarPozoBoletin);
lotteryRouter.post('/millonariaBoletin', InquiryController.buscarMillonariaBoletin);

lotteryRouter.get('/loteriaUltimosResultados', InquiryController.buscarLoteriaUltimosResultados);
lotteryRouter.get('/lottoUltimosResultados', InquiryController.buscarLottoUltimosResultados);
lotteryRouter.get('/pozoUltimosResultados', InquiryController.buscarPozoUltimosResultados);
lotteryRouter.get('/millonariaUltimosResultados', InquiryController.buscarMillonariaUltimosResultados);

lotteryRouter.get('/pozoSorteosJugados', InquiryController.buscarPozoSorteosJugados);
lotteryRouter.get('/lottoSorteosJugados', InquiryController.buscarLottoSorteosJugados);
lotteryRouter.get('/loteriaSorteosJugados', InquiryController.buscarLoteriaSorteosJugados);
lotteryRouter.get('/millonariaSorteosJugados', InquiryController.buscarMillonariaSorteosJugados);

lotteryRouter.post('/resultadoPrueba', InquiryController.buscarResultadoPrueba);
lotteryRouter.get('/ultimosResultados', InquiryController.buscarUltimosResultados);


module.exports = lotteryRouter;