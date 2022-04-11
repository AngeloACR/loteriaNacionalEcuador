const Reserva = require("../model/reserva");
var ObjectId = require("mongodb").ObjectID;

const reservasController = {
  deleteReserva: async function (id) {
    try {
      let response = await this.getReservaById(id);
      let reserva = response.values;
      let deleteRes = await reserva.remove();
      response = {
        status: true,
        values: deleteRes,
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

  addReserva: async function (element) {
    try {
      let newReserva = new Reserva(element);
      let reserva = await newReserva.save();
      let response = {
        status: true,
        values: reserva,
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

  updateReserva: async function (numeroReserva, data) {
    try {
      let reservaResponse = await this.getReservaByNumber(numeroReserva);
      let reserva = reservaResponse.values;
      reserva = await reserva.save();
      response = {
        status: true,
        values: reserva,
      };
      return response;
    } catch (error) {
      let response = {
        status: false,
        msg: error.toString(),
      };
      return response;
    }
  },

  getReservas: async function (tipoLoteria) {
    try {
      const query = { tipoLoteria: tipoLoteria };
      let reservas = await Reserva.find(query);
      let response = {
        status: true,
        values: reservas,
      };
      return response;
    } catch (error) {
      throw error;
    }
  },

  getCompraById: async function (id) {
    try {
      let query = { _id: id };
      let reserva = await Reserva.findOne(query);
      let response = {
        status: true,
        values: reserva,
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
  getCompraByVentaId: async function (id, accountId) {
    try {
      let query = { ventaId: id };
      let reserva = await Reserva.findOne(query);
      let response;
      if (reserva) {
        if (accountId == reserva.accountId) {
          response = {
            status: true,
            values: reserva,
          };
        } else {
          response = {
            status: false,
          };
        }
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
  getCompraByStatus: async function (status) {
    try {
      let query = { status };
      let ventas = await Reserva.find(query).sort({ date: -1 });
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
  getComprasProblema2: async function (user) {
    try {
      let query = { user };
      let ventas = await Reserva.find(query).sort({ date: -1 }).lean();
      let response;
      if (ventas && ventas.length) {
        response = {
          status: true,
          values: ventas
            /*             .filter((venta) => {
              return venta.lotto.combinacion1 == sorteo;
            }) */
            .map((venta) => {
              let aux = {
                createdAt: ObjectId(venta._id).getTimestamp(),
                total: venta.total,
                exaReservaId: venta.exaReservaId,
                exaVentaId: venta.exaVentaId,
                ventaId: venta.ventaId,
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
  getCompraByExaReservaId: async function (id) {
    try {
      let query = { exaReservaId: id };
      let venta = await Reserva.findOne(query);
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
            id: venta._id
          },
        };
      } else {
        response = {
          status: false,
          exaReservaId: id
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
  updateCompraByExaReservaId: async function (
    id,
    newReservaId,
    newVentaId,
    total
  ) {
    try {
      let query = { exaReservaId: id };
      let reserva = await Reserva.findOne(query);
      let response;
      if (reserva) {
        reserva.exaReservaId = newReservaId;
        reserva.exaVentaId = newVentaId;
        reserva.total = total;
        reserva = await reserva.save();
        response = {
          status: true,
          values: reserva,
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
  getReservaByLotteryId: async function (id) {
    try {
      let query = { reservaId: id };
      let reserva = await Reserva.findOne(query);
      let response = {
        status: true,
        values: reserva,
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
module.exports = reservasController;
