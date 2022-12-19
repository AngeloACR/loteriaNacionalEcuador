const mongoose = require("mongoose");
const db = require("../database").db;

const premioSchema = new mongoose.Schema(
  {
    numeroSorteo: {
      type: String,
    },
    codigo: {
      type: String,
    },
    nombre: {
      type: String,
    },
    tipoPremio: {
      type: String,
    },
    primeraSuerte: {
      type: Number,
    },
    valorPremio: {
      type: Number,
    },
    valorPremioConDescuento: {
      type: Number,
    },
    valorFraccion: {
      type: Number,
    },
    valorFraccionConDescuento: {
      type: Number,
    },
    descripcionDescuento: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

premioSchema.virtual("sorteo", {
  ref: "SorteoPozo", // The model to use
  localField: "numeroSorteo", // Find people where `localField`
  foreignField: "sorteo", // is equal to `foreignField`
  justOne: true,
});

premioSchema.statics = {
  deletePremio: async function (id) {
    try {
      let query = { _id: id };
      let deleteRes = await this.remove(query);
      response = {
        status: true,
        values: deleteRes,
      };
      return response;
    } catch (error) {
      throw error;
    }
  },
  deletePremiosBySorteo: async function (sorteo) {
    try {
      const query = { numeroSorteo: `${sorteo}` };
      let deleteRes = await this.remove(query);

      let response = {
        status: true,
        values: deleteRes,
      };
      return response;
    } catch (error) {
      throw error;
    }
  },

  getPremiosBySorteo: async function (sorteo) {
    try {
      sorteo = `${sorteo}`;
      const query = { numeroSorteo: sorteo };
      let premios = await this.find(query);
      let response = {
        status: true,
        values: premios,
      };
      return response;
    } catch (error) {
      throw error;
    }
  },

  addPremio: async function (element) {
    try {
      let newPremio = new this(element);
      let premio = await newPremio.save();
      let response = {
        status: true,
        values: premio,
      };
      return response;
    } catch (error) {
      console.log(error.toString());
      throw error;
    }
  },

  getPremios: async function () {
    try {
      const query = {};
      let premios = await this.find(query);
      let response = {
        status: true,
        values: premios,
      };
      return response;
    } catch (error) {
      throw error;
    }
  },

  getPremioByCodigo: async function (codigo) {
    try {
      let query = { codigo: codigo };
      let premio = await this.findOne(query).lean();
      let response = {
        status: true,
        values: premio,
      };
      return response;
    } catch (error) {
      throw error;
    }
  },

  getPremioById: async function (id) {
    try {
      let query = { _id: id };
      let premio = await this.findOne(query);
      let response = {
        status: true,
        values: premio,
      };
      return response;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = db.model("PremioPozoRevancha", premioSchema);
