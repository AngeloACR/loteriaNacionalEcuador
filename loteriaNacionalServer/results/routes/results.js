const express = require('express');
const resultsRouter = express.Router();
const ResultsController = require('../controller/main');

resultsRouter.post('/agregarResultados', ResultsController.agregarResultadosHTTP);
resultsRouter.post('/agregarPremios', ResultsController.agregarPremiosHTTP);


module.exports = resultsRouter;