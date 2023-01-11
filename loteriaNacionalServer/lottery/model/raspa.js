const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const raspaSchema = new mongoose.Schema({
    combinacion: {
        type: String
    },
    nombre: {
        type: String
    },
    telefono: {
        type: String
    },
    email: {
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

const Raspa = module.exports = mongoose.model("Raspa", raspaSchema);
