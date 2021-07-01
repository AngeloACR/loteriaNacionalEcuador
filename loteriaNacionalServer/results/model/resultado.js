const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const resultadoSchema = new mongoose.Schema({
    tipoLoteria: {
        type: Number,
/*         type: Schema.Types.ObjectId,
    ref: 'TipoLoteria',
*/    },
    sorteo: {
        type: Schema.Types.ObjectId,
        ref: 'Sorteo',
    },
    combinacion1: {
        type: String
    },
    combinacion2: {
        type: String,
    },
    combinacion3: {
        type: String,
    },
    codigo: {
        type: Number,
    },
    premio: {
        type: Schema.Types.ObjectId,
        ref: 'Premio',
    },
    combinacionGanadora: {
        type: Number,
    },
    uñtimoResultado: {
        type: Boolean,
    }
});

const Resultado = module.exports = mongoose.model("Resultado", resultadoSchema);
