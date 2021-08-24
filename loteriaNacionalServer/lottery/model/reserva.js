const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const reservaSchema = new mongoose.Schema({
    loteria: [{
        sorteo: {
            type: String
        },
        combinacion: {
            type: String
        },
        fracciones: [{
            type: String
        }],
    }],
    lotto: [{
        combinacion: {
            type: String
        },
    }],
    pozo: [{
        combinacion: {
            type: String
        },
    }],
    reservaId: {
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
