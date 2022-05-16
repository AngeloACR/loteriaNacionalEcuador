const mongoose = require("mongoose");
const db = require("../database").db;

const ultimoResultadoSchema = new mongoose.Schema(
  {
    tipoLoteria: {
      type: Number,
    },
    ultimoResultadoLotto: {
      combinacion1: {
        type: String,
      },
    },
    resultadoLottoPlus: {
      combinacion2: {
        type: String,
      },
    },
    resultadoNosVemosJefe: {
      combinacion4: {
        type: String,
      },
    },
    resultadoAntojito: {
      combinacion5: {
        type: String,
      },
    },
    resultadosLottito: [
      {
        combinacion3: {
          type: String,
        },
      },
    ],
    numeroSorteo: {
      type: String,
    },
    indexLottito: {
      type: Number,
    },
    codigoPremioPrincipal: {
      type: String,
    },
    codigoPremioLottoPlus: {
      type: String,
    },
    codigoPremioNosVemosJefe: {
      type: String,
    },
    codigoPremioAntojito: {
      type: String,
    },
    codigoPremioLottito: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

ultimoResultadoSchema.virtual("sorteo", {
  ref: "SorteoLotto", // The model to use
  localField: "numeroSorteo", // Find people where `localField`
  foreignField: "sorteo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});

ultimoResultadoSchema.virtual("premioPrincipal", {
  ref: "PremioLotto", // The model to use
  localField: "codigoPremioPrincipal", // Find people where `localField`
  foreignField: "codigo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});
ultimoResultadoSchema.virtual("premioNosVemosJefe", {
  ref: "PremioLotto", // The model to use
  localField: "codigoPremioNosVemosJefe", // Find people where `localField`
  foreignField: "codigo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});
ultimoResultadoSchema.virtual("premioAntojito", {
  ref: "PremioLotto", // The model to use
  localField: "codigoPremioAntojito", // Find people where `localField`
  foreignField: "codigo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});
ultimoResultadoSchema.virtual("premioLottoPlus", {
  ref: "PremioLotto", // The model to use
  localField: "codigoPremioLottoPlus", // Find people where `localField`
  foreignField: "codigo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});
ultimoResultadoSchema.virtual("premioLottito", {
  ref: "PremioLotto", // The model to use
  localField: "codigoPremioLottito", // Find people where `localField`
  foreignField: "codigo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});

module.exports = db.model("UltimoResultadoLotto", ultimoResultadoSchema);
