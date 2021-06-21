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
    premios: [{
        type: Schema.Types.ObjectId,
        ref: 'Premio',
    }],

})

const Sorteo = module.exports = mongoose.model("Sorteo", sorteoSchema);
