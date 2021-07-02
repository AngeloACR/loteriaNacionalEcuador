
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
            let response = await SorteosController.updateSorteos();
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
    updateSorteos: async function () {
        try {
            console.log("Actualizando sorteos")
            let response = await Lottery.autenticarUsuario();
            let token = response.token;

            let sorteosLotto = await Lottery.consultarSorteosJugados(2, token);
            let sorteosLoteriaNacional = await Lottery.consultarSorteosJugados(1, token);
            let sorteosPozoMillonario = await Lottery.consultarSorteosJugados(5, token);
            let lottoLength = sorteosLotto.length;
            response = [];
            console.log('Empezando a guardar sorteos')
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
            await SorteosController.setUltimoSorteo(2);
            let loteriaLength = sorteosLoteriaNacional.length;
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
            }
            await SorteosController.setUltimoSorteo(1);
            let pozoLength = sorteosPozoMillonario.length;
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
            await SorteosController.setUltimoSorteo(5);
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
    agregarSorteos: async (numeroSorteo, tipoLoteria, desdeArchivo) => {
        try {
            let auxSorteo = await SorteosController.getSorteoByNumber(numeroSorteo);
            console.log(auxSorteo)
            let sorteo = {
                sorteo: numeroSorteo,
                tipoLoteria
            };
            let response = auxSorteo;
            if (desdeArchivo) {

                let filePath = `uploads/resultados/SORT-${tipoLoteria}-${sorteo}.xml`;

                fs.readFile(filePath, 'utf8', async function (err, xmlData) {
                    if (err) throw err;
                    let dataSet = `<dataset>${xmlData}</dataset>`
                    let aux = await parser.parseStringPromise(dataSet, { trim: true })
                    let data = aux.dataset.R;
                    let length = data.length;
                    if (auxSorteo.status) {
                        response = await SorteosController.updateSorteo(numeroSorteo, data);
                    } else {
                        /* 
                        EDITAR SEGUN FORMATO DE DATOS
                        sorteo = {

                        }*/

                        response = await SorteosController.addSorteo(sorteo);
                    }
                    return response;


                });


            }
            else {

                if (!auxSorteo.status) {
                    response = await SorteosController.addSorteo(sorteo);
                }
                return response;
            }

        } catch (e) {
            throw e
        }
    },

    agregarResultados: async (sorteo, tipoLoteria) => {
        try {
            let filePath = `uploads/resultados/BOLPRE-${tipoLoteria}-${sorteo}.xml`;
            //let sorteoData = await mainController.agregarSorteos(sorteo, tipoLoteria, false);
            fs.readFile(filePath, 'utf8', async function (err, xmlData) {
                if (err) throw err;
                let dataSet = `<dataset>${xmlData}</dataset>`
                let aux = await parser.parseStringPromise(dataSet, { trim: true })
                let data = aux.dataset.R;
                let length = data.length;
                for (let i = 0; i < length; i++) {
                    let codigoPremio = `${sorteo}-${data[i].X[0].R[0].$.P}`;
                    //let premioData = await PremiosController.getPremioByCodigo(codigoPremio)
                    let resultado = {
                        tipoLoteria,
                        numeroSorteo: sorteo,
                        //sorteo: sorteoData.values._id,
                        combinacion1: data[i].$.C1,
                        combinacion2: data[i].$.C2,
                        combinacion3: data[i].$.C3,
                        codigo: data[i].$.B,
                        //premio: premioData.values._id,
                        codigoPremio,
                        combinacionGanadora: data[i].X[0].R[0].$.CG
                    }
                    ResultadosController.addResultado(resultado);
                }


            });
        } catch (e) {
            throw e
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

                    PremiosController.addPremio(premio);
                });

            });
        } catch (e) {
            throw e;
        }
    }

}

module.exports = mainController