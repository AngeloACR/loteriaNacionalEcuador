const psdResultados = require("../../psdLoteria/resultados");
const Sorteos = require("../models/sorteo");
const psdAuth = require("../../psdLoteria/auth");
const psdSorteos = require("../../psdLoteria/sorteos");
const redis = require("../../cache");
const config = require("../../environments/test");

const cacheController = {
  getUltimoResultado: async (req, res) => {
    try {
      let client = redis.getClient();
      await client.connect();
      let response = await client.get("ultimoResultadoLoteria");
      if (response == "") {
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
      let token = (await psdAuth.autenticarUsuario()).token;
      let response = await psdResultados.consultarUltimosResultados(1,token);
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
      if (response == "") {
        await cacheController.setSorteos();
        response = await client.get("loteriaSorteos");
      }
      await client.quit();
      res.status(200).json(JSON.parse(response));
    } catch (e) {
      res.status(400).json(e.toString());
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
        14,
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
};
module.exports = cacheController;
