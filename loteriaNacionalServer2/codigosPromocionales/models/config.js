const mongoose = require("mongoose");
const db = require("../database").db;

const configSchema = new mongoose.Schema(
  {
    showPromo: {
      type: Boolean,
    },
    finaliza: {
      type: Date,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    autoIndex: true,
  }
);

configSchema.statics = {
  updateStatus: async function (status) {
    try {
      let query = {};

      let aux = await this.findOne();

      if (!aux) return await this.create({ showPromo: status });
      aux.showPromo = status;
      let updatedConfig = await aux.save();

      return updatedConfig;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = db.model("CodigosPromocionalesConfig", configSchema);
