const express = require('express');
const resultsRouter = express.Router();
const ResultsController = require('../controller/results');

resultsRouter.post('/agregarResultados', ResultsController.agregarResultados);


module.exports = resultsRouter;