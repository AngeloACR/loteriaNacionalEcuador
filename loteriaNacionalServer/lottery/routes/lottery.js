const express = require('express');
const lotteryRouter = express.Router();
const LotteryController = require('../controller/ventas');
const GanadoresController = require('../controller/ganadores');

lotteryRouter.post('/loteriaCombinacionesDisponibles', LotteryController.searchLoteriaCombinacionesDisponibles);
lotteryRouter.post('/lottoCombinacionesDisponibles', LotteryController.searchLottoCombinacionesDisponibles);
lotteryRouter.post('/pozoCombinacionesDisponibles', LotteryController.searchPozoCombinacionesDisponibles);

lotteryRouter.get('/pozoSorteosDisponibles', LotteryController.searchPozoSorteosDisponibles);
lotteryRouter.get('/lottoSorteosDisponibles', LotteryController.searchLottoSorteosDisponibles);
lotteryRouter.get('/loteriaSorteosDisponibles', LotteryController.searchLoteriaSorteosDisponibles);


lotteryRouter.post('/auth', LotteryController.authUserHttp);
lotteryRouter.post('/sellLottery', LotteryController.sellLotteryHttp);
lotteryRouter.post('/cancelLottery', LotteryController.cancelLotteryHttp);
lotteryRouter.post('/reserveLottery', LotteryController.reserveLotteryHttp);
lotteryRouter.post('/getBalance', LotteryController.getBalanceHttp);
lotteryRouter.post('/getCompra', LotteryController.getCompra);
lotteryRouter.post('/reservarBoletos', LotteryController.reservarBoletos);
lotteryRouter.post('/eliminarBoletosDeReserva', LotteryController.eliminarBoletosDeReserva);
lotteryRouter.post('/comprarBoletos', LotteryController.comprarBoletos);

lotteryRouter.get('/acreditarPremios', GanadoresController.pagarLoteriaHttp);


module.exports = lotteryRouter;