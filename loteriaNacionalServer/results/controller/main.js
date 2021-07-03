
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
            /*             let lottoLength = sorteosLotto.length;
                        for (let i = 0; i < lottoLength; i++) {
                            const sorteo = sorteosLotto[i];
                            let auxSorteo = await SorteosController.getSorteoByNumber(parseInt(sorteo.SortId));
                            let data = {
                                tipoLoteria: 2,
                                sorteo: sorteo.SortId,
                                nombre: sorteo.SortNomb,
                                precio: sorteo.PVP,
                                fecha: sorteo.FSort,
                                cantidadDeFracciones: sorteo.CFrac,
                                valorPremioPrincipal: sorteo.VPremio,
                            }
                            if (auxSorteo.status) {
                                let updatedSorteo = await SorteosController.updateSorteo(data.sorteo, data);
                                response.push(updatedSorteo)
                            } else {
                                let newSorteo = await SorteosController.addSorteo(data);
                                response.push(newSorteo)
                            }
                        }
             */
            let loteriaNacionalResponse = await SorteosController.setSorteos(1, sorteosLoteriaNacional);
            response.push(loteriaNacionalResponse);
            /* let loteriaLength = sorteosLoteriaNacional.length;
            for (let i = 0; i < loteriaLength; i++) {
                const sorteo = sorteosLoteriaNacional[i];
                let auxSorteo = await SorteosController.getSorteoByNumber(parseInt(sorteo.SortId));
                let data = {
                    tipoLoteria: 1,
                    sorteo: sorteo.SortId,
                    nombre: sorteo.SortNomb,
                    precio: sorteo.PVP,
                    fecha: sorteo.FSort,
                    cantidadDeFracciones: sorteo.CFrac,
                    valorPremioPrincipal: sorteo.VPremio,
                }
                if (auxSorteo.status) {
                    let updatedSorteo = await SorteosController.updateSorteo(data.sorteo, data);
                    response.push(updatedSorteo)
                } else {
                    let newSorteo = await SorteosController.addSorteo(data);
                    response.push(newSorteo)
                }
            } */
            let pozoMillonarioResponse = await SorteosController.setSorteos(5, sorteosPozoMillonario);
            response.push(pozoMillonarioResponse);
            /*             let pozoLength = sorteosPozoMillonario.length;
                        for (let i = 0; i < pozoLength; i++) {
                            const sorteo = sorteosPozoMillonario[i];
                            let auxSorteo = await SorteosController.getSorteoByNumber(parseInt(sorteo.SortId));
                            let data = {
                                tipoLoteria: 5,
                                sorteo: sorteo.SortId,
                                nombre: sorteo.SortNomb,
                                precio: sorteo.PVP,
                                fecha: sorteo.FSort,
                                cantidadDeFracciones: sorteo.CFrac,
                                valorPremioPrincipal: sorteo.VPremio,
                            }
                            if (auxSorteo.status) {
                                let updatedSorteo = await SorteosController.updateSorteo(data.sorteo, data);
                                response.push(updatedSorteo)
                            } else {
                                let newSorteo = await SorteosController.addSorteo(data);
                                response.push(newSorteo)
                            }
                        }
             */
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
                            await ResultadosController.setUltimoLottito(tipoLoteria, resultado, codigoPremio, indexLottito);
                            indexLottito++;
                        }

                    }
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

                data.forEach(premioAux => {
                    let premio = {
                        tipoLoteria,
                        //sorteo: sorteoData.values._id,
                        sorteo,
                        nombre: premioAux.$.N,
                        codigo: premioAux.$.P,
                        tipoPremio: premioAux.$.TP,
                        primeraSuerte: premioAux.$.PS,
                        valorPremio: premioAux.$.VP,
                        valorPremioConDescuento: premioAux.$.VD,
                        valorFraccion: premioAux.$.VF,
                        valorFraccionConDescuento: premioAux.$.FD,
                        descripcionDescuento: premioAux.$.OD,
                    }

                    PremiosController.addPremio(premio);
                });

            });
}

module.exports = mainController