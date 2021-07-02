const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const ultimoResultadoSchema = new mongoose.Schema({
    tipoLoteria: {
        type: Number,
    },
    ultimoResultado: {
        type: Schema.Types.ObjectId,
        ref: 'Resultado',
    },
    sorteo: {
        type: Number
    }
});

const UltimoResultado = module.exports = mongoose.model("UltimoResultado", ultimoResultadoSchema);
