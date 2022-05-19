const mongoose = require("mongoose");
const db = require("../database").db;

const ultimoResultadoSchema = new mongoose.Schema(
  {
    ultimoResultadoMillonaria: {
      combinacion1: {
        type: String,
      },
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
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

ultimoResultadoSchema.virtual("sorteo", {
  ref: "SorteoLaMillonaria", // The model to use
  localField: "numeroSorteo", // Find people where `localField`
  foreignField: "sorteo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});

ultimoResultadoSchema.virtual("premioPrincipal", {
  ref: "PremioLaMillonaria", // The model to use
  localField: "codigoPremioPrincipal", // Find people where `localField`
  foreignField: "codigo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});

ultimoResultadoSchema.statics = {
  actualizar: async function () {
    try {
      let response = await psdAuth.autenticarUsuario();
      let token = response.token;

      let psdUltimosResultados = await psdResultados.consultarUltimosResultados(
        1,
        token
      );
      if (psdUltimosResultados && psdUltimosResultados.length) {
        let ultimoResultado = this.findOne();
        for (let index = 0; index < psdUltimosResultados.length; index++) {
          const resultado = psdUltimosResultados[index];
          if (resultado.codigoPremio.includes("-1")) {
            ultimoResultado.ultimoResultadoMillonaria.combinacion1 =
              resultado.combinacion;
            ultimoResultado.codigoPremioPrincipal = resultado.codigoPremio;
            ultimoResultado.ultimoResultadoMillonaria.combinacion2 =
              resultado.serie;
            ultimoResultado.numeroSorteo = resultado.sorteo;
          }
        }

        response = await ultimoResultado.save();
      }
      return response;
    } catch (error) {
      let response = {
        status: false,
        msg: error.toString().replace("Error: ", ""),
      };
      return response;
    }
  },
  get: async function () {
    try {
      return await this.findOne().lean();
    } catch (error) {
      let response = {
        status: false,
        msg: error.toString().replace("Error: ", ""),
      };
      return response;
    }
  },
};

module.exports = db.model("UltimoResultadoMillonaria", ultimoResultadoSchema);
