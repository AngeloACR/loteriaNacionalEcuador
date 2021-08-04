const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const resultadoSchema = new mongoose.Schema({
    tipoLoteria: {
        type: Number,
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
    combinacion4: {
        type: String,
    },
    codigo: {
        type: Number,
    },
    codigoPremio: {
        type: String
    },
    numeroSorteo: {
        type: String
    }
}, {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    });

resultadoSchema.virtual('premio', {
    ref: 'Premio', // The model to use
    localField: 'codigoPremio', // Find people where `localField`
    foreignField: 'codigo', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: true,
});
resultadoSchema.virtual('sorteo', {
    ref: 'Sorteo', // The model to use
    localField: 'numeroSorteo', // Find people where `localField`
    foreignField: 'sorteo', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: true,
});

const Resultado = module.exports = mongoose.model("Resultado", resultadoSchema);
