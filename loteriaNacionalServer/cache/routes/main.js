const express = require('express');
const resultsRouter = express.Router();
const CacheController = require('../controller/main');

resultsRouter.get('/ultimosResultados', CacheController.getUltimosResultados);
resultsRouter.get('/loteriaSorteosJugados', ResultsController.getLoteriaSorteos);
resultsRouter.get('/lottoSorteosJugados', ResultsController.getLottoSorteos);
resultsRouter.get('/pozoSorteosJugados', ResultsController.getPozoSorteos);


module.exports = resultsRouter;