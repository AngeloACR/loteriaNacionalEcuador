const Resultados = require("../../results/controller/main");
const Sorteos = require("../../results/controller/sorteos");
const Ventas = require("../../loterianacional/controller/ventas");
const config = require("../../config/environment");
const bluebird = require("bluebird");
const redis = require("redis");



const cacheController = {
  getClient: () => {
    const client = redis.createClient({
      port: 6379,
    });

    client.on("error", (error) => {
      console.error(error);
    });
    return client;
  },
  actualizarCache: async (req, res) => {
    try {
      await cacheController.setUltimosResultados();
      await cacheController.setSorteos();
      await cacheController.setSorteosDisponibles();
      let response = "Done";
      res.status(200).json(response);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },
  getUltimosResultados: async (req, res) => {
    try {
      let client = cacheController.getClient();
      await client.connect();
      let response = await client.get("ultimosResultados");
      if (response == "") {
        await cacheController.setUltimosResultados();
        response = await client.get("ultimosResultados");
      }
      await client.quit();
      res.status(200).json(JSON.parse(response));
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },

  setUltimosResultados: async () => {
    try {
      let client = cacheController.getClient();
      let response = await Resultados.getUltimosResultados();
      await client.connect();
      await client.set("ultimosResultados", JSON.stringify(response));
      await client.quit();
    } catch (e) {
      console.log(e.toString());
    }
  },

  getLoteriaSorteos: async (req, res) => {
    try {
      let client = cacheController.getClient();
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
  getLottoSorteos: async (req, res) => {
    try {
      let client = cacheController.getClient();
      await client.connect();
      let response = await client.get("lottoSorteos");
      if (response == "") {
        await cacheController.setSorteos();
        response = await client.get("lottoSorteos");
      }
      await client.quit();
      res.status(200).json(JSON.parse(response));
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },
  getPozoSorteos: async (req, res) => {
    try {
      let client = cacheController.getClient();
      await client.connect();
      let response = await client.get("pozoSorteos");
      if (response == "") {
        await cacheController.setSorteos();
        response = await client.get("pozoSorteos");
      }
      await client.quit();
      res.status(200).json(JSON.parse(response));
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },
  getMillonariaSorteos: async (req, res) => {
    try {
      let client = cacheController.getClient();
      await client.connect();
      let response = await client.get("millonariaSorteos");
      if (response == "") {
        await cacheController.setSorteos();
        response = await client.get("millonariaSorteos");
      }
      await client.quit();
      res.status(200).json(JSON.parse(response));
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },

  setSorteos: async () => {
    try {
      let client = cacheController.getClient();
      let loteriaSorteos = await Sorteos.getSorteos(1);
      await client.connect();
      await client.set("loteriaSorteos", JSON.stringify(loteriaSorteos));
      let lottoSorteos = await Sorteos.getSorteos(2);
      await client.set("lottoSorteos", JSON.stringify(lottoSorteos));
      let pozoSorteos = await Sorteos.getSorteos(5);
      await client.set("pozoSorteos", JSON.stringify(pozoSorteos));
      let millonariaSorteos = await Sorteos.getSorteos(14);
      await client.set("millonariaSorteos", JSON.stringify(millonariaSorteos));

      await client.quit();
    } catch (e) {
      console.log(e.toString());
    }
  },
  setSorteosDisponibles: async () => {
    try {
      let lotteryToken = (await Ventas.autenticarUsuario()).token;
      //let user = config.usuarioAplicativoTest;
      let user = config.usuarioAplicativoProd;
      let client = cacheController.getClient();
      await client.connect();
      let loteriaSorteos = await Ventas.consultarSorteosDisponibles(
        1,
        lotteryToken,
        user
      );
      await client.set("loteriaSorteosDisponibles", JSON.stringify(loteriaSorteos));
      let lottoSorteos = await Ventas.consultarSorteosDisponibles(
        2,
        lotteryToken,
        user
      );
      await client.set("lottoSorteosDisponibles", JSON.stringify(lottoSorteos));
      let pozoSorteos = await Ventas.consultarSorteosDisponibles(
        5,
        lotteryToken,
        user
      );
      await client.set("pozoSorteosDisponibles", JSON.stringify(pozoSorteos));
      let millonariaSorteos = await Ventas.consultarSorteosDisponibles(
        14,
        lotteryToken,
        user
      );
      await client.set("millonariaSorteosDisponibles", JSON.stringify(millonariaSorteos));

      await client.quit();
    } catch (e) {
      console.log(e.toString());
    }
  },
  getLoteriaSorteosDisponiblesHttp: async (req, res) => {
    try {
      let client = cacheController.getClient();
      await client.connect();
      let response = await client.get("loteriaSorteosDisponibles");
      if (response == "") {
        await cacheController.setSorteos();
        response = await client.get("loteriaSorteosDisponibles");
      }
      await client.quit();
      res.status(200).json(JSON.parse(response));
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },
  getLottoSorteosDisponiblesHttp: async (req, res) => {
    try {
      let client = cacheController.getClient();
      await client.connect();
      let response = await client.get("lottoSorteosDisponibles");
      if (response == "") {
        await cacheController.setSorteos();
        response = await client.get("lottoSorteosDisponibles");
      }
      await client.quit();
      res.status(200).json(JSON.parse(response));
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },
  getPozoSorteosDisponiblesHttp: async (req, res) => {
    try {
      let client = cacheController.getClient();
      await client.connect();
      let response = await client.get("pozoSorteosDisponibles");
      if (response == "") {
        await cacheController.setSorteos();
        response = await client.get("pozoSorteosDisponibles");
      }
      await client.quit();
      res.status(200).json(JSON.parse(response));
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },
  getMillonariaSorteosDisponiblesHttp: async (req, res) => {
    try {
      let client = cacheController.getClient();
      await client.connect();
      let response = await client.get("millonariaSorteosDisponibles");
      if (response == "") {
        await cacheController.setSorteos();
        response = await client.get("millonariaSorteosDisponibles");
      }
      await client.quit();
      res.status(200).json(JSON.parse(response));
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },
  getLoteriaSorteosDisponibles: async () => {
    try {
      let client = cacheController.getClient();
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
  getLottoSorteosDisponibles: async () => {
    try {
      let client = cacheController.getClient();
      await client.connect();
      let response = await client.get("lottoSorteosDisponibles");
      if (!response) {
        await cacheController.setSorteosDisponibles();
        response = await client.get("lottoSorteosDisponibles");
      }
      await client.quit();
      return JSON.parse(response);
    } catch (e) {
      throw new Error(e.message);
    }
  },
  getPozoSorteosDisponibles: async () => {
    try {
      let client = cacheController.getClient();
      await client.connect();
      let response = await client.get("pozoSorteosDisponibles");
      if (!response) {
        await cacheController.setSorteosDisponibles();
        response = await client.get("pozoSorteosDisponibles");
      }
      await client.quit();
      return JSON.parse(response);
    } catch (e) {
      throw new Error(e.message);
    }
  },
  getMillonariaSorteosDisponibles: async () => {
    try {
      let client = cacheController.getClient();
      await client.connect();
      let response = await client.get("millonariaSorteosDisponibles");
      if (!response) {
        await cacheController.setSorteosDisponibles();
        response = await client.get("millonariaSorteosDisponibles");
      }
      await client.quit();
      return JSON.parse(response);
    } catch (e) {
      throw new Error(e.message);
    }
  },
};
module.exports = cacheController;
