const express = require('express');
const lotteryRouter = express.Router();
const LotteryController = require('../controller/ventas');
const GanadoresController = require('../controller/ganadores');

lotteryRouter.post('/lottoBoleto', LotteryController.buscarLottoBoleto);
lotteryRouter.post('/lottoCombinacionesDisponibles', LotteryController.searchLottoCombinacionesDisponibles);
lotteryRouter.get('/lottoSorteosDisponibles', LotteryController.searchLottoSorteosDisponibles);

lotteryRouter.post('/pozoBoleto', LotteryController.buscarPozoBoleto);
lotteryRouter.post('/pozoCombinacionesDisponibles', LotteryController.searchPozoCombinacionesDisponibles);
lotteryRouter.get('/pozoSorteosDisponibles', LotteryController.searchPozoSorteosDisponibles);

lotteryRouter.post('/millonariaBoleto', LotteryController.buscarMillonariaBoleto);
lotteryRouter.post('/millonariaCombinacionesDisponibles', LotteryController.searchMillonariaCombinacionesDisponibles);
lotteryRouter.get('/millonariaSorteosDisponibles', LotteryController.searchMillonariaSorteosDisponibles);
lotteryRouter.get('/getSeries', LotteryController.searchMillonariaSeries);

lotteryRouter.post('/loteriaBoleto', LotteryController.buscarLoteriaBoleto);
lotteryRouter.post('/loteriaCombinacionesDisponibles', LotteryController.searchLoteriaCombinacionesDisponibles);
lotteryRouter.get('/loteriaSorteosDisponibles', LotteryController.searchLoteriaSorteosDisponibles);

lotteryRouter.post('/reservarBoletos', LotteryController.reservarBoletos);
lotteryRouter.post('/eliminarBoletosDeReserva', LotteryController.eliminarBoletosDeReserva);

lotteryRouter.post('/comprarBoletos', LotteryController.comprarBoletos);
lotteryRouter.post('/getCompra', LotteryController.getCompra);
lotteryRouter.get('/getDescuentos', LotteryController.getDescuentos);

lotteryRouter.post('/corregirTransaccion', LotteryController.corregirTransaccion);
lotteryRouter.post('/corregirVenta', LotteryController.corregirVenta);
lotteryRouter.get('/corregirGanadores', GanadoresController.corregirGanadores);
lotteryRouter.get('/pruebaCorreo', GanadoresController.pruebaCorreo);
lotteryRouter.get('/pruebaConsulta', GanadoresController.pruebaConsulta);
lotteryRouter.get('/pruebaOrden', GanadoresController.pruebaOrden);
lotteryRouter.get('/ventasProblema', LotteryController.ventasProblema);
lotteryRouter.post('/ventasProblema2', LotteryController.ventasProblema2);
lotteryRouter.post('/recuperarVentas', LotteryController.recuperarDatosDeVentas);
lotteryRouter.post('/repararVentas', LotteryController.resolverVentasDeDescuadre);

lotteryRouter.post('/acreditarPremios', GanadoresController.pagarLoteriaHttp);
lotteryRouter.post('/getGanador', GanadoresController.getGanador);
lotteryRouter.post('/getGanadores', GanadoresController.getGanadores);






module.exports = lotteryRouter;