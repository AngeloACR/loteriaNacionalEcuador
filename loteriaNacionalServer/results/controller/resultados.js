const Resultado = require('../model/resultado');

const resultadosController = {

    deleteResultado: async function (id) {
        try {
            let response = await this.getResultadoById(id);
            let resultado = response.values;
            let deleteRes = await resultado.remove();
            response = {
                status: true,
                values: deleteRes
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

    addResultado: async function (element) {
        try {
            let newResultado = new Resultado(element);
            let resultado = await newResultado.save()
            let response = {
                status: true,
                values: resultado
            }
            return response;
        } catch (error) {
            console.log(error.toString())
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },

    getResultados: async function () {
        try {
            const query = {};
            let resultados = await Resultado.find(query)
            let response = {
                status: true,
                values: resultados
            }
            return response;
        } catch (error) { throw error; }
    },
    /* 
    getLoteriaCombinacionesGanadoras: async function (sorteo) {

        try {
            let queryPrimeraSuerte = { 'sorteo': sorteo, 'codigoPremio': 1 }
            let primeraSuerte = await Resultado.findOne(queryPrimeraSuerte).populate('premio');
            let querySegundaSuerte = { 'sorteo': sorteo, 'codigoPremio': 2 }
            let segundaSuerte = await Resultado.findOne(querySegundaSuerte).populate('premio');
            let queryTerceraSuerte = { 'sorteo': sorteo, 'codigoPremio': 3 }
            let terceraSuerte = await Resultado.findOne(queryTerceraSuerte).populate('premio');
            let queryCuartaSuerte = { 'sorteo': sorteo, 'codigoPremio': 4 }
            let cuartaSuerte = await Resultado.findOne(queryCuartaSuerte).populate('premio');
            let queryQuintaSuerte = { 'sorteo': sorteo, 'codigoPremio': 5 }
            let quintaSuerte = await Resultado.findOne(queryQuintaSuerte).populate('premio');
            let querySextaSuerte = { 'sorteo': sorteo, 'codigoPremio': 6 }
            let sextaSuerte = await Resultado.findOne(querySextaSuerte).populate('premio');
            let querySeptimaSuerte = { 'sorteo': sorteo, 'codigoPremio': 7 }
            let septimaSuerte = await Resultado.findOne(querySeptimaSuerte).populate('premio');
            let queryOctavaSuerte = { 'sorteo': sorteo, 'codigoPremio': 8 }
            let octavaSuerte = await Resultado.findOne(queryOctavaSuerte).populate('premio');
            let queryNovenaSuerte = { 'sorteo': sorteo, 'codigoPremio': 9 }
            let novenaSuerte = await Resultado.findOne(queryNovenaSuerte).populate('premio');
            let queryDecimaSuerte = { 'sorteo': sorteo, 'codigoPremio': 10 }
            let decimaSuerte = await Resultado.findOne(queryDecimaSuerte).populate('premio');

            let aproximacion4PrimeraSuerte = {
                combinacion: primeraSuerte.combinacion1.slice(4),
                premio: ''
            };
            let aproximacion3PrimeraSuerte = {
                combinacion: primeraSuerte.combinacion1.slice(3),
                premio: ''
            };
            let aproximacion4SegundaSuerte = {
                combinacion: segundaSuerte.combinacion1.slice(4),
                premio: ''
            };
            let aproximacion4TerceraSuerte = {
                combinacion: terceraSuerte.combinacion1.slice(4),
                premio: ''
            };
            let aproximacion4CuartaSuerte = {
                combinacion: cuartaSuerte.combinacion1.slice(4),
                premio: ''
            };
            let aproximacion4QuintaSuerte = {
                combinacion: quintaSuerte.combinacion1.slice(4),
                premio: ''
            };
            let aproximacion4SextaSuerte = {
                combinacion: sextaSuerte.combinacion1.slice(4),
                premio: ''
            };
            let aproximacion4SeptimaSuerte = {
                combinacion: septimaSuerte.combinacion1.slice(4),
                premio: ''
            };
            let aproximacion4OctavaSuerte = {
                combinacion: octavaSuerte.combinacion1.slice(4),
                premio: ''
            };
            let aproximacion4NovenaSuerte = {
                combinacion: novenaSuerte.combinacion1.slice(4),
                premio: ''
            };
            let aproximacion4DecimaSuerte = {
                combinacion: decimaSuerte.combinacion1.slice(4),
                premio: ''
            };

            let terminal4PrimeraSuerte = {
                combinacion: primeraSuerte.combinacion1.slice(-4),
                premio: ''
            };
            let terminal3PrimeraSuerte = {
                combinacion: primeraSuerte.combinacion1.slice(-3),
                premio: ''
            };
            let terminal2PrimeraSuerte = {
                combinacion: primeraSuerte.combinacion1.slice(-2),
                premio: ''
            };
            let terminal1PrimeraSuerte = {
                combinacion: primeraSuerte.combinacion1.slice(-1),
                premio: ''
            };



            let suertesPrincipales = {
                primeraSuerte,
                segundaSuerte,
                terceraSuerte,
                cuartaSuerte,
                quintaSuerte,
                sextaSuerte,
                septimaSuerte,
                octavaSuerte,
                novenaSuerte,
                decimaSuerte
            }
            let aproximaciones = {
                aproximacion4PrimeraSuerte,
                aproximacion3PrimeraSuerte,
                aproximacion4SegundaSuerte,
                aproximacion4TerceraSuerte,
                aproximacion4CuartaSuerte,
                aproximacion4QuintaSuerte,
                aproximacion4SextaSuerte,
                aproximacion4SeptimaSuerte,
                aproximacion4OctavaSuerte,
                aproximacion4NovenaSuerte,
                aproximacion4DecimaSuerte,
            }
            let terminales = {
                terminal4PrimeraSuerte,
                terminal3PrimeraSuerte,
                terminal2PrimeraSuerte,
                terminal1PrimeraSuerte,
            }
            let combinacionesGanadoras = {
                suertesPrincipales,
                aproximaciones,
                terminales
            }
            return combinacionesGanadoras;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },
    getLottoCombinacionesGanadoras: async function (sorteo) {

        try {
            let queryPrimeraSuerte = { 'sorteo': sorteo, 'codigoPremio': 1 }
            let primeraSuerte = await Resultado.findOne(queryPrimeraSuerte).populate('premio');
            let querySegundaSuerte = { 'sorteo': sorteo, 'codigoPremio': 2 }
            let segundaSuerte = await Resultado.findOne(querySegundaSuerte).populate('premio');
            let queryTerceraSuerte = { 'sorteo': sorteo, 'codigoPremio': 3 }
            let terceraSuerte = await Resultado.findOne(queryTerceraSuerte).populate('premio');
            let queryCuartaSuerte = { 'sorteo': sorteo, 'codigoPremio': 4 }
            let cuartaSuerte = await Resultado.findOne(queryCuartaSuerte).populate('premio');
            let queryQuintaSuerte = { 'sorteo': sorteo, 'codigoPremio': 5 }
            let quintaSuerte = await Resultado.findOne(queryQuintaSuerte).populate('premio');
            let querySextaSuerte = { 'sorteo': sorteo, 'codigoPremio': 6 }
            let sextaSuerte = await Resultado.findOne(querySextaSuerte).populate('premio');
            let querySeptimaSuerte = { 'sorteo': sorteo, 'codigoPremio': 7 }
            let septimaSuerte = await Resultado.findOne(querySeptimaSuerte).populate('premio');
            let queryOctavaSuerte = { 'sorteo': sorteo, 'codigoPremio': 8 }
            let octavaSuerte = await Resultado.findOne(queryOctavaSuerte).populate('premio');
            let queryNovenaSuerte = { 'sorteo': sorteo, 'codigoPremio': 9 }
            let novenaSuerte = await Resultado.findOne(queryNovenaSuerte).populate('premio');
            let queryDecimaSuerte = { 'sorteo': sorteo, 'codigoPremio': 10 }
            let decimaSuerte = await Resultado.findOne(queryDecimaSuerte).populate('premio');
            let queryDecimaPrimeraSuerte = { 'sorteo': sorteo, 'codigoPremio': 11 }
            let decimaPrimeraSuerte = await Resultado.findOne(queryDecimaPrimeraSuerte).populate('premio');
            let queryDecimaSegundaSuerte = { 'sorteo': sorteo, 'codigoPremio': 12 }
            let decimaSegundaSuerte = await Resultado.findOne(queryDecimaSegundaSuerte).populate('premio');
            let queryDecimaTerceraSuerte = { 'sorteo': sorteo, 'codigoPremio': 13 }
            let decimaTerceraSuerte = await Resultado.findOne(queryDecimaTerceraSuerte).populate('premio');
            let queryDecimaCuartaSuerte = { 'sorteo': sorteo, 'codigoPremio': 14 }
            let decimaCuartaSuerte = await Resultado.findOne(queryDecimaCuartaSuerte).populate('premio');
            let queryDecimaQuintaSuerte = { 'sorteo': sorteo, 'codigoPremio': 15 }
            let decimaQuintaSuerte = await Resultado.findOne(queryDecimaQuintaSuerte).populate('premio');

            let queryLottoPlus = { 'sorteo': sorteo, 'codigoPremio': 23 }
            let lottoPlus = await Resultado.findOne(queryLottoPlus).populate('premio');
            let queryLottito = { 'sorteo': sorteo, 'codigoPremio': 24 }
            let lottito = await Resultado.find(queryLottito).populate('premio');

            let aproximacion5PrimeraSuerte = {
                combinacion: primeraSuerte.combinacion1.slice(5),
                premio: ''
            };
            let aproximacion4PrimeraSuerte = {
                combinacion: primeraSuerte.combinacion1.slice(4),
                premio: ''
            };

            let terminal4PrimeraSuerte = {
                combinacion: primeraSuerte.combinacion1.slice(-5),
                premio: ''
            };
            let terminal4PrimeraSuerte = {
                combinacion: primeraSuerte.combinacion1.slice(-4),
                premio: ''
            };
            let terminal3PrimeraSuerte = {
                combinacion: primeraSuerte.combinacion1.slice(-3),
                premio: ''
            };
            let terminal2PrimeraSuerte = {
                combinacion: primeraSuerte.combinacion1.slice(-2),
                premio: ''
            };
            let terminal1PrimeraSuerte = {
                combinacion: primeraSuerte.combinacion1.slice(-1),
                premio: ''
            };



            let suertesPrincipales = {
                primeraSuerte,
                segundaSuerte,
                terceraSuerte,
                cuartaSuerte,
                quintaSuerte,
                sextaSuerte,
                septimaSuerte,
                octavaSuerte,
                novenaSuerte,
                decimaSuerte,
                decimaPrimeraSuerte,
                decimaSegundaSuerte,
                decimaTerceraSuerte,
                decimaCuartaSuerte,
                decimaQuintaSuerte,
            }
            let aproximaciones = {
                aproximacion5PrimeraSuerte,
                aproximacion4PrimeraSuerte,
            }
            let terminales = {
                terminal5PrimeraSuerte,
                terminal4PrimeraSuerte,
                terminal3PrimeraSuerte,
                terminal2PrimeraSuerte,
                terminal1PrimeraSuerte,
            }
            let combinacionesGanadoras = {
                suertesPrincipales,
                aproximaciones,
                terminales,
                lottoPlus,
                lottito
            }
            return combinacionesGanadoras;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },
    getPozoCombinacionesGanadoras: async function (sorteo, combinacion) {

        try {
            let query = { 'sorteo': sorteo, 'combinacion1': combinacion }
            let resultado = await Resultado.findOne(query)
            if (resultado) {

                response = {
                    status: true,
                    values: resultado
                }
            } else {
                response = {
                    status: false
                }
            }
            let suertesPrincipales = {
                primeraSuerte,
                segundaSuerte,
                terceraSuerte,
                cuartaSuerte,
                quintaSuerte,
                sextaSuerte,
                septimaSuerte,
                octavaSuerte,
                novenaSuerte,
                decimaSuerte
            }
            return suertesPrincipales;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    }, */
    getResultadoGanador: async function (sorteo, combinacion) {
        try {
            let query = { 'sorteo': sorteo, 'combinacion1': combinacion }
            let resultado = await Resultado.find(query).populate('premio');
            console.log(resultado);
            if (resultado && resultado.length != 0) {

                response = {
                    status: true,
                    values: resultado
                }
            } else {
                response = {
                    status: false
                }
            }
            console.log(response);
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },

    getResultadoByCombinacion2: async function (sorteo, combinacion2) {
        try {
            let query = { 'sorteo': sorteo, 'combinacion2': combinacion2 }
            let resultado = await Resultado.findOne(query)
            if (resultado) {

                response = {
                    status: true,
                    values: resultado
                }
            } else {
                response = {
                    status: false
                }
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

    getResultadoByCombinacion3: async function (sorteo, combinacion3) {
        try {
            let query = { 'sorteo': sorteo, 'combinacion3': combinacion3 }
            let resultado = await Resultado.findOne(query)
            if (resultado) {

                response = {
                    status: true,
                    values: resultado
                }
            } else {
                response = {
                    status: false
                }
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

    getResultadoById: async function (id) {
        try {
            let query = { '_id': id }
            let resultado = await Resultado.findOne(query)
            let response = {
                status: true,
                values: resultado
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

    getResultadoByCodigo: async function (sorteo, codigo) {
        try {
            let query = { 'sorteo': sorteo, 'codigo': codigo }
            let resultado = await Resultado.findOne(query)
            let response = {
                status: true,
                values: resultado
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
    updateResultado: async function (id, data) {
        try {
            let resultado = await this.getResultadoById(id)
            resultado.name = data.name;
            resultado.code = data.code;
            resultado = await resultado.save();
            response = {
                status: true,
                values: resultado
            }
            return response

        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },

}
module.exports = resultadosController