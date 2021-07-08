
var xml2js = require('xml2js');
var parser = xml2js.Parser();

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

    agregarResultadosHTTP: async (req, res) => {
        try {
            let sorteo = req.body.sorteo;
            let tipoLoteria = req.body.tipoLoteria;
            let filePath = `uploads/resultados/BOLPRE-${tipoLoteria}-${sorteo}.xml`;

            fs.readFile(filePath, 'utf8', async function (err, xmlData) {
                if (err) throw err;
                let dataSet = `<dataset>${xmlData}</dataset>`
                let aux = await parser.parseStringPromise(dataSet, { trim: true })
                let data = aux.dataset.R;
                let length = data.length;
                console.log(length);
                response = {
                    data
                }
                res.status(200).json(response);

            });
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    agregarPremiosHTTP: async (req, res) => {
        try {
            let sorteo = req.body.sorteo;
            let tipoLoteria = req.body.tipoLoteria;
            let filePath = `uploads/resultados/PREM-${tipoLoteria}-${sorteo}.xml`;

            fs.readFile(filePath, 'utf8', async function (err, xmlData) {
                if (err) throw err;
                let dataSet = `<dataset>${xmlData}</dataset>`
                let aux = await parser.parseStringPromise(dataSet, { trim: true })
                let data = aux.dataset.R;
                let length = data.length;
                console.log(length);
                response = {
                    data
                }
                res.status(200).json(response);
            });
        } catch (e) {
            throw e;
        }
    },

    agregarSorteos: async function () {
        try {
            console.log("Actualizando sorteos")
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

    agregarResultados: async (sorteo, tipoLoteria) => {
        try {
            let filePath = `uploads/resultados/BOLPRE-${tipoLoteria}-${sorteo}.xml`;
            fs.readFile(filePath, 'utf8', async function (err, xmlData) {
                if (err) throw err;
                let dataSet = `<dataset>${xmlData}</dataset>`
                let aux = await parser.parseStringPromise(dataSet, { trim: true })
                let data = aux.dataset.R;
                let length = data.length;
                let indexLottito = 0;
                let resultadosLottito = []
                for (let i = 0; i < length; i++) {
                    let codigoPremioAux = data[i].X[0].R[0].$.P;
                    let codigoPremio = `${sorteo}-${codigoPremioAux}`;
                    let resultado = {
                        tipoLoteria,
                        numeroSorteo: sorteo,
                        combinacion1: data[i].$.C1,
                        combinacion2: data[i].$.C2,
                        combinacion3: data[i].$.C3,
                        codigo: data[i].$.B,
                        codigoPremio,
                        combinacionGanadora: data[i].X[0].R[0].$.CG
                    }
                    resultado = (await ResultadosController.addResultado(resultado)).values;
                    if (codigoPremioAux == "1") {
                        await ResultadosController.setUltimoResultado(tipoLoteria, resultado, codigoPremio);
                    }
                    if (tipoLoteria == "2") {
                        if (codigoPremioAux == "23") {
                            await ResultadosController.setUltimoLottoPlus(tipoLoteria, resultado, codigoPremio);
                        } else if (codigoPremioAux == "24") {
                            resultadosLottito.push(resultado._id);
                            indexLottito++;
                        }

                    }
                }
                if (tipoLoteria == 2) {
                    let codigoPremioLottito = `${sorteo}-24`;
                    await ResultadosController.setUltimoLottito(tipoLoteria, resultadosLottito, codigoPremioLottito, indexLottito);
                }


            });
        } catch (e) {
            throw e;
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
    agregarPremios: async (sorteo, tipoLoteria) => {
        try {
            let filePath = `uploads/resultados/PREM-${tipoLoteria}-${sorteo}.xml`;
            //let sorteoData = await mainController.agregarSorteos(sorteo, tipoLoteria, false);
            fs.readFile(filePath, 'utf8', async function (err, xmlData) {
                if (err) throw err;
                let dataSet = `<dataset>${xmlData}</dataset>`
                let aux = await parser.parseStringPromise(dataSet, { trim: true })
                let data = aux.dataset.R;
                let length = data.length;

                for (let i = 0; i < length; i++) {
                    let premioAux = data[i]
                    let premio = {
                        tipoLoteria,
                        numeroSorteo: sorteo,
                        nombre: premioAux.$.N,
                        codigo: `${sorteo}-${premioAux.$.P}`,
                        tipoPremio: premioAux.$.TP,
                        primeraSuerte: premioAux.$.PS,
                        valorPremio: premioAux.$.VP,
                        valorPremioConDescuento: premioAux.$.VD,
                        valorFraccion: premioAux.$.VF,
                        valorFraccionConDescuento: premioAux.$.FD,
                        descripcionDescuento: premioAux.$.OD,
                    }

                    await PremiosController.addPremio(premio);
                };

            });
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },
}

module.exports = mainController