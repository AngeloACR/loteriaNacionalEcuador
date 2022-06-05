const mongoose = require("mongoose");
const db = require("../database").db;

const codigosPromocionalesSchema = new mongoose.Schema(
  {
    codigo: {
      type: String,
    },
    ventaId: {
      type: String,
    },
    cedula: {
      type: String,
    },
    correo: {
      type: String,
    },
    telefono: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    autoIndex: true,
  }
);

codigosPromocionalesSchema.virtual("venta", {
  ref: "Venta", // The model to use
  localField: "ventaId", // Find people where `localField`
  foreignField: "ventaId", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});

codigosPromocionalesSchema.statics = {
  addCodigo: async function (element) {
    try {
      let newCodigo = new this.create(element);
      let response = {
        status: true,
        values: newCodigo,
      };
      return response;
    } catch (error) {
      console.log(error.toString());
      throw error;
    }
  },

  getCodigosCSV: async function () {
    try {
      const query = {};
      let resultados = await this.find(query).lean();
      resultados = resultados.map((resultado) => {
        return `${resultado.codigo},${resultado.codigo},${
          resultado.cedula
        },${resultado.nombre.toUpperCase()},${resultado.correo},${
          resultado.telefono
        },SITIO WEB`;
      });
      let response = {
        status: true,
        values: resultados,
      };
      return response;
    } catch (error) {
      throw error;
    }
  },
  generate: async function () {
    try {
      let response;
      return response;
    } catch (error) {
      throw error;
    }
  },

};

module.exports = db.model("ResultadoLoteria", resultadoLoteriaSchema);
