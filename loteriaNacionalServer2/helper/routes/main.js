const express = require("express");
const mainRouter = express.Router();
const mainController = require("../controller/main");


mainRouter.get('/corregirGanadores', mainController.corregirGanadores);
mainRouter.get('/pruebaCorreo', mainController.pruebaCorreo);
mainRouter.get('/pruebaConsulta', mainController.pruebaConsulta);
mainRouter.get('/pruebaOrden', mainController.pruebaOrden);

mainRouter.post('/corregirTransaccion', mainController.corregirTransaccion);
mainRouter.post('/corregirVenta', mainController.corregirVenta);
mainRouter.get('/ventasProblema', mainController.ventasProblema);
mainRouter.post('/ventasProblema2', mainController.ventasProblema2);
mainRouter.post('/recuperarVentas', mainController.recuperarDatosDeVentas);
mainRouter.post('/repararVentas', mainController.resolverVentasDeDescuadre);

mainRouter.get('/limpiarDB', mainController.limpiarDBHttp);
mainRouter.get('/parseResultados', mainController.parseResultadosHttp);
mainRouter.get('/parseMicroservicios', mainController.parseMicroServicios);

module.exports = mainRouter;
