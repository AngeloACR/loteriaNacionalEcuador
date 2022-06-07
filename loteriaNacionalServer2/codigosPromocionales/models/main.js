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
    asignado: {
      type: Boolean,
      default: false,
      index: true
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
  populate: async function (element) {
    try {
      for (let i = 0; i < 10000000; i++) {
        let codigo = `${i}`;
        codigo = codigo.padStart(7, "0");
        const element = {
          codigo,
        };
        await this.addCodigo(element);
      }
      return "Done";
    } catch (error) {
      console.log(error.toString());
      throw error;
    }
  },
  addCodigo: async function (element) {
    try {
      let newCodigo = await this.create(element);
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
      const query = { asignado: true };
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
  getCode: async function () {
    try {
      let query = { asignado: false };
      let count = await this.count(query);

      // Get a random entry
      var random = Math.floor(Math.random() * count);

      // Again query all users but only fetch one offset by our random #
      let response = await this.findOne(query).skip(random).lean();
      return response.codigo;
    } catch (error) {
      throw error;
    }
  },
  getCodes: async function (ventaId) {
    try {
      let query = { ventaId };
      let response = await this.findOne(query);
      return response;
    } catch (error) {
      throw error;
    }
  },
  updateCode: async function (codigo, ventaId, cedula, correo, telefono) {
    try {
      let query = { codigo };
      let response = await this.findOne(query);
      response.ventaId = ventaId;
      response.cedula = cedula;
      response.correo = correo;
      response.telefono = telefono;
      response.asignado = true;
      let updatedCode = await response.save()
      return updatedCode;
    } catch (error) {
      throw error;
    }
  },
};
codigosPromocionalesSchema.index({ asignado: 1, codigo: 1 }); // schema level

module.exports = db.model("CodigosPromocionales", codigosPromocionalesSchema);
