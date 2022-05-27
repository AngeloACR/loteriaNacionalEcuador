const mongoose = require("mongoose");
const db = require("../database").db;

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
    autoIndex: true,
  }
);

resultadoMillonariaSchema.virtual("premio", {
  ref: "PremioLaMillonaria", // The model to use
  localField: "codigoPremio", // Find people where `localField`
  foreignField: "codigo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});
resultadoMillonariaSchema.virtual("sorteo", {
  ref: "SorteoLaMillonaria", // The model to use
  localField: "numeroSorteo", // Find people where `localField`
  foreignField: "sorteo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});

resultadoMillonariaSchema.statics = {
  deleteResultado: async function (id) {
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
  deleteResultadosBySorteo: async function (sorteo) {
    try {
      let query = { numeroSorteo: `${sorteo}` };
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

  getResultadosBySorteo: async function (sorteo) {
    try {
      const query = { numeroSorteo: `${sorteo}` };
      let resultados = await this.find(query);
      let response = {
        status: true,
        values: resultados,
      };
      return response;
    } catch (error) {
      throw error;
    }
  },
  addResultado: async function (element) {
    try {
      let newResultado = new this.create(element);
      let response = {
        status: true,
        values: newResultado,
      };
      return response;
    } catch (error) {
      console.log(error.toString());
      throw error;
    }
  },

  getResultados: async function () {
    try {
      const query = {};
      let resultados = await this.find(query);
      let response = {
        status: true,
        values: resultados,
      };
      return response;
    } catch (error) {
      throw error;
    }
  },

  getResultadoGanador: async function (sorteo, combinacion) {
    try {
      let sorteoAux = `${sorteo}`;
      let combinacionAux = `${combinacion.principal}`;
      let serieAux = `${combinacion.serie}`;
      let query = {
        numeroSorteo: sorteoAux,
        combinacion1: combinacionAux,
        combinacion2: serieAux,
      };
      let response;
      let resultado = await this.find(query).lean().select('combinacion1 combinacion2 numeroSorteo codigoPremio');

      if (resultado && resultado.length != 0) {
        response = {
          status: true,
          values: resultado,
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

  getResultadosBySorteo: async function (sorteo) {
    try {
      let query = { numeroSorteo: `${sorteo}` };
      let response;

      let resultados = await this.find(query).lean();

      if (resultados && resultados.length != 0) {
        response = {
          status: true,
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
  getResultadoById: async function (id) {
    try {
      let query = { _id: id };
      let resultado = await this.findOne(query);
      let response = {
        status: true,
        values: resultado,
      };
      return response;
    } catch (error) {
      throw error;
    }
  },

  getResultadoByCodigo: async function (sorteo, codigo) {
    try {
      let query = { numeroSorteo: sorteo, codigo: codigo };
      let resultado = await this.findOne(query).lean();
      let response;
      if (resultado && resultado.length != 0) {
        response = {
          status: true,
          values: resultado,
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
};

resultadoMillonariaSchema.index({
  numeroSorteo: 1,
  combinacion1: 1,
  combinacion2: 1,
}); // schema level

module.exports = db.model("ResultadoMillonaria", resultadoMillonariaSchema);