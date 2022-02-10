const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const resultadoMillonariaSchema = new mongoose.Schema(
  {
    combinacion1: {
      type: String,
    },
    combinacion2: {
      type: String,
    },
    codigo: {
      type: Number,
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

resultadoMillonariaSchema.virtual("premio", {
  ref: "Premio", // The model to use
  localField: "codigoPremio", // Find people where `localField`
  foreignField: "codigo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});
resultadoMillonariaSchema.virtual("sorteo", {
  ref: "Sorteo", // The model to use
  localField: "numeroSorteo", // Find people where `localField`
  foreignField: "sorteo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});

const ResultadoMillonaria = (module.exports = mongoose.model(
  "ResultadoMillonaria",
  resultadoMillonariaSchema
));
