const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const sorteoSchema = new mongoose.Schema({
    sorteo: {
        type: String
    },

    tipoLoteria: {
        type: Number,
    },
    precio: {
        type: Number,
    },
    fecha: {
        type: String,
    },
    cantidadDeFracciones: {
        type: Number,
    },
    valorPremioPrincipal: {
        type: Number,
    },
    nombre: {
        type: String,
    },
    ultimoSorteo: {
        type: Boolean,
    },

})

const Sorteo = module.exports = mongoose.model("Sorteo", sorteoSchema);
