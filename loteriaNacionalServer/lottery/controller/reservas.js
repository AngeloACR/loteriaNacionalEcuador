const Reserva = require('../model/reserva');

const reservasController = {

    deleteReserva: async function (id) {
        try {
            let response = await this.getReservaById(id);
            let reserva = response.values;
            let deleteRes = await reserva.remove();
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

    addReserva: async function (element) {
        try {
            let newReserva = new Reserva(element);
            let reserva = await newReserva.save()
            let response = {
                status: true,
                values: reserva
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

    updateReserva: async function (numeroReserva, data) {
        try {
            let reservaResponse = await this.getReservaByNumber(numeroReserva)
            let reserva = reservaResponse.values;
            reserva = await reserva.save();
            response = {
                status: true,
                values: reserva
            }
            return response

        } catch (error) {
            let response = {
                status: false,
                msg: error.toString()
            }
            return response
        }
    },

    getReservas: async function (tipoLoteria) {
        try {
            const query = { 'tipoLoteria': tipoLoteria };
            let reservas = await Reserva.find(query)
            let response = {
                status: true,
                values: reservas
            }
            return response;
        } catch (error) { throw error; }
    },

    getReservaById: async function (id) {
        try {
            let query = { '_id': id }
            let reserva = await Reserva.findOne(query)
            let response = {
                status: true,
                values: reserva
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
    getCompraByVentaId: async function (id) {
        try {
            let query = { 'ventaId': id }
            let reserva = await Reserva.findOne(query)
            let response
            if(reserva && reserva.length){

                response = {
                    status: true,
                    values: reserva
                }
            }else{
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

    getReservaByLotteryId: async function (id) {
        try {
            let query = { 'reservaId': id }
            let reserva = await Reserva.findOne(query)
            let response = {
                status: true,
                values: reserva
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


}
module.exports = reservasController