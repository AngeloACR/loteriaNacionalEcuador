const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const GanadoresWebSchema = new mongoose.Schema(
  {
    personaId: {
      type: String,
    },
    fechaCaducidad: {
      type: String,
    },
    fraccion: {
      type: String,
    },
    ordenDePagoId: {
      type: String,
    },
    boletoId: {
      type: String,
    },
    descripcionPremio: {
      type: String,
    },
    valorPremio: {
      type: String,
    },
    valorPremioDescuento: {
      type: String,
    },
    tipoPremio: {
      type: String,
    },
    requiereTestimonio: {
      type: String,
    },
    ventaId: {
      type: String,
    },
    acreditado: {
      type: Boolean,
    },
    tipoLoteria: {
      type: Number,
    },
    combinacion1: {
      type: String,
    },
    combinacion2: {
      type: String,
    },
    combinacion3: {
      type: String,
    },
    combinacion4: {
      type: String,
    },
    combinacion5: {
      type: String,
    },
    codigoPremio: {
      type: String,
    },
    numeroSorteo: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

GanadoresWebSchema.virtual("premio", {
  ref: "Premio", // The model to use
  localField: "codigoPremio", // Find people where `localField`
  foreignField: "codigo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});
GanadoresWebSchema.virtual("venta", {
  ref: "Venta", // The model to use
  localField: "ventaId", // Find people where `localField`
  foreignField: "ventaId", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});
GanadoresWebSchema.virtual("sorteo", {
  ref: "Sorteo", // The model to use
  localField: "numeroSorteo", // Find people where `localField`
  foreignField: "sorteo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});

const GanadoresWeb = (module.exports = mongoose.model(
  "GanadoresWeb",
  GanadoresWebSchema
));
