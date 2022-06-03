const psdAuth = require("../../psdLoteria/auth");
const mongoose = require("mongoose");
const db = require("../database").db;

const ultimoResultadoSchema = new mongoose.Schema(
  {
    
    ultimoResultadoPozo: {
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
    mascota: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

ultimoResultadoSchema.virtual("sorteo", {
  ref: "SorteoPozo", // The model to use
  localField: "numeroSorteo", // Find people where `localField`
  foreignField: "sorteo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});

ultimoResultadoSchema.virtual("premioPrincipal", {
  ref: "PremioPozo", // The model to use
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
        5,
        token
      );
      if (psdUltimosResultados && psdUltimosResultados.length) {
        let ultimoResultado = this.findOne();
        for (let index = 0; index < psdUltimosResultados.length; index++) {
          const resultado = psdUltimosResultados[index];
          ultimoResultado.numeroSorteo = resultado.sorteo;
          if (resultado.codigoPremio.includes("-1")) {
            ultimoResultado.ultimoResultadoPozo.combinacion2 = resultado.combinacion;
            ultimoResultado.codigoPremioPrincipal = resultado.codigoPremio;
          } else if (resultado.codigoPremio.includes("-6")) {
            ultimoResultado.mascota = resultado.combinacion;
            if (resultado.combinacion.length == 1)
              ultimoResultado.mascota = `0${resultado.combinacion}`;
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
      return await this.findOne().lean()
    } catch (error) {
      let response = {
        status: false,
        msg: error.toString().replace("Error: ", ""),
      };
      return response;
    }
  },
};

module.exports = db.model("UltimoResultadoPozo", ultimoResultadoSchema);
