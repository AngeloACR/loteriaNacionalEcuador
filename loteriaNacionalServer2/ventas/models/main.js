const db = require("../database").db;
const mongoose = require("mongoose");
const { ventasLogger } = require("../logging");

/* CONSIDERAR AGREGAR REFERENCIAS */

const VentaSchema = new mongoose.Schema(
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
        subtotalConDescuento: {
          type: String,
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
        subtotalConDescuento: {
          type: String,
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
        subtotalConDescuento: {
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
        mascota: {
          type: String,
        },
      },
    ],
    pozoRevancha: [
      {
        sorteo: {
          type: String,
        },
        subtotal: {
          type: String,
        },
        subtotalConDescuento: {
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
        mascota: {
          type: String,
        },
      },
    ],
    bingazo: [
      {
        sorteo: {
          type: String,
        },
        subtotal: {
          type: String,
        },
        subtotalConDescuento: {
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
        fruta: {
          type: String,
        },
      },
    ],
    total: {
      type: String,
    },
    totalConDescuento: {
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
    alboranVentaId: {
      type: String,
    },
    alboranCancelacionId: {
      type: String,
    },
    alboranReservaId: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

VentaSchema.statics = {
  addVenta: async function (element) {
    try {
      let newVenta = await this.create(element);
      let response = {
        status: true,
        values: newVenta,
      };
      return response;
    } catch (error) {
      console.log(error.toString());
      let response = {
        status: false,
        msg: error.toString().replace("Error: ", ""),
      };
      return response;
    }
  },
  actualizarStatus: async function (id, status, value) {
    try {
      let venta = (await this.getVentaById(id)).values;
      venta["status"] = status;
      switch (status) {
        case "Reservada":
          venta["alboranReservaId"] = value;
          break;
        case "Procesada":
          venta["ventaId"] = value;

          break;

        case "Cancelada":
          venta["alboranCancelacionId"] = value;

          break;

        default:
          venta["alboranVentaId"] = value;
          break;
      }
      let response = await venta.save();

      /*       logData = {
        data: {
          id,
          status,
          value,
        },
        response,
      };
      ventasLogger.info("actualizarStatus.loteria", logData); */
      return response;
    } catch (e) {
      ventasLogger.error("comprarBoletos.error", {
        errorMessage: e.message,
      });
      throw new Error(e.message);
    }
  },
  getVentasByTipoLoteria: async function (tipoLoteria) {
    try {
      const query = { tipoLoteria: tipoLoteria };
      let ventas = await this.find(query);
      let response = {
        status: true,
        values: ventas,
      };
      return response;
    } catch (error) {
      throw error;
    }
  },

  getVentaById: async function (id) {
    try {
      let query = { _id: id };
      let venta = await this.findOne(query);
      let response = {
        status: true,
        values: venta,
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
  getVentaByVentaId: async function (id, accountId) {
    try {
      let query = { ventaId: id };
      let venta = await this.findOne(query);
      let response;
      if (venta) {
        //if (accountId == venta.accountId) {
        response = {
          status: true,
          values: venta,
        };
        /*} else {
          response = {
            status: false,
          };
        }*/
      } else {
        response = {
          status: false,
        };
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
  getVentaByStatus: async function (status) {
    try {
      let query = { status };
      let ventas = await this.find(query).sort({ date: -1 });
      let response;
      if (ventas && ventas.length) {
        response = {
          status: true,
          values: ventas.map((venta) => {
            let aux = {
              createdAt: ObjectId(venta._id).getTimestamp(),
              total: venta.total,
              exaReservaId: venta.exaReservaId,
              exaVentaId: venta.exaVentaId,
              ventaId: venta.ventaId,
              accountId: venta.accountId,
            };
            return aux;
          }),
        };
      } else {
        response = {
          status: false,
        };
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
  getVentaByExaReservaId: async function (id) {
    try {
      let query = { exaReservaId: id };
      let venta = await this.findOne(query);
      let response;
      if (venta) {
        response = {
          status: true,
          values: {
            createdAt: ObjectId(venta._id).getTimestamp(),
            total: venta.total,
            status: venta.status,
            exaReservaId: venta.exaReservaId,
            exaVentaId: venta.exaVentaId,
            ventaId: venta.ventaId,
            id: venta._id,
          },
        };
      } else {
        response = {
          status: false,
          exaReservaId: id,
        };
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
  updateVentaByExaReservaId: async function (
    id,
    newReservaId,
    newVentaId,
    total
  ) {
    try {
      let query = { exaReservaId: id };
      let venta = await this.findOne(query);
      let response;
      if (venta) {
        venta.exaReservaId = newReservaId;
        venta.exaVentaId = newVentaId;
        venta.total = total;
        venta = await venta.save();
        response = {
          status: true,
          values: venta,
        };
      } else {
        response = {
          status: false,
        };
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
  getVentaByReservaId: async function (id) {
    try {
      let query = { reservaId: id };
      let venta = await this.findOne(query);
      let response = {
        status: true,
        values: venta,
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
};

module.exports = db.model("Venta", VentaSchema);
