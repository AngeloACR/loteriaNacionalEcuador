const express = require('express');
const cacheRouter = express.Router();
const CacheController = require('../controller/main');

cacheRouter.get('/ultimosResultados', CacheController.getUltimosResultados);
cacheRouter.get('/loteriaSorteosJugados', CacheController.getLoteriaSorteos);
cacheRouter.get('/lottoSorteosJugados', CacheController.getLottoSorteos);
cacheRouter.get('/pozoSorteosJugados', CacheController.getPozoSorteos);
cacheRouter.get('/actualizarCache', CacheController.actualizarCache);


module.exports = cacheRouter;