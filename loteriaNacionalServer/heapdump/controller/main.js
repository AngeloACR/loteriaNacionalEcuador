const heapdump = require("heapdump");
const { heapLogger } = require("../../config/logging");

const HeapdumpController = {
  print: async (req, res) => {
    try {
      heapdump.writeSnapshot((err, filename) => {
        let response = filename;
        console.log("Heap dump written to", filename);
        let logData = {
          filename,
        };
        heapLogger.info("helper.exalogicRequest", logData);
        res.status(200).json(response);
      });
    } catch (e) {
      let response = {
        status: "error",
        errorMessage: e.message,
      };
      res.status(400).json(response);
    }
  },
};

module.exports = HeapdumpController;
