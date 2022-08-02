const psdResultados = require("../../psdLoteria/resultados");
const psdAuth = require("../../psdLoteria/auth");
const mongoose = require("mongoose");
const db = require("../database").db;

const ultimoResultadoSchema = new mongoose.Schema(
  {
    ultimoResultadoLotto: {
      combinacion1: {
        type: String,
      },
    },
    premiosEspeciales: [
      {
        combinacion: {
          type: String,
        },
        nombre: {
          type: String,
        },
        codigoPremio: {
          type: String,
        },
      },
    ],
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
  ref: "SorteoLotto",
  localField: "numeroSorteo",
  foreignField: "sorteo",
  justOne: true,
});

ultimoResultadoSchema.virtual("premioPrincipal", {
  ref: "PremioLotto",
  localField: "codigoPremioPrincipal",
  foreignField: "codigo",
  justOne: true,
});
ultimoResultadoSchema.virtual("otrosPremios", {
  ref: "PremioLotto",
  localField: "premiosEspeciales.codigoPremio",
  foreignField: "codigo",
  justOne: true,
});

ultimoResultadoSchema.statics = {
  actualizar: async function () {
    try {
      let response = await psdAuth.autenticarUsuario();
      let token = response.token;

      let psdUltimosResultados = await psdResultados.consultarUltimosResultados(
        2,
        token
      );
      if (psdUltimosResultados && psdUltimosResultados.length) {
        let ultimoResultado = await this.findOne();
        ultimoResultado.premiosEspeciales = [];
        for (let index = 0; index < psdUltimosResultados.length; index++) {
          const resultado = psdUltimosResultados[index];

          ultimoResultado.numeroSorteo = resultado.sorteo;
          if (resultado.descripcionPremio.toLowerCase().includes("primera")) {
            ultimoResultado.ultimoResultadoLotto.combinacion1 =
              resultado.combinacion;
            ultimoResultado.codigoPremioPrincipal = resultado.codigoPremio;
          } else {
            ultimoResultado.premiosEspeciales.push({
              nombre: resultado.descripcionPremio,
              combinacion: resultado.combinacion,
              codigoPremio: resultado.codigoPremio,
            });
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

module.exports = db.model("UltimoResultadoLotto", ultimoResultadoSchema);
