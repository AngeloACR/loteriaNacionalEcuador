const auth = require('./auth');
const sorteos = require('./sorteos');
const config = require('../environments/production');

(async () => {
    try {
      let data = await auth.authTest(config.usuarioAplicativo,config.passwordAplicativo);
      let sorteosData = await sorteos.consultarSorteosDisponibles(2, data, config.usuarioAplicativo, "192.168.0.1")
      console.log(sorteosData);
    } catch (error) {
      console.log(error);
    }
  })();