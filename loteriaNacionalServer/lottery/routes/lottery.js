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

lotteryRouter.post('/reservarBoletos', LotteryController.reservarBoletos);
lotteryRouter.post('/eliminarBoletosDeReserva', LotteryController.eliminarBoletosDeReserva);
lotteryRouter.post('/comprarBoletos', LotteryController.comprarBoletos);
lotteryRouter.post('/getCompra', LotteryController.getCompra);
lotteryRouter.get('/getDescuentos', LotteryController.getDescuentos);
lotteryRouter.post('/corregirTransaccion', LotteryController.corregirTransaccion);
lotteryRouter.post('/corregirVenta', LotteryController.corregirVenta);

lotteryRouter.post('/acreditarPremios', GanadoresController.pagarLoteriaHttp);
lotteryRouter.post('/getGanador', GanadoresController.getGanador);


lotteryRouter.post('/loteriaBoleto', LotteryController.buscarLoteriaBoleto);
lotteryRouter.post('/lottoBoleto', LotteryController.buscarLottoBoleto);
lotteryRouter.post('/pozoBoleto', LotteryController.buscarPozoBoleto);

module.exports = lotteryRouter;