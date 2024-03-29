const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const ventaSchema = new mongoose.Schema(
  {
    loteria: [
      {
        sorteo: {
          type: String,
        },
        fecha: {
          type: String,
        },
        combinacion1: {
          type: String,
        },
        subtotal: {
          type: String,
        },
        subtotalConDesc: {
          type: String,
        },
        tieneDescuento: {
          type: Boolean,
        },

        fracciones: [
          {
            type: String,
          },
        ],
      },
    ],
    lotto: [
      {
        sorteo: {
          type: String,
        },
        fecha: {
          type: String,
        },
        subtotal: {
          type: String,
        },
        subtotalConDesc: {
          type: String,
        },
        tieneDescuento: {
          type: Boolean,
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
      },
    ],
    pozo: [
      {
        sorteo: {
          type: String,
        },
        subtotal: {
          type: String,
        },
        fecha: {
          type: String,
        },
        combinacion1: {
          type: String,
        },
        combinacion2: {
          type: String,
        },
        subtotalConDesc: {
          type: String,
        },
        tieneDescuento: {
          type: Boolean,
        },

        mascota: {
          type: String,
        },
      },
    ],
    total: {
      type: String,
    },
    totalConDesc: {
      type: String,
    },
    status: {
      type: String,
    },
    user: {
      type: String,
    },
    accountId: {
      type: String,
    },
    ventaId: {
      type: String,
    },
    reservaId: {
      type: String,
    },
    exaVentaId: {
      type: String,
    },
    exaReservaId: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

/* resultadoSchema.virtual('premio', {
    ref: 'Premio', // The model to use
    localField: 'codigoPremio', // Find people where `localField`
    foreignField: 'codigo', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: true,
}); */

const Venta = (module.exports = mongoose.model("Venta", ventaSchema));
