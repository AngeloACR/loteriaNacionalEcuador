const Sorteos = require("../models/sorteo");
const UltimosResultados = require("../models/ultimoResultado");
const psdAuth = require("../../psdLoteria/auth");
const psdSorteos = require("../../psdLoteria/sorteos");
const redis = require("../../cache");
const config = require("../../environments/production");

const cacheController = {
  getUltimoResultado: async (req, res) => {
    try {
      let client = redis.getClient();
      await client.connect();
      let response = await client.get("ultimoResultadoLoteria");
      if (response == "" || !response) {
        await cacheController.setUltimoResultado();
        response = await client.get("ultimoResultadoLoteria");
      }
      await client.quit();
      res.status(200).json(JSON.parse(response));
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },

  setUltimoResultado: async () => {
    try {
      let client = redis.getClient();
      let response = await UltimosResultados.get();
      await client.connect();
      await client.set("ultimoResultadoLoteria", JSON.stringify(response));
      await client.quit();
    } catch (e) {
      console.log(e.toString());
    }
  },

  getSorteos: async () => {
    try {
      let client = redis.getClient();
      await client.connect();
      let response = await client.get("loteriaSorteos");
      if (response == "" || !response) {
        await cacheController.setSorteos();
        response = await client.get("loteriaSorteos");
      }
      await client.quit();
      return JSON.parse(response);
    } catch (e) {
      console.log(e.toString());
    }
  },

  setSorteos: async () => {
    try {
      let client = redis.getClient();
      await client.connect();
      let sorteos = await Sorteos.getSorteos();
      await client.set("loteriaSorteos", JSON.stringify(sorteos));
      await client.quit();
    } catch (e) {
      console.log(e.toString());
    }
  },

  setSorteosDisponibles: async () => {
    try {
      let lotteryToken = (await psdAuth.autenticarUsuario()).token;
      let user = config.usuarioAplicativo;
      let client = redis.getClient();
      await client.connect();
      let sorteos = await psdSorteos.consultarSorteosDisponibles(
        1,
        lotteryToken,
        user
      );
      await client.set("loteriaSorteosDisponibles", JSON.stringify(sorteos));

      await client.quit();
    } catch (e) {
      console.log(e.toString());
    }
  },
  getSorteosHttp: async (req, res) => {
    try {
      let response = await cacheController.getSorteos();
      res.status(200).json(response);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },
  getSorteosDisponiblesHttp: async (req, res) => {
    try {
      let response = await cacheController.getSorteosDisponibles();
      res.status(200).json(response);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },

  getSorteosDisponibles: async () => {
    try {
      let client = redis.getClient();
      await client.connect();
      let response = await client.get("loteriaSorteosDisponibles");
      if (!response) {
        await cacheController.setSorteosDisponibles();
        response = await client.get("loteriaSorteosDisponibles");
      }
      await client.quit();
      return JSON.parse(response);
    } catch (e) {
      throw new Error(e.message);
    }
  },
  actualizarHttp: async (req, res) => {
    try {
      await cacheController.actualizar();
      res.status(200).json("Done");
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },

  actualizar: async () => {
    try {
      await cacheController.setSorteosDisponibles();

      await cacheController.setUltimoResultado();

      await cacheController.setSorteos();
    } catch (e) {
      throw new Error(e.message);
    }
  },
};
module.exports = cacheController;
