const Popup = require("../models/popup");
const { adminLogger } = require("../logging");
const config = require("../../environments/test");
const fs = require("fs").promises;
const path = require("path");
const mainController = {
  getPopupLink: async (req, res) => {
    try {
      let type = await Popup.getType();
      let filename = "";
      if (type) {
        filename = await Popup.getImage();
      } else {
        let files = await fs.readdir(config.adminUploadsPath);
        files = files.filter((item) => item != "correo");
        filename = files[Math.floor(Math.random() * files.length)];
      }
      let link = `${config.ventasURL}/admin/assets/${filename}`;
      res.status(200).json(link);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
  savePopupFiles: async (req, res) => {
    try {
      const files = req.files;
      let filename = "";
      Object.keys(files).forEach((key) => {
        filename = files[key].name;
        const filepath = path.join(config.adminUploadsPath, filename);
        files[key].mv(filepath, (err) => {
          if (err) throw err;
        });
      });
      await Popup.updateImage(filename);
      res.status(200).json(files);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
  getPopupStatus: async (req, res) => {
    try {
      let response = await Popup.findOne().lean();
      res.status(200).json(response.status);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
  setPopupStatus: async (req, res) => {
    try {
      let status = req.body.status;
      let response = await Popup.updateStatus(status);
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
  setPopupImage: async (req, res) => {
    try {
      let image = req.body.image;
      let response = await Popup.updateImage(image);
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
  getPopupType: async (req, res) => {
    try {
      let response = await Popup.findOne();
      res.status(200).json(response.type);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
  setPopupType: async (req, res) => {
    try {
      let type = req.body.type;
      let response = await Popup.updateType(type);
      res.status(200).json(response);
    } catch (e) {
      let response = {
        status: "error",
        message: e.message,
        code: e.code,
        handler: e.handler,
      };
      res.status(400).json(response);
    }
  },
};
function getCurrentTimeStamp() {
  let date = new Date(Date.now()).toLocaleString("es-EC", {
    timeZone: "America/Bogota",
  });
  let a = date.split(/\D/);
  let y = a[2];
  let m = a[1].length === 2 ? a[1] : `0${a[1]}`;
  let d = a[0].length === 2 ? a[0] : `0${a[0]}`;
  let n = `${y}-${d}-${m} ${a[4]}:${a[5]}:${a[6]}.000`;
  //let n = `${y}-${m}-${d} ${a[3]}:${a[4]}:${a[5]}.000`;
  return n;
}

module.exports = mainController;
