const Resultado = require('../model/resultado');
const ResultadoLoteria = require('../model/resultadoLoteria');
const ResultadoLotto = require('../model/resultadoLotto');
const ResultadoPozo = require('../model/resultadoPozo');
const Premio = require('../controller/premios');
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
    deleteResultadosBySorteo: async function (sorteo) {
        try {
            let response = await resultadosController.getResultadosBySorteo(sorteo);
            let resultados = response.values;
            response = [];
            let n = resultados.length;
            console.log('About to delete resultados')
            for (let i = 0; i < n; i++) {
                let resultado = resultados[i];
                let deleteRes = await resultado.remove();

                response.push({
                    status: true,
                    values: deleteRes
                })
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

    getResultadosBySorteo: async function (sorteo) {
        try {
            sorteo = `${sorteo}`;
            const query = { "numeroSorteo": sorteo };
            let resultados = await Resultado.find(query)
            let response = {
                status: true,
                values: resultados
            }
            return response;
        } catch (error) { throw error; }
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
    addResultadoLoteria: async function (element) {
        try {
            let newResultado = new ResultadoLoteria(element);
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
    addResultadoLotto: async function (element) {
        try {
            let newResultado = new ResultadoLotto(element);
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
    addResultadoPozo: async function (element) {
        try {
            let newResultado = new ResultadoPozo(element);
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
    updateUltimoResultado: async function (element) {
        try {
            let tipoLoteria = element.tipoLoteria;
            let resultado = await resultadosController.addResultado(element);
            let resultadoId = resultado.values._id;
            let query = { 'tipoLoteria': tipoLoteria }
            let ultimoResultado = await UltimoResultado.findOne(query)
            ultimoResultado.ultimoResultado = resultadoId;
            ultimoResultado.numeroSorteo = element.numeroSorteo;
            ultimoResultado.codigoPremioPrincipal = element.codigoPremio;
            ultimoResultado = await ultimoResultado.save()
            let response = {
                status: true,
                values: ultimoResultado
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
            let sorteoAux = `${sorteo}`
            let combinacionAux = `${combinacion}`
            console.log(combinacionAux);
            let query = { 'numeroSorteo': sorteoAux, 'combinacion1': combinacionAux }
            //let resultado = await Resultado.find(query).populate('premio');
            let resultado = await Resultado.find(query).lean();
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
            console.log(error);
            return response
        }
    },
    getResultadoGanadorLotto: async function (sorteo, combinacion) {
        try {
            let sorteoAux = `${sorteo}`
            let combinacionAux = `${combinacion}`
            let query = { 'numeroSorteo': sorteoAux, 'combinacion1': combinacionAux }
            //let resultado = await Resultado.find(query).populate('premio');
            let resultado = await ResultadoLotto.find(query);

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
            console.log(JSON.stringify(error));
            console.log(response);
            return response
        }
    },
    getResultadoGanadorLoteria: async function (sorteo, combinacion) {
        try {
            let sorteoAux = `${sorteo}`
            let combinacionAux = `${combinacion}`
            let query = { 'numeroSorteo': sorteoAux, 'combinacion1': combinacionAux }
            //let resultado = await Resultado.find(query).populate('premio');
            let resultado = await ResultadoLoteria.find(query);

            if (resultado && resultado.length != 0) {
                resultado.push(resultadoAux);
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
    getResultadoGanadorPozo: async function (sorteo, combinacion) {
        try {
            let sorteoAux = `${sorteo}`
            let combinacionAux = `${combinacion}`
            let query = { 'numeroSorteo': sorteoAux, 'combinacion1': combinacionAux }

            //let resultado = await Resultado.find(query).populate('premio');
            let resultado = await ResultadoPozo.find(query);

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

    getResultadosByTipoLoteria: async function (tipoLoteria) {
        try {
            let query = { 'tipoLoteria': tipoLoteria }
            let resultados = await Resultado.find(query).lean();
            let response = {
                status: true,
                values: resultados
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
            if (tipoLoteria == 1) {

                resultado = await UltimoResultado.findOne(query).populate('ultimoResultadoLoteria').populate('sorteo').populate('premioPrincipal');
            } else if (tipoLoteria == 2) {
                resultado = await UltimoResultado.findOne(query).populate('ultimoResultadoLotto').populate('resultadoLottoPlus').populate('resultadosLottito').populate('resultadoNosVemosJefe').populate('sorteo').populate('premioPrincipal').populate('premioNosVemosJefe').populate('premioLottoPlus').populate('premioLottito');

            } else {
                resultado = await UltimoResultado.findOne(query).populate('ultimoResultadoPozo').populate('sorteo').populate('premioPrincipal');

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


    parseResultadosLoteria: async function () {
        try {

            let query = { 'tipoLoteria': 1 }
            let resultadosLoteria = await Resultado.find(query).limit(10000);
            let nLoteria = resultadosLoteria.length;
            let aux = nLoteria;
            while (nLoteria != 0) {

                for (let i = 0; i < nLoteria; i++) {
                    const element = resultadosLoteria[i];
                    let newResultado = {
                        combinacion1: element.combinacion1,
                        codigo: element.codigo,
                        codigoPremio: element.codigoPremio,
                        numeroSorteo: element.numeroSorteo,
                    }
                    await resultadosController.addResultadoLoteria(newResultado)
                }
                resultadosLoteria = await Resultado.find(query).skip(aux).limit(10000);
                nLoteria = resultadosLoteria.length;
                aux += nLoteria;
            }
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },
    parseResultadosLotto: async function () {
        try {

            let query = { 'tipoLoteria': 2 }
            let resultadosLotto = await Resultado.find(query).limit(100000);
            let nLotto = resultadosLotto.length;
            let aux = nLotto;
            while (nLotto != 0) {

                for (let i = 0; i < nLotto; i++) {
                    const element = resultadosLotto[i];
                    let combinacion4 = element.combinacion4 ? element.combinacion4 : '';
                    let newResultado = {
                        combinacion1: element.combinacion1,
                        combinacion2: element.combinacion2,
                        combinacion3: element.combinacion3,
                        combinacion4,
                        codigo: element.codigo,
                        codigoPremio: element.codigoPremio,
                        numeroSorteo: element.numeroSorteo,
                    }
                    await resultadosController.addResultadoLotto(newResultado)
                }
                resultadosLotto = await Resultado.find(query).skip(aux).limit(100000);
                nLotto = resultadosLotto.length;
                aux += nLotto;
            }
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },
    parseResultadosPozo: async function () {
        try {

            let query = { 'tipoLoteria': 5 }
            let resultadosPozo = await Resultado.find(query).limit(10000);
            let nPozo = resultadosPozo.length;
            let aux = nPozo;
            while (nPozo != 0) {

                for (let i = 0; i < nPozo; i++) {
                    const element = resultadosPozo[i];

                    let newResultado = {
                        combinacion1: element.combinacion1,
                        combinacion2: element.combinacion2,
                        combinacion3: element.combinacion3,
                        codigo: element.codigo,
                        codigoPremio: element.codigoPremio,
                        numeroSorteo: element.numeroSorteo,
                    }
                    await resultadosController.addResultadoPozo(newResultado)
                }
                resultadosPozo = await Resultado.find(query).skip(aux).limit(10000);
                nPozo = resultadosPozo.length;
                aux += nPozo;
            }
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