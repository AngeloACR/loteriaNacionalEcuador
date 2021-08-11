const Ventas = require('../../loterianacional/controller/ventas');

const authController = {


    authUser: async (token) => {
        try {
            await authController.logoutUser();
            let response = await Ventas.autenticarUsuario();
            let lotteryToken = response.token;
            response = {
                lotteryToken
            }
            return response;
        } catch (e) {
            throw e
        }
    },
    logoutUser: async () => {
        try {
        } catch (e) {
            throw e
        }
    },
}

module.exports = authController;