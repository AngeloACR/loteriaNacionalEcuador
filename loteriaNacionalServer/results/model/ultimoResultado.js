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
    numeroSorteo: {
        type: String
    },
    codigoPremio: {
        type: String
    }
}, {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    });

ultimoResultadoSchema.virtual('sorteo', {
    ref: 'Sorteo', // The model to use
    localField: 'numeroSorteo', // Find people where `localField`
    foreignField: 'sorteo', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: true,
});



ultimoResultadoSchema.virtual('premio', {
    ref: 'Premio', // The model to use
    localField: 'codigoPremio', // Find people where `localField`
    foreignField: 'codigo', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: true,
});

const UltimoResultado = module.exports = mongoose.model("UltimoResultado", ultimoResultadoSchema);
