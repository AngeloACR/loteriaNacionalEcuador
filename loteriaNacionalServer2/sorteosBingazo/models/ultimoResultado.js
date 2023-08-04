const psdResultados = require("../../psdLoteria/resultados");
const psdAuth = require("../../psdLoteria/auth");
const mongoose = require("mongoose");
const db = require("../database").db;

const ultimoResultadoSchema = new mongoose.Schema(
  {
    ultimoResultadoBingazo: {
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
  ref: "SorteoBingazo", // The model to use
  localField: "numeroSorteo", // Find people where `localField`
  foreignField: "sorteo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});

ultimoResultadoSchema.virtual("premioPrincipal", {
  ref: "PremioBingazo", // The model to use
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
        12,
        token
      );
      if (psdUltimosResultados && psdUltimosResultados.length) {
        let ultimoResultado = await this.findOne();
        for (let index = 0; index < psdUltimosResultados.length; index++) {
          const resultado = psdUltimosResultados[index];
          ultimoResultado.numeroSorteo = resultado.sorteo;
          if (resultado.codigoPremio.includes("-1")) {
            ultimoResultado.ultimoResultadoBingazo.combinacion1 =
              resultado.combinacion;
            ultimoResultado.codigoPremioPrincipal = resultado.codigoPremio;
          } /* else if (resultado.codigoPremio.includes("-5")) {
            ultimoResultado.mascota = resultado.combinacion;
            if (resultado.combinacion.length == 1)
              ultimoResultado.mascota = `0${resultado.combinacion}`;
          } */
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
      return await this.findOne().populate("premioPrincipal").lean();
    } catch (error) {
      let response = {
        status: false,
        msg: error.toString().replace("Error: ", ""),
      };
      return response;
    }
  },
};

module.exports = db.model("UltimoResultadoBingazo", ultimoResultadoSchema);
