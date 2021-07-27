const Resultados = require('../../results/controller/main');
const Sorteos = require('../../results/controller/sorteos');
const redis = require('redis');
const { promisifyAll } = require('bluebird');

promisifyAll(redis);

const client = redis.createClient({
    port: 6379
});

client.on('error', (error) => {
    console.error(error);
});

const cacheController = {

    getUltimosResultados: async (req, res) => {
        try {
            let response = await client.getAsync('ultimosResultados');
            res.status(200).json(JSON.parse(response));
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    setUltimosResultados: async () => {
        try {
            let response = await Resultados.getUltimosResultados();
            console.log(response);
            await client.setAsync('ultimosResultados', JSON.stringify(response));

        } catch (e) {
            console.log(e.toString());
        }
    },

    getLoteriaSorteos: async (req, res) => {
        try {
            let response = await client.getAsync('loteriaSorteos');

            res.status(200).json(JSON.parse(response));
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },
    getLottoSorteos: async (req, res) => {
        try {
            let response = await client.getAsync('lottoSorteos');
            res.status(200).json(JSON.parse(response));
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },
    getPozoSorteos: async (req, res) => {
        try {
            let response = await client.getAsync('pozoSorteos');
            res.status(200).json(JSON.parse(response));
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    setSorteos: async () => {
        try {
            let loteriaSorteos = await Sorteos.getSorteos(1);
            await client.setAsync('loteriaSorteos', JSON.stringify(loteriaSorteos));
            let lottoSorteos = await Sorteos.getSorteos(2);
            await client.setAsync('lottoSorteos', JSON.stringify(lottoSorteos));
            let pozoSorteos = await Sorteos.getSorteos(5);
            await client.setAsync('pozoSorteos', JSON.stringify(pozoSorteos));
            console.log(loteriaSorteos);
            console.log(lottoSorteos);
            console.log(pozoSorteos);

        } catch (e) {
            console.log(e.toString())
        }
    },


}
module.exports = cacheController;
