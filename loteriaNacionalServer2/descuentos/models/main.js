const db = require("../database").db;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DescuentosSchema = new mongoose.Schema(
  {
    isWithinDates: {
      type: Boolean,
    },
    isExpired: {
      type: Boolean,
      default: false,
    },
    activatedByUser: {
      type: Boolean,
      default: true,
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
      type: String,
    },
    endDate: {
      type: String,
    },
    discount: {
      type: Number,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

DescuentosSchema.methods.validateIfActive = function () {
  const currentDate = new Date();
  let initParts = this.initDate.split("-");
  let endParts = this.endDate.split("-");

  const initDate = new Date(`${initParts[2]}-${initParts[1]}-${initParts[0]}`);
  const endDate = new Date(`${endParts[2]}-${endParts[1]}-${endParts[0]}`);

  this.isWithinDates = !(currentDate < initDate || currentDate > endDate);

  this.isExpired = currentDate > endDate;

  return this.save(); // Thi=s returns a Promise
};
DescuentosSchema.methods.changeActive = function () {
  this.activatedByUser = !this.activatedByUser;

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
      let query = { isWithinDates: true, activatedByUser: true };
      let descuentos = await this.find(query).lean();
      return descuentos;
    } catch (e) {
      throw e;
    }
  },
};
module.exports = db.model("Descuento", DescuentosSchema);
