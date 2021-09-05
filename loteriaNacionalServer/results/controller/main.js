
var xml2js = require('xml2js');
var parser = xml2js.Parser();
var database = require('../../database')

const Lottery = require('../../loterianacional/controller/main');
const ResultadosController = require('./resultados');
const PremiosController = require('./premios');
const SorteosController = require('./sorteos');

var fs = require('fs');

const mainController = {
    agregarSorteosHTTP: async (req, res) => {
        try {
            let response = await mainController.agregarSorteos();
            res.status(200).json(response);

        } catch (e) {
            res.status(400).json(e.toString());
        }
    },
    ultimoResultadoPozo: async (req, res) => {
        try {
            let data = await Lottery.autenticarUsuario()
            let ultimoResultado = await Lottery.consultarUltimosResultados(5, data.token);

            let codigoPremio = `${ultimoResultado.SortId}-1`;
            let resultado = {
                tipoLoteria: 5,
                numeroSorteo: ultimoResultado.SortId,
                combinacion2: ultimoResultado.Comb,
                combinacion3: '',
                combinacion1: '',
                codigoPremio,
                combinacionGanadora: "2"
            }
            res.status(200).json(resultado);

        } catch (e) {
            res.status(400).json(e.toString());
        }
    },
    agregarUltimoResultadoPozo: async (req, res) => {
        try {
            let data = await Lottery.autenticarUsuario()
            let ultimoResultado = await Lottery.consultarUltimosResultados(5, data.token);

            let codigoPremio = `${ultimoResultado.SortId}-1`;
            let resultado = {
                tipoLoteria: 5,
                numeroSorteo: ultimoResultado.SortId,
                combinacion2: ultimoResultado.Comb,
                combinacion3: '',
                combinacion1: '',
                codigoPremio,
                combinacionGanadora: "2"
            }
            ResultadosController.updateUltimoResultado(resultado)
            res.status(200).json(resultado);

        } catch (e) {
            res.status(400).json(e.toString());
        }
    },
    agregarSorteos: async function () {
        try {
            let response = await Lottery.autenticarUsuario();
            let token = response.token;

            let sorteosLotto = await Lottery.consultarSorteosJugados(2, token);
            let sorteosLoteriaNacional = await Lottery.consultarSorteosJugados(1, token);
            let sorteosPozoMillonario = await Lottery.consultarSorteosJugados(5, token);

            response = [];
            let lottoResponse = await SorteosController.setSorteos(2, sorteosLotto);
            response.push(lottoResponse);
            let loteriaNacionalResponse = await SorteosController.setSorteos(1, sorteosLoteriaNacional);
            response.push(loteriaNacionalResponse);
            let pozoMillonarioResponse = await SorteosController.setSorteos(5, sorteosPozoMillonario);
            response.push(pozoMillonarioResponse);
            let responseAux = {
                status: true,
                values: response
            }
            return responseAux
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },

    getUltimosResultados: async function () {
        try {
            let loteriaNacionalResponse = await ResultadosController.getUltimoResultado(1)
            let lottoResponse = await ResultadosController.getUltimoResultado(2)
            let pozoMillonarioResponse = await ResultadosController.getUltimoResultado(5)
            let response = {
                loteriaNacional: loteriaNacionalResponse.values,
                lotto: lottoResponse.values,
                pozoMillonario: pozoMillonarioResponse.values,
            }

            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },

    limpiarDBHttp: async function (req, res) {
        try {
            console.log('Limpiando DB por http');
            let response = await mainController.limpiarDB();
            res.status(200).json(response);

        } catch (e) {
            res.status(400).json(e.toString());
        }
    },
    limpiarDB: async function () {
        console.log('Empezando limpieza de DB');
        let sorteos = (await SorteosController.getAllSorteos()).values;
        let outdatedSorteos = [];
        let n = sorteos.length;
        for (let i = 0; i < sorteos.length; i++) {
            const sorteo = sorteos[i];

            let date = sorteo.fecha;
            let day = date.split(" ")[0].split("/")[0]
            let month = parseInt(date.split(" ")[0].split("/")[1]) - 1
            let year = parseInt(date.split(" ")[0].split("/")[2])
            let today = new Date();
            let todayYear = today.getYear() + 1900;
            let todayMonth = today.getMonth();
            let todayDay = today.getDay()
            let limit;
            let limitYear
            if (todayMonth < 3) {
                limit = todayMonth + 9;
                limitYear = todayYear - 1
            } else {
                limit = todayMonth - 3;
                limitYear = todayYear
            }
            console.log(month)
            if ((month < limit || (month == limit && day <= todayDay)) && year <= limitYear) {
                console.log(`I should be deleting this sorteo: ${sorteo.sorteo}`)
                outdatedSorteos.push(sorteo.sorteo);
                await ResultadosController.deleteResultadosBySorteo(sorteo.sorteo);
                await PremiosController.deletePremiosBySorteo(sorteo.sorteo);
                await SorteosController.deleteSorteo(sorteo.sorteo);
            }
        }

        console.log(outdatedSorteos)
        return outdatedSorteos;
    }
}

module.exports = mainController

