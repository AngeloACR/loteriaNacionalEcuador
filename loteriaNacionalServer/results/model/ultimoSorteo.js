const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const ultimoSorteoSchema = new mongoose.Schema({
    tipoLoteria: {
        type: Number,
    },
    sorteo: {
        type: Number,
    },
    ultimoSorteo: {
        type: Schema.Types.ObjectId,
        ref: 'Sorteo',
    }
});

const UltimoSorteo = module.exports = mongoose.model("UltimoSorteo", ultimoSorteoSchema);
