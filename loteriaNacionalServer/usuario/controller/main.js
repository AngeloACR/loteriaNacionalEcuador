const User = require('../model/user');
const Lottery = require('../../loterianacional/controller/main');

module.exports.logUser = async (req, res) => {
    try {
        console.log('En el controlador de usuarios');
        let response = await Lottery.autenticarUsuario();
        console.log('Devolviendo el response');
        console.log(response);
        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

const UserController = module.exports
