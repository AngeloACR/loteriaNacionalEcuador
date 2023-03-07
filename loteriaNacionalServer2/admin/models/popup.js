const mongoose = require("mongoose");
const db = require("../database").db;

const popupSchema = new mongoose.Schema(
  {
    status: {
      type: Boolean,
    },
    type: {
      type: Boolean,
    },
    image: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    autoIndex: true,
  }
);

popupSchema.statics = {
  getStatus: async function () {
    try {
      let aux = await this.findOne();
      return aux.status;
    } catch (error) {
      throw error;
    }
  },
  getType: async function () {
    try {
      let aux = await this.findOne();
      return aux.type;
    } catch (error) {
      throw error;
    }
  },
  getImage: async function (type) {
    try {
      let aux = await this.findOne();
      return aux.image;
    } catch (error) {
      throw error;
    }
  },

  updateStatus: async function (status) {
    try {
      let query = { status };

      let aux = await this.findOne();

      if (!aux) return await this.create(query);
      aux.status = status;
      let updatedConfig = await aux.save();

      return updatedConfig;
    } catch (error) {
      throw error;
    }
  },
  updateImage: async function (image) {
    try {
      let query = { image };

      let aux = await this.findOne();

      if (!aux) return await this.create(query);
      aux.image = image;
      let updatedConfig = await aux.save();

      return updatedConfig;
    } catch (error) {
      throw error;
    }
  },
  updateType: async function (type) {
    try {
      let query = { type };

      let aux = await this.findOne();

      if (!aux) return await this.create(query);
      aux.type = type;
      let updatedConfig = await aux.save();

      return updatedConfig;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = db.model("PopupConfig", popupSchema);
