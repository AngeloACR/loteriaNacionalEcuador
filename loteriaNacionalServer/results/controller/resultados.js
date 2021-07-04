const Resultado = require('../model/resultado');
const UltimoResultado = require('../model/ultimoResultado');

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

    updateResultado: async function (id, data) {
        try {
            let resultado = await this.getResultadoById(id)
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

    getResultadoGanador: async function (sorteo, combinacion) {
        try {
            let query = { 'numeroSorteo': sorteo, 'combinacion1': combinacion }
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
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },

    getResultadoByCombinacion1: async function (combinacion1) {
        try {
            let query = { 'combinacion1': combinacion1 }
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

    getResultadoPrincipal: async function (sorteo, tipoLoteria) {
        try {
            let query = { 'tipoLoteria': tipoLoteria, 'codigoPremio': `${sorteo}-1` }
            let resultado = await Resultado.findOne(query)
            let response;
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
            let response;
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
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },


    getUltimoResultado: async function (tipoLoteria) {
        try {
            let query = { 'tipoLoteria': tipoLoteria }
            let resultado;
            if (tipoLoteria != 2) {

                resultado = await UltimoResultado.findOne(query).populate('ultimoResultado').populate('sorteo').populate('premioPrincipal').populate('premioLottoPlus').populate('premioLottito');
            } else {
                resultado = await UltimoResultado.findOne(query).populate('ultimoResultado').populate('resultadoLottoPlus').populate('resultadosLottito').populate('sorteo').populate('premioPrincipal');

            }
            let response;
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

    setUltimoResultado: async function (tipoLoteria, resultado, codigoPremio) {
        try {
            let data = {
                tipoLoteria,
                numeroSorteo: resultado.numeroSorteo,
                ultimoResultado: resultado._id,
                codigoPremio
            }
            let ultimoResultadoResponse = await resultadosController.getUltimoResultado(tipoLoteria);
            if (ultimoResultadoResponse.status) {
                console.log('Actualizando ultimo resultado');
                ultimoResultadoResponse.values.ultimoResultado = data.ultimoResultado;
                ultimoResultadoResponse.values.numeroSorteo = data.numeroSorteo;
                ultimoResultadoResponse.values.codigoPremio = data.codigoPremio;
                let newUltimoResultado = await ultimoResultadoResponse.values.save()
            } else {
                console.log('Creando ultimo resultado');
                let newUltimoResultado = new UltimoResultado(data)
                newUltimoResultado = await newUltimoResultado.save()
            }
        } catch (e) {
            console.log(e.toString());
        }

    },
    setUltimoLottito: async function (tipoLoteria, resultado, codigoPremioLottito, indexLottito) {
        try {
            let data = {
                tipoLoteria,
                resultadosLottito: [resultado._id],
                codigoPremioLottito,
                indexLottito
            }

            let ultimoResultadoResponse = await resultadosController.getUltimoResultado(tipoLoteria);
            if (ultimoResultadoResponse.status) {
                console.log('Actualizando ultimo resultado');
                if (indexLottito == 0) {
                    ultimoResultadoResponse.values.resultadosLottito = []
                }
                ultimoResultadoResponse.values.resultadosLottito.push(resultado._id);
                ultimoResultadoResponse.values.codigoPremioLottito = data.codigoPremioLottito;
                ultimoResultadoResponse.values.indexLottito = data.indexLottito;
                let newUltimoResultado = await ultimoResultadoResponse.values.save()
            } else {
                console.log('Creando ultimo resultado');
                let newUltimoResultado = new UltimoResultado(data)
                newUltimoResultado = await newUltimoResultado.save()
            }
        } catch (e) {
            console.log(e.toString());
        }

    },
    setUltimoLottoPlus: async function (tipoLoteria, resultado, codigoPremioLottoPlus) {
        try {
            let data = {
                tipoLoteria,
                resultadoLottoPlus: resultado._id,
                codigoPremioLottoPlus
            }
            let ultimoResultadoResponse = await resultadosController.getUltimoResultado(tipoLoteria);
            if (ultimoResultadoResponse.status) {
                console.log('Actualizando ultimo resultado');
                ultimoResultadoResponse.values.resultadoLottoPlus = data.resultadoLottoPlus;
                ultimoResultadoResponse.values.codigoPremioLottoPlus = data.codigoPremioLottoPlus;
                let newUltimoResultado = await ultimoResultadoResponse.values.save()
            } else {
                console.log('Creando ultimo resultado');
                let newUltimoResultado = new UltimoResultado(data)
                newUltimoResultado = await newUltimoResultado.save()
            }
        } catch (e) {
            console.log(e.toString());
        }

    },


}
module.exports = resultadosController