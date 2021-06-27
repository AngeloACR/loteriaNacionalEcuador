const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const sorteoSchema = new mongoose.Schema({
    sorteo: {
        type: Number
    },/* 
    tipoLoteria: {
        type: Schema.Types.ObjectId,
        ref: 'TipoLoteria',
    }, */

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
    premios: [{
        type: Schema.Types.ObjectId,
        ref: 'Premio',
    }],

})

const Sorteo = module.exports = mongoose.model("Sorteo", sorteoSchema);
