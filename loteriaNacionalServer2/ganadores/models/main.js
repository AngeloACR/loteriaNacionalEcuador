const mongoose = require("mongoose");
const db = require("../database").db;

const GanadoresWebSchema = new mongoose.Schema(
  {
    personaId: {
      type: String,
    },
    fechaCaducidad: {
      type: String,
    },
    fraccion: {
      type: String,
    },
    ordenDePagoId: {
      type: String,
    },
    boletoId: {
      type: String,
    },
    descripcionPremio: {
      type: String,
    },
    valorPremio: {
      type: String,
    },
    valorPremioDescuento: {
      type: String,
    },
    tipoPremio: {
      type: String,
    },
    requiereTestimonio: {
      type: String,
    },
    ventaId: {
      type: String,
    },
    acreditado: {
      type: Boolean,
    },
    tipoLoteria: {
      type: Number,
    },
    combinacion1: {
      type: String,
    },
    combinacion2: {
      type: String,
    },
    combinacion3: {
      type: String,
    },
    combinacion4: {
      type: String,
    },
    combinacion5: {
      type: String,
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
  }
);

GanadoresWebSchema.virtual("premio", {
  ref: "Premio", // The model to use
  localField: "codigoPremio", // Find people where `localField`
  foreignField: "codigo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});
GanadoresWebSchema.virtual("venta", {
  ref: "Venta", // The model to use
  localField: "ventaId", // Find people where `localField`
  foreignField: "ventaId", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});
GanadoresWebSchema.virtual("sorteo", {
  ref: "Sorteo", // The model to use
  localField: "numeroSorteo", // Find people where `localField`
  foreignField: "sorteo", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});

GanadoresWebSchema.statics = {
  crearGanador: async function (data)  {
    try {
      let ganador = await this.create(data);
      return ganador;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  getGanador: async function (ventaId) {
    try {
      let query = { ventaId };
      let ganador = await this.find(query);
      let response;
      if (ganador && ganador.length) {
        response = {
          status: true,
          values: ganador,
        };
      } else {
        response = {
          status: false,
        };
      }
      return response;
    } catch (e) {
      throw e;
    }
  },
  getGanadores: async function (data) {
    try {
      let response = [];
      for (let index = 0; index < data.length; index++) {
        const element = data[index];

        let ventaId = element.ventaId;
        let query = { ventaId: ventaId };
        let ganadorData = await this.find(query);
        let ganadorFlag = ganadorData && ganadorData.length;
        let info = {
          isGanador: ganadorFlag,
          detalles: ganadorData,
          ventaId,
          reservaId: element.reservaId,
        };
        response.push(info);
      }
      return response;
    } catch (e) {
      throw e;
    }
  },
};
module.exports = db.model("GanadoresWeb", GanadoresWebSchema);
