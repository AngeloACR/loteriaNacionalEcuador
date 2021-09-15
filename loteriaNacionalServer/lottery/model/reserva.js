const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const ventaSchema = new mongoose.Schema({
    loteria: [{
        sorteo: {
            type: String
        },
        combinacion1: {
            type: String
        },
        fracciones: [{
            type: String
        }]
    }],
    lotto: [{
        sorteo: {
            type: String
        },
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
        }
    }],
    pozo: [{
        sorteo: {
            type: String
        },
        combinacion1: {
            type: String
        },
        combinacion2: {
            type: String
        },
        combinacion3: {
            type: String
        }
    }],
    total: {
        type: String
    },
    ventaId: {
        type: String
    },
    reservaId: {
        type: String
    },
    exaVentaId: {
        type: String
    },
    exaReservaId: {
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

const Venta = module.exports = mongoose.model("Venta", ventaSchema);
