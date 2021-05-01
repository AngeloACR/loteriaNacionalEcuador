const express = require('express');
const authRouter = express.Router();
const UserController = require('../controller/main');

authRouter.post('/', UserController.logUser);

module.exports = authRouter;