const mongoose = require("mongoose");
const db = require("../database").db;

const ultimoResultadoSchema = new mongoose.Schema(
  {
    ultimoResultadoLotto: {
      combinacion1: {
        type: String,
      },
    },
    resultadoLottoPlus: {
      combinacion2: {
        type: String,
      },
    },
    resultadoNosVemosJefe: {
      combinacion4: {
        type: String,
      },
    },
    resultadoAntojito: {
      combinacion5: {
        type: String,
      },
    },
    resultadosLottito: [
      {
        combinacion3: {
          type: String,
        },
      },
    ],
    numeroSorteo: {
      type: String,
    },
    indexLottito: {
      type: Number,
    },
    codigoPremioPrincipal: {
      type: String,
    },
    codigoPremioLottoPlus: {
      type: String,
    },
    codigoPremioNosVemosJefe: {
      type: String,
    },
    codigoPremioAntojito: {
      type: String,
    },
    codigoPremioLottito: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

ultimoResultadoSchema.virtual("sorteo", {
  ref: "SorteoLotto", // The model to use
  localField: "numeroSorteo", // Find people where `localField`
  foreignField: "sorteo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});

ultimoResultadoSchema.virtual("premioPrincipal", {
  ref: "PremioLotto", // The model to use
  localField: "codigoPremioPrincipal", // Find people where `localField`
  foreignField: "codigo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});
ultimoResultadoSchema.virtual("premioNosVemosJefe", {
  ref: "PremioLotto", // The model to use
  localField: "codigoPremioNosVemosJefe", // Find people where `localField`
  foreignField: "codigo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});
ultimoResultadoSchema.virtual("premioAntojito", {
  ref: "PremioLotto", // The model to use
  localField: "codigoPremioAntojito", // Find people where `localField`
  foreignField: "codigo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});
ultimoResultadoSchema.virtual("premioLottoPlus", {
  ref: "PremioLotto", // The model to use
  localField: "codigoPremioLottoPlus", // Find people where `localField`
  foreignField: "codigo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});
ultimoResultadoSchema.virtual("premioLottito", {
  ref: "PremioLotto", // The model to use
  localField: "codigoPremioLottito", // Find people where `localField`
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

          ultimoResultado.numeroSorteo = resultado.sorteo;
          if (resultado.codigoPremio.includes("-1")) {
            ultimoResultado.ultimoResultadoLotto.combinacion1 =
              resultado.combinacion;
            ultimoResultado.codigoPremioPrincipal = resultado.codigoPremio;
          } else if (resultado.codigoPremio.includes("-23")) {
            ultimoResultado.resultadoLottoPlus.combinacion2 =
              resultado.combinacion;
            ultimoResultado.codigoPremioLottoPlus = resultado.codigoPremio;
          } else if (resultado.codigoPremio.includes("-24")) {
            ultimoResultado.resultadosLottito.push({
              combinacion3: resultado.combinacion,
            });
            ultimoResultado.codigoPremioLottito = resultado.codigoPremio;
          } else if (resultado.codigoPremio.includes("-25")) {
            ultimoResultado.resultadoNosVemosJefe.combinacion4 =
              resultado.combinacion;
            ultimoResultado.codigoPremioNosVemosJefe = resultado.codigoPremio;
          } else if (resultado.codigoPremio.includes("-26")) {
            ultimoResultado.resultadoAntojito.combinacion5 =
              resultado.combinacion;
            ultimoResultado.codigoPremioAntojito = resultado.codigoPremio;
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
