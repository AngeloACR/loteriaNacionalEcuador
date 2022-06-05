const mongoose = require("mongoose");
const db = require("../database").db;
const psdSorteos = require("../../psdLoteria/sorteos");
const psdAuth = require("../../psdLoteria/auth");

const sorteoSchema = new mongoose.Schema({
  sorteo: {
    type: String,
  },

  precio: {
    type: Number,
  },
  fecha: {
    type: String,
  },
  cantidadDeFracciones: {
    type: Number,
  },
  valorPremioPrincipal: {
    type: Number,
  },
  nombre: {
    type: String,
  },
});

sorteoSchema.statics = {
  deleteSorteo: async function (id) {
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

  addSorteo: async function (element) {
    try {
      let newSorteo = new this(element);
      let sorteo = await newSorteo.save();
      let response = {
        status: true,
        values: sorteo,
      };
      return response;
    } catch (error) {
      console.log(error.toString());
      throw error;
    }
  },

  getSorteos: async function () {
    try {
      let sorteos = await this.find();
      let response = {
        status: true,
        values: sorteos,
      };
      return response;
    } catch (error) {
      throw error;
    }
  },

  getSorteoByNumber: async function (numeroSorteo) {
    try {
      let query = { sorteo: numeroSorteo };
      let sorteo = await this.findOne(query);
      let response;
      if (sorteo) {
        response = {
          status: true,
          values: sorteo,
        };
      } else {
        response = {
          status: false,
        };
      }
      return response;
    } catch (error) {
      throw error;
    }
  },

  getSorteoById: async function (id) {
    try {
      let query = { _id: id };
      let sorteo = await this.findOne(query);
      let response = {
        status: true,
        values: sorteo,
      };
      return response;
    } catch (error) {
      throw error;
    }
  },

  actualizarSorteosJugados: async function () {
    try {
      let response = await psdAuth.autenticarUsuario();
      let token = response.token;

      let sorteos = await psdSorteos.consultarSorteosJugados(
        14,
        token
      );

      let aux = await this.setSorteosJugados(
        sorteos
      );
      response = {
        status: true,
        values: aux,
      };
      return response;
    } catch (error) {
      let response = {
        status: false,
        msg: error.toString().replace("Error: ", ""),
      };
      return response;
    }
  },
  setSorteosJugados: async function (sorteos) {
    try {
      let response = [];
      let length = sorteos.length;
      for (let i = 0; i < length; i++) {
        const sorteo = sorteos[i];
        let auxSorteo = await this.getSorteoByNumber(
          parseInt(sorteo.SortId)
        );
        if (!auxSorteo.status) {
          let data = {
            sorteo: sorteo.SortId,
            nombre: sorteo.SortNomb,
            precio: sorteo.PVP,
            fecha: sorteo.FSort,
            cantidadDeFracciones: sorteo.CFrac,
            valorPremioPrincipal: sorteo.VPremio,
          };
          let newSorteo = await this.addSorteo(data);
          response.push(newSorteo);
        }
      }
      return response;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = db.model("SorteoLaMillonaria", sorteoSchema);
