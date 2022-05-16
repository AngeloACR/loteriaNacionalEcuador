const mongoose = require("mongoose");
const db = require("../database").db;

const ultimoResultadoSchema = new mongoose.Schema(
  {
    tipoLoteria: {
      type: Number,
    },

    ultimoResultado: {
      combinacion2: {
        type: String,
      },
    },
    numeroSorteo: {
      type: String,
    },
    codigoPremioPrincipal: {
      type: String,
    },
    mascota: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

ultimoResultadoSchema.virtual("sorteo", {
  ref: "SorteoPozo", // The model to use
  localField: "numeroSorteo", // Find people where `localField`
  foreignField: "sorteo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});

ultimoResultadoSchema.virtual("premioPrincipal", {
  ref: "PremioPozo", // The model to use
  localField: "codigoPremioPrincipal", // Find people where `localField`
  foreignField: "codigo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});

module.exports = db.model("UltimoResultadoPozo", ultimoResultadoSchema);
