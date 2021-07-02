const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const premioSchema = new mongoose.Schema({
    tipoLoteria: {
        type: Number,
/*         type: Schema.Types.ObjectId,
        ref: 'TipoLoteria',
 */    },
    /*     sorteo: {
            type: Schema.Types.ObjectId,
            ref: 'Sorteo',
        }, */
    numeroSorteo: {
        type: Number
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


premioSchema.virtual('sorteo', {
    ref: 'Sorteo', // The model to use
    localField: 'numeroSorteo', // Find people where `localField`
    foreignField: 'sorteo', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: true,
});

const Premio = module.exports = mongoose.model("Premio", premioSchema);
