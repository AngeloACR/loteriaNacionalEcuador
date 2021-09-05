const express = require('express');
const resultsRouter = express.Router();
const ResultsController = require('../controller/main');

resultsRouter.post('/agregarSorteos', ResultsController.agregarSorteosHTTP);
resultsRouter.get('/ultimoResultadoPozo', ResultsController.ultimoResultadoPozo);
resultsRouter.get('/agregarUltimoResultadoPozo', ResultsController.agregarUltimoResultadoPozo);
resultsRouter.get('/limpiarDB', ResultsController.limpiarDB);


module.exports = resultsRouter;