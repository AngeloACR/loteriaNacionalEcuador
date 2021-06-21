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

    getResultadoByProduct: async function (id) {
        try {
            let query = { 'producto': id }
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