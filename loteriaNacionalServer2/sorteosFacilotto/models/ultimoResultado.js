const psdResultados = require("../../psdLoteria/resultados");
const psdAuth = require("../../psdLoteria/auth");
const mongoose = require("mongoose");
const db = require("../database").db;

const ultimoResultadoSchema = new mongoose.Schema(
  {
    ultimoResultadoFacilotto: {
      combinacion1: {
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
  ref: "SorteoFacilotto",
  localField: "numeroSorteo",
  foreignField: "sorteo",
  justOne: true,
});

ultimoResultadoSchema.virtual("premioPrincipal", {
  ref: "PremioFacilotto",
  localField: "codigoPremioPrincipal",
  foreignField: "codigo",
  justOne: true,
});

ultimoResultadoSchema.statics = {
  actualizar: async function () {
    try {
      let response = await psdAuth.autenticarUsuario();
      let token = response.token;

      let psdUltimosResultados = await psdResultados.consultarUltimosResultados(
        18,
        token
      );
      if (psdUltimosResultados && psdUltimosResultados.length) {
        let ultimoResultado = await this.findOne();
        for (let index = 0; index < psdUltimosResultados.length; index++) {
          const resultado = psdUltimosResultados[index];

          ultimoResultado.numeroSorteo = resultado.sorteo;
          if (resultado.descripcionPremio.toLowerCase().includes("primera")) {
            ultimoResultado.ultimoResultadoFacilotto.combinacion1 =
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
      return await this.findOne().populate('premioPrincipal').lean();
    } catch (error) {
      let response = {
        status: false,
        msg: error.toString().replace("Error: ", ""),
      };
      return response;
    }
  },
};

module.exports = db.model("UltimoResultadoFacilotto", ultimoResultadoSchema);
