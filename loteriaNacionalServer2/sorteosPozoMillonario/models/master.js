const mongoose = require("mongoose");
const db = require("../database").db;

const masterPozoSchema = new mongoose.Schema(
  {
    ganadores: {
      status: { type: Boolean, required: true, default: false },
      nombre: { type: String },
      cantidad: { type: Number },
      tamaño: { type: Number },
      recibido: {
        type: Date,
        default: Date.now,
      },
    },
    premios: {
      status: { type: Boolean, required: true, default: false },
      nombre: { type: String },
      cantidad: { type: Number },
      tamaño: { type: Number },
      recibido: {
        type: Date,
        default: Date.now,
      },
    },
    resultados: {
      status: { type: Boolean, required: true, default: false },
      nombre: { type: String },
      cantidad: { type: Number },
      tamaño: { type: Number },
      recibido: {
        type: Date,
        default: Date.now,
      },
    },
    numeroSorteo: {
      type: String,
    },
    actualizado: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    autoIndex: true,
  }
);

masterPozoSchema.virtual("sorteo", {
  ref: "SorteoPozo", // The model to use
  localField: "numeroSorteo", // Find people where `localField`
  foreignField: "sorteo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});
module.exports = db.model("MasterPozo", masterPozoSchema);
