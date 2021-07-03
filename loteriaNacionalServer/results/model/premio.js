const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const premioSchema = new mongoose.Schema({
    tipoLoteria: {
        type: Number,
    },
    numeroSorteo: {
        type: String
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
}, {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    });


premioSchema.virtual('sorteo', {
    ref: 'Sorteo', // The model to use
    localField: 'numeroSorteo', // Find people where `localField`
    foreignField: 'sorteo', // is equal to `foreignField`
    justOne: true,
});

const Premio = module.exports = mongoose.model("Premio", premioSchema);
