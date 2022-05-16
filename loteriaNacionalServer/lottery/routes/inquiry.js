const express = require('express');
const lotteryRouter = express.Router();
const InquiryController = require('../controller/inquiry').inquiryController;


lotteryRouter.post('/ganadorLoteria', InquiryController.buscarLoteriaWinner);
lotteryRouter.get('/loteriaUltimosResultados', InquiryController.buscarLoteriaUltimosResultados);
lotteryRouter.post('/loteriaBoletin', InquiryController.buscarLoteriaBoletin);
lotteryRouter.get('/loteriaSorteosJugados', InquiryController.buscarLoteriaSorteosJugados);


lotteryRouter.post('/lottoBoletin', InquiryController.buscarLottoBoletin);
lotteryRouter.post('/ganadorLotto', InquiryController.buscarLottoWinner);
lotteryRouter.get('/lottoUltimosResultados', InquiryController.buscarLottoUltimosResultados);
lotteryRouter.get('/lottoSorteosJugados', InquiryController.buscarLottoSorteosJugados);

lotteryRouter.post('/ganadorPozo', InquiryController.buscarPozoWinner);
lotteryRouter.post('/pozoPlancha', InquiryController.buscarPozoPlancha);
lotteryRouter.post('/pozoBoletin', InquiryController.buscarPozoBoletin);
lotteryRouter.get('/pozoUltimosResultados', InquiryController.buscarPozoUltimosResultados);
lotteryRouter.get('/pozoSorteosJugados', InquiryController.buscarPozoSorteosJugados);

lotteryRouter.get('/millonariaSorteosJugados', InquiryController.buscarMillonariaSorteosJugados);
lotteryRouter.post('/millonariaBoletin', InquiryController.buscarMillonariaBoletin);
lotteryRouter.get('/millonariaUltimosResultados', InquiryController.buscarMillonariaUltimosResultados);
lotteryRouter.post('/ganadorMillonaria', InquiryController.buscarMillonariaWinner);

lotteryRouter.post('/resultadoPrueba', InquiryController.buscarResultadoPrueba);

lotteryRouter.get('/ultimosResultados', InquiryController.buscarUltimosResultados);


module.exports = lotteryRouter;