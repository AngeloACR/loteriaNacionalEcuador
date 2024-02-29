const db = require("../database").db;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DescuentosSchema = new mongoose.Schema(
  {
    isActive: {
      type: Boolean,
    },
    juegos: [
      {
        type: String,
      },
    ],
    sorteos: [
      {
        type: String,
      },
    ],
    minimum: {
      type: Number,
    },
    maximum: {
      type: Number,
    },
    initDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    discount: {
      type: Number,
    },
    discountType: {
      type: Boolean,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

DescuentosSchema.methods.validateIfActive = function () {
  const currentDate = new Date();
  const isActiveNow =
    currentDate >= this.initDate && currentDate <= this.endDate;

  // Update the isActive field based on the current date
  this.isActive = isActiveNow;

  // Save the document with the updated isActive field
  return this.save(); // Thi=s returns a Promise
};
DescuentosSchema.statics = {
  crear: async function (data) {
    try {
      let descuento = await this.create(data);
      return descuento;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  getAll: async function () {
    try {
      let query = {};
      let descuentos = await this.find(query);
      return descuentos;
    } catch (e) {
      throw e;
    }
  },
  getActives: async function () {
    try {
      let query = { isActive: true };
      let descuentos = await this.find(query).lean();
      return descuentos;
    } catch (e) {
      throw e;
    }
  },
};
module.exports = db.model("Descuento", DescuentosSchema);
