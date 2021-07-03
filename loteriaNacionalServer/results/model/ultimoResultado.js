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
    resultadoLottoPlus: {
        type: Schema.Types.ObjectId,
        ref: 'Resultado',
    },
    resultadosLottito: [{
        type: Schema.Types.ObjectId,
        ref: 'Resultado',
    }],
    numeroSorteo: {
        type: String
    },
    indexLottito: {
        type: Number
    },
    codigoPremioPrincipal: {
        type: String
    },
    codigoPremioLottoPlus: {
        type: String
    },
    codigoPremioLottito: {
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



ultimoResultadoSchema.virtual('premioPrincipal', {
    ref: 'Premio', // The model to use
    localField: 'codigoPremioPrincipal', // Find people where `localField`
    foreignField: 'codigo', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: true,
});
ultimoResultadoSchema.virtual('premioLottoPlus', {
    ref: 'Premio', // The model to use
    localField: 'codigoPremioLottoPlus', // Find people where `localField`
    foreignField: 'codigo', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: true,
});
ultimoResultadoSchema.virtual('premioLottito', {
    ref: 'Premio', // The model to use
    localField: 'codigoPremioLottito', // Find people where `localField`
    foreignField: 'codigo', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: true,
});

const UltimoResultado = module.exports = mongoose.model("UltimoResultado", ultimoResultadoSchema);
