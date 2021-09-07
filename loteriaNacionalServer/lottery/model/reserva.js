const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const reservaSchema = new mongoose.Schema({
    loteria: [{
        sorteo: {
            type: String
        },
        fecha: {
            type: String
        },
        combinacion1: {
            type: String
        },
        fracciones: [{
            type: String
        }],
        subtotal: {
            type: String
        },
    }],
    lotto: [{
        combinacion1: {
            type: String
        },
        combinacion2: {
            type: String
        },
        combinacion3: {
            type: String
        },
        combinacion4: {
            type: String
        },
        subtotal: {
            type: String
        },
    }],
    pozo: [{
        combinacion1: {
            type: String
        },
        combinacion2: {
            type: String
        },
        combinacion3: {
            type: String
        },
        subtotal: {
            type: String
        },
    }],
    total: {
        type: String
    },

}, {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    });

/* resultadoSchema.virtual('premio', {
    ref: 'Premio', // The model to use
    localField: 'codigoPremio', // Find people where `localField`
    foreignField: 'codigo', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: true,
}); */

const Reserva = module.exports = mongoose.model("Reserva", reservaSchema);
