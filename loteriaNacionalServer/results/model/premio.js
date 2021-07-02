const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const premioSchema = new mongoose.Schema({
    tipoLoteria: {
        type: Number,
/*         type: Schema.Types.ObjectId,
        ref: 'TipoLoteria',
 */    },
    sorteo: {
        type: Schema.Types.ObjectId,
        ref: 'Sorteo',
    },
    codigo: {
        type: String
    },
    nombre: {
        type: String
    },
    tipoPremio: {
        type: String,
    },
    primeraSuerte: {
        type: Number,
    },
    valorPremio: {
        type: Number,
    },
    valorPremioConDescuento: {
        type: Number,
    },
    valorFraccion: {
        type: Number,
    },
    valorFraccionConDescuento: {
        type: Number,
    },
    descripcionDescuento: {
        type: String,
    },
})

const Premio = module.exports = mongoose.model("Premio", premioSchema);
