const Resultados = require('../../results/controller/main');
const Sorteos = require('../../results/controller/sorteos');
const redis = require('redis');
const { promisifyAll } = require('bluebird');

promisifyAll(redis);

const cacheController = {

    getClient: () => {

        const client = redis.createClient({
            port: 6379
        });

        client.on('error', (error) => {
            console.error(error);
        });
        return client;
    },
    actualizarCache: async (req, res) => {
        try {
            await cacheController.setUltimosResultados()
            await cacheController.setSorteos()
            let response = "Done"
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },
    getUltimosResultados: async (req, res) => {
        try {
            let client = cacheController.getClient();
            let response = await client.getAsync('ultimosResultados');
            if (response == "") {
                await cacheController.setUltimosResultados()
                response = await client.getAsync('ultimosResultados');
            }
            client.quit()
            res.status(200).json(JSON.parse(response));
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    setUltimosResultados: async () => {
        try {
            let client = cacheController.getClient();
            let response = await Resultados.getUltimosResultados();
            await client.setAsync('ultimosResultados', JSON.stringify(response));
            client.quit()

        } catch (e) {
            console.log(e.toString());
        }
    },

    getLoteriaSorteos: async (req, res) => {
        try {
            let client = cacheController.getClient();
            let response = await client.getAsync('loteriaSorteos');
            if (response == "") {
                await cacheController.setSorteos()
                response = await client.getAsync('loteriaSorteos');
            }
            client.quit()
            res.status(200).json(JSON.parse(response));
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },
    getLottoSorteos: async (req, res) => {
        try {
            let client = cacheController.getClient();
            let response = await client.getAsync('lottoSorteos');
            if (response == "") {
                await cacheController.setSorteos()
                response = await client.getAsync('lottoSorteos');
            }
            client.quit()
            res.status(200).json(JSON.parse(response));
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },
    getPozoSorteos: async (req, res) => {
        try {
            let client = cacheController.getClient();
            let response = await client.getAsync('pozoSorteos');
            if (response == "") {
                await cacheController.setSorteos()
                response = await client.getAsync('pozoSorteos');
            }
            client.quit()
            res.status(200).json(JSON.parse(response));
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    setSorteos: async () => {
        try {
            let client = cacheController.getClient();
            let loteriaSorteos = await Sorteos.getSorteos(1);
            await client.setAsync('loteriaSorteos', JSON.stringify(loteriaSorteos));
            let lottoSorteos = await Sorteos.getSorteos(2);
            await client.setAsync('lottoSorteos', JSON.stringify(lottoSorteos));
            let pozoSorteos = await Sorteos.getSorteos(5);
            await client.setAsync('pozoSorteos', JSON.stringify(pozoSorteos));

            client.quit()
        } catch (e) {
            console.log(e.toString())
        }
    },


}
module.exports = cacheController;
