const express = require('express');
const resultsRouter = express.Router();
const ResultsController = require('../controller/main');

resultsRouter.post('/agregarSorteos', ResultsController.agregarSorteosHTTP);
resultsRouter.get('/ultimoResultadoPozo', ResultsController.ultimoResultadoPozo);


module.exports = resultsRouter;