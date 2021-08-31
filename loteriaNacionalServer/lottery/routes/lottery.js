const express = require('express');
const lotteryRouter = express.Router();
const LotteryController = require('../controller/ventas');

lotteryRouter.post('/loteriaCombinacionesDisponibles', LotteryController.searchLoteriaCombinacionesDisponibles);
lotteryRouter.post('/lottoCombinacionesDisponibles', LotteryController.searchLottoCombinacionesDisponibles);
lotteryRouter.post('/pozoCombinacionesDisponibles', LotteryController.searchPozoCombinacionesDisponibles);

lotteryRouter.get('/pozoSorteosDisponibles', LotteryController.searchPozoSorteosDisponibles);
lotteryRouter.get('/lottoSorteosDisponibles', LotteryController.searchLottoSorteosDisponibles);
lotteryRouter.get('/loteriaSorteosDisponibles', LotteryController.searchLoteriaSorteosDisponibles);


lotteryRouter.post('/auth', LotteryController.authUser);
lotteryRouter.post('/sellLottery', LotteryController.sellLottery);
lotteryRouter.post('/cancelLottery', LotteryController.cancelLottery);
lotteryRouter.post('/reserveLottery', LotteryController.reserveLottery);
lotteryRouter.post('/getBalance', LotteryController.getBalance);
lotteryRouter.post('/reservarBoletos', LotteryController.reservarBoletos);
lotteryRouter.post('/eliminarBoletosDeReserva', LotteryController.eliminarBoletosDeReserva);


module.exports = lotteryRouter;