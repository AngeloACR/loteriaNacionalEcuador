const Premio = require('../model/premio');

const premiosController = {

    deletePremio: async function (id) {
        try {
            let response = await this.getPremioById(id);
            let premio = response.values;
            let deleteRes = await premio.remove();
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
    deletePremiosBySorteo: async function (sorteo) {
        try {
            let response = await premiosController.getPremiosBySorteo(sorteo);
            let premios = response.values;
            response = [];
            let n = premios.length;
            for (let i = 0; i < n; i++) {
                console.log("deleting Premio")
                let premio = premios[i];

                let deleteRes = await premio.remove();
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

    getPremiosBySorteo: async function (sorteo) {
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

    addPremio: async function (element) {
        try {
            let newPremio = new Premio(element);
            let premio = await newPremio.save()
            let response = {
                status: true,
                values: premio
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

    getPremios: async function () {
        try {
            const query = {};
            let premios = await Premio.find(query)
            let response = {
                status: true,
                values: premios
            }
            return response;
        } catch (error) { throw error; }
    },

    getPremioByCodigo: async function (codigo) {
        try {
            let query = { 'codigo': codigo }
            let premio = await Premio.findOne(query)
            let response = {
                status: true,
                values: premio
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

    getPremioById: async function (id) {
        try {
            let query = { '_id': id }
            let premio = await Premio.findOne(query)
            let response = {
                status: true,
                values: premio
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

    updatePremio: async function (id, data) {
        try {
            let premio = await this.getPremioById(id)
            premio.name = data.name;
            premio.code = data.code;
            premio = await premio.save();
            response = {
                status: true,
                values: premio
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

module.exports = premiosController