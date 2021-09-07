const Lottery = require('../../loterianacional/controller/main');
const Results = require('../../results/controller/resultados');
const Premios = require('../../results/controller/premios');
const Resultados = require('../../results/controller/main');
const Sorteos = require('../../results/controller/sorteos');
const config = require('../../config/environment');

/*************************** CONSULTA DE RESULTADOS************************/

//let sourceBoletines = config.sourceBoletinesLocal;
let sourceBoletines = config.sourceBoletinesTest;
//let sourceBoletines = config.sourceBoletinesProd;
const inquiryLotteryController = {


    searchLoteriaWinner: async (req, res) => {
        try {
            let response = await Lottery.autenticarUsuario();
            let token = response.token;
            let sorteo = req.body.sorteo;
            let combinaciones = req.body.combinaciones;
            response = [];
            let length = combinaciones.length;
            for (let i = 0; i < length; i++) {
                let aux = await Lottery.consultarBoletoGanador(1, sorteo, combinaciones[i], token);
                response.push(aux);
            }
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    searchLottoWinner: async (req, res) => {
        try {
            let response = await Lottery.autenticarUsuario();
            let token = response.token;
            let sorteo = req.body.sorteo;
            let combinaciones = req.body.combinaciones;
            response = [];
            let length = combinaciones.length;
            for (let i = 0; i < length; i++) {
                let aux = await Lottery.consultarBoletoGanador(2, sorteo, combinaciones[i], token);
                response.push(aux);
            }
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    searchPozoWinner: async (req, res) => {
        try {
            let response = await Lottery.autenticarUsuario();
            let token = response.token;
            let sorteo = req.body.sorteo;
            let combinaciones = req.body.combinaciones;
            response = [];
            let length = combinaciones.length;
            for (let i = 0; i < length; i++) {
                let aux = await Lottery.consultarBoletoGanador(5, sorteo, combinaciones[i], token);
                response.push(aux);
            }
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    searchLottoBoletin: async (req, res) => {
        try {
            let sorteo = req.body.sorteo;
            let tipoLoteria = 2
            let boletinAddress = `http://admin-loteria.gustavoliver.com/boletines/boletin-${tipoLoteria}${sorteo}.jpg`
            res.status(200).json(boletinAddress);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    searchLoteriaBoletin: async (req, res) => {
        try {
            let sorteo = req.body.sorteo;
            let tipoLoteria = 1
            let boletinAddress = `http://admin-loteria.gustavoliver.com/boletines/boletin-${tipoLoteria}${sorteo}.jpg`

            res.status(200).json(boletinAddress);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    searchPozoBoletin: async (req, res) => {
        try {
            let sorteo = req.body.sorteo;
            let tipoLoteria = 5
            let boletinAddress = `http://admin-loteria.gustavoliver.com/boletines/boletin-${tipoLoteria}${sorteo}.jpg`
            res.status(200).json(boletinAddress);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    searchLoteriaUltimosResultados: async (req, res) => {
        try {
            let response = await Lottery.autenticarUsuario();
            let token = response.token;
            response = await Lottery.consultarUltimosResultados(1, token);
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    searchLottoUltimosResultados: async (req, res) => {
        try {
            let response = await Lottery.autenticarUsuario();
            let token = response.token;
            response = await Lottery.consultarUltimosResultados(2, token);
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    searchPozoUltimosResultados: async (req, res) => {
        try {
            let response = await Lottery.autenticarUsuario();
            let token = response.token;
            response = await Lottery.consultarUltimosResultados(5, token);
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },


    searchLottoSorteosJugados: async (req, res) => {
        try {
            let response = await Lottery.autenticarUsuario();
            let token = response.token;
            response = await Lottery.consultarSorteosJugados(2, token);

            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    searchLoteriaSorteosJugados: async (req, res) => {
        try {
            let response = await Lottery.autenticarUsuario();
            let token = response.token;
            response = await Lottery.consultarSorteosJugados(1, token);

            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    searchPozoSorteosJugados: async (req, res) => {
        try {
            let response = await Lottery.autenticarUsuario();
            let token = response.token;
            response = await Lottery.consultarSorteosJugados(5, token);

            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },
}


const inquiryController = {


    buscarLoteriaWinner: async (req, res) => {
        try {
            console.time('consultaLoteria')
            let sorteo = req.body.sorteo;
            let combinaciones = req.body.combinaciones;
            let response = [];
            let length = combinaciones.length;
            for (let i = 0; i < length; i++) {
                let aux = await Results.getResultadoGanador(sorteo, combinaciones[i]);
                if (aux.status) {
                    let n = aux.values.length;
                    for (let j = 0; j < n; j++) {
                        let boleto = aux.values[j];/* 
                        let premio = await Premios.getPremioByCodigo(boleto.codigoPremio);
                        boleto['premio'] = premio.values; */

                        let responseAux = {
                            status: true,
                            combinacion: combinaciones[i],
                            sorteo,
                            data: boleto
                        }
                        response.push(responseAux);
                    }

                } else {
                    let responseAux = {
                        status: false,
                        combinacion: combinaciones[i],
                        sorteo,
                    }
                    response.push(responseAux);
                }
            }
            console.timeEnd('consultaLoteria')
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    buscarLottoWinner: async (req, res) => {
        try {
            console.time('consultaLotto')
            let sorteo = req.body.sorteo;
            let combinaciones = req.body.combinaciones;
            let response = [];
            let length = combinaciones.length;
            for (let i = 0; i < length; i++) {
                let aux = await Results.getResultadoGanador(sorteo, combinaciones[i]);
                if (aux.status) {
                    aux.values.forEach(boleto => {

                        let responseAux = {
                            status: true,
                            combinacion: combinaciones[i],
                            sorteo,
                            data: boleto
                        }
                        response.push(responseAux);
                    });

                } else {
                    let responseAux = {
                        status: false,
                        combinacion: combinaciones[i],
                        sorteo,
                    }
                    response.push(responseAux);
                }
            }
            console.timeEnd('consultaLotto')
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    buscarPozoWinner: async (req, res) => {
        try {
            console.time('consultaPozo')
            let sorteo = req.body.sorteo;
            let combinaciones = req.body.combinaciones;
            let response = [];
            let length = combinaciones.length;
            for (let i = 0; i < length; i++) {
                let aux = await Results.getResultadoGanador(sorteo, combinaciones[i]);
                if (aux.status) {
                    aux.values.forEach(boleto => {

                        let responseAux = {
                            status: true,
                            combinacion: combinaciones[i],
                            sorteo,
                            data: boleto
                        }
                        response.push(responseAux);
                    });

                } else {
                    let responseAux = {
                        status: false,
                        combinacion: combinaciones[i],
                        sorteo,
                    }
                    response.push(responseAux);
                }
            }
            console.timeEnd('consultaPozo')
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    buscarPozoPlancha: async (req, res) => {
        try {
            let sorteo = req.body.sorteo;
            let boletoInicial = parseInt(req.body.boletoInicial);
            let boletoFinal = parseInt(req.body.boletoFinal);
            let size = boletoFinal - boletoInicial + 1;
            let boletos = [...Array(size).keys()].map(i => (parseInt(i) + boletoInicial).toString());
            let response = [];
            let length = boletos.length;
            for (let i = 0; i < length; i++) {
                let auxResult = await Results.getResultadoByCodigo(sorteo, boletos[i]);
                if (auxResult.status) {

                    let combinacion = auxResult.values.combinacion1;
                    let aux = await Results.getResultadoGanador(sorteo, combinacion);
                    if (aux.status) {
                        aux.values.forEach(boleto => {

                            let responseAux = {
                                status: true,
                                combinacion,
                                sorteo,
                                data: boleto
                            }
                            response.push(responseAux);
                        });

                    } else {
                        let responseAux = {
                            status: false,
                            combinacion,
                            sorteo,
                        }
                        response.push(responseAux);
                    }
                } else {
                    let responseAux = {
                        status: false,
                        combinacion: boletos[i],
                        sorteo,
                    }
                    response.push(responseAux);

                }
            }
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    buscarLottoBoletin: async (req, res) => {
        try {
            let sorteo = req.body.sorteo;
            let tipoLoteria = 2
            let boletinAddress = `${sourceBoletines}T${tipoLoteria}${sorteo}.jpg`

            res.status(200).json(boletinAddress);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    buscarLoteriaBoletin: async (req, res) => {
        try {
            let sorteo = req.body.sorteo;
            let tipoLoteria = 1
            let boletinAddress = `${sourceBoletines}T${tipoLoteria}${sorteo}.jpg`

            res.status(200).json(boletinAddress);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    buscarPozoBoletin: async (req, res) => {
        try {
            let sorteo = req.body.sorteo;
            let tipoLoteria = 5
            let boletinAddress = `${sourceBoletines}T${tipoLoteria}${sorteo}.jpg`
            res.status(200).json(boletinAddress);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    buscarLoteriaUltimosResultados: async (req, res) => {
        try {
            response = await Lottery.consultarUltimosResultados(1, token);
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    buscarLottoUltimosResultados: async (req, res) => {
        try {
            response = await Lottery.consultarUltimosResultados(2, token);
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    buscarPozoUltimosResultados: async (req, res) => {
        try {
            response = await Lottery.consultarUltimosResultados(5, token);
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    buscarLottoSorteosJugados: async (req, res) => {
        try {
            response = await Sorteos.getSorteos(2);

            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    buscarLoteriaSorteosJugados: async (req, res) => {
        try {
            response = await Sorteos.getSorteos(1);
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    buscarPozoSorteosJugados: async (req, res) => {
        try {
            response = await Sorteos.getSorteos(5);

            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    buscarResultadoPrueba: async (req, res) => {
        try {
            let sorteo = req.body.sorteo;
            let combinacion = req.body.combinacion;
            let response = await Results.getResultadoGanador(sorteo, combinacion);

            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },

    buscarUltimosResultados: async (req, res) => {
        try {
            let response = await Resultados.getUltimosResultados();

            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },
}

const mainInquiryController = {
    inquiryController,
    inquiryLotteryController
};

module.exports = mainInquiryController;