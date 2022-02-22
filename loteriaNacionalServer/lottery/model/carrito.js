const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const carritoSchema = new mongoose.Schema({
    loteria: {
        type: Schema.Types.Mixed
    },
    lotto: {
        type: Schema.Types.Mixed
    },
    pozo: {
        type: Schema.Types.Mixed
    },
    millonaria: {
        type: Schema.Types.Mixed
    },
    carrito: [{
        type: Schema.Types.Mixed
    }],
    total: {
        type: String
    },
    reservaId: {
        type: String
    },
    user: {
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

const Carrito = module.exports = mongoose.model("Carrito", carritoSchema);
