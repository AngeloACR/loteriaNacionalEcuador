const express = require('express');
const resultsRouter = express.Router();
const ResultsController = require('../controller/main');

resultsRouter.post('/agregarResultados', ResultsController.agregarResultadosHTTP);
resultsRouter.post('/agregarPremios', ResultsController.agregarPremiosHTTP);
resultsRouter.post('/agregarSorteos', ResultsController.agregarSorteosHTTP);
resultsRouter.get('/ultimoResultadoPozo', ResultsController.ultimoResultadoPozo);


module.exports = resultsRouter;