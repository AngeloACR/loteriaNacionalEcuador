const express = require('express');
const resultsRouter = express.Router();
const CacheController = require('../controller/main');

resultsRouter.post('/ultimosResultados', CacheController.getUltimosResultados);
resultsRouter.get('/loteriaSorteos', ResultsController.getLoteriaSorteos);
resultsRouter.get('/lottoSorteos', ResultsController.getLottoSorteos);
resultsRouter.get('/pozoSorteos', ResultsController.getPozoSorteos);


module.exports = resultsRouter;