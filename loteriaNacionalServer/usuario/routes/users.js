const express = require('express');
const userRouter = express.Router();
const UserController = require('../controller/main');

userRouter.post('/', UserController.logUser);

module.exports = userRouter;