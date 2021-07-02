const Lottery = require('../../loterianacional/controller/main');
const Results = require('../../results/controller/resultados');
const Sorteos = require('../../results/controller/sorteos');
const config = require('../../config/environment');
/*************************** CONSULTA DE RESULTADOS************************/
//let boletinesSource = config.sourceBoletinesA;
let sourceBoletines = config.sourceBoletinesB;
//let sourceBoletines = config.sourceBoletinesC;
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
            let sorteo = req.body.sorteo;
            let sorteoId = (await Sorteos.getSorteoByNumber(sorteo)).values._id;
            let combinaciones = req.body.combinaciones;
            let response = [];
            let length = combinaciones.length;
            for (let i = 0; i < length; i++) {
                let aux = await Results.getResultadoGanador(sorteoId, combinaciones[i]);
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
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },
    buscarLottoWinner: async (req, res) => {
        try {
            let sorteo = req.body.sorteo;
            let sorteoId = (await Sorteos.getSorteoByNumber(sorteo)).values._id;
            let combinaciones = req.body.combinaciones;
            let response = [];
            let length = combinaciones.length;
            for (let i = 0; i < length; i++) {
                let aux = await Results.getResultadoGanador(sorteoId, combinaciones[i]);
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
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },
    buscarPozoWinner: async (req, res) => {
        try {
            let sorteo = req.body.sorteo;
            let sorteoId = (await Sorteos.getSorteoByNumber(sorteo)).values._id;
            let combinaciones = req.body.combinaciones;
            let response = [];
            let length = combinaciones.length;
            for (let i = 0; i < length; i++) {
                let aux = await Results.getResultadoGanador(sorteoId, combinaciones[i]);
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
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json(e.toString());
        }
    },
    buscarPozoPlancha: async (req, res) => {
        try {
            let sorteo = req.body.sorteo;
            let sorteoId = (await Sorteos.getSorteoByNumber(sorteo)).values._id;
            let boletoInicial = req.body.boletoInicial;
            let boletoFinal = req.body.boletoFinal;
            let size = boletoFinal - boletoInicial + 1;
            let boletos = [...Array(size).keys()].map(i => i + boletoInicial);
            console.log(boletos);
            let response = [];
            let length = boletos.length;
            for (let i = 0; i < length; i++) {
                let auxResult = await Results.getResultadoByCodigo(sorteoId, boletos[i]);
                if (auxResult.status) {

                    let combinacion = auxResult.values.combinacion1;
                    let aux = await Results.getResultadoGanador(sorteoId, combinacion);
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
            console.log(response);
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
}

const mainInquiryController = {
    inquiryController,
    inquiryLotteryController
};

module.exports = mainInquiryController;