const express = require('express');
const lotteryRouter = express.Router();
const ExalogicAuthController = require('../controller/auth');

lotteryRouter.post('/authUser', ExalogicAuthController.authUserHttp);


module.exports = lotteryRouter;