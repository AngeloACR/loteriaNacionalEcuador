const Sorteo = require('../model/sorteo');

const sorteosController = {

    deleteSorteo: async function (id) {
        try {
            let response = await this.getSorteoById(id);
            let sorteo = response.values;
            let deleteRes = await sorteo.remove();
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

    addSorteo: async function (element) {
        try {
            let newSorteo = new Sorteo(element);
            let sorteo = await newSorteo.save()
            let response = {
                status: true,
                values: sorteo
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

    getSorteos: async function () {
        try {
            const query = {};
            let sorteos = await Sorteo.find(query)
            let response = {
                status: true,
                values: sorteos
            }
            return response;
        } catch (error) { throw error; }
    },

    getSorteoByNumber: async function (numeroSorteo) {
        try {
            let query = { 'sorteo': numeroSorteo }
            let sorteo = await Sorteo.findOne(query)
            let response;
            if (sorteo) {
                response = {
                    status: true,
                    values: sorteo
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

    getSorteoById: async function (id) {
        try {
            let query = { '_id': id }
            let sorteo = await Sorteo.findOne(query)
            let response = {
                status: true,
                values: sorteo
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

    updateSorteo: async function (numeroSorteo, data) {
        try {
            //AGREGAR MAS ELEMENTOS DE SORTEO, COORDINAR CON ALEX
            let sorteo = await this.getSorteoByNumber(numeroSorteo)
            //sorteo.tipoLoteria = data.tipoLoteria;
            sorteo = await sorteo.save();
            response = {
                status: true,
                values: sorteo
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
module.exports = sorteosController