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

    ultimoResultadoLoteria: {
        type: Schema.Types.ObjectId,
        ref: 'ResultadoLoteria',
    },

    ultimoResultadoLotto: {
        type: Schema.Types.ObjectId,
        ref: 'ResultadoLotto',
    },

    ultimoResultadoPozo: {
        type: Schema.Types.ObjectId,
        ref: 'ResultadoPozo',
    },
    resultadoLottoPlus: {
        type: Schema.Types.ObjectId,
        ref: 'ResultadoLotto',
    },
    resultadoNosVemosJefe: {
        type: Schema.Types.ObjectId,
        ref: 'ResultadoLotto',
    },
    resultadoAntojito: {
        type: Schema.Types.ObjectId,
        ref: 'ResultadoLotto',
    },
    resultadosLottito: [{
        type: Schema.Types.ObjectId,
        ref: 'ResultadoLotto',
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
    mascota: {
        type: String
    },
    codigoPremioLottoPlus: {
        type: String
    },
    codigoPremioNosVemosJefe: {
        type: String
    },
    codigoPremioAntojito: {
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
ultimoResultadoSchema.virtual('premioNosVemosJefe', {
    ref: 'Premio', // The model to use
    localField: 'codigoPremioNosVemosJefe', // Find people where `localField`
    foreignField: 'codigo', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: true,
});
ultimoResultadoSchema.virtual('premioAntojito', {
    ref: 'Premio', // The model to use
    localField: 'codigoPremioAntojito', // Find people where `localField`
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
