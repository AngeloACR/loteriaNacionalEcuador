const uploadsServer = require("./uploadsServer");
const config = require("../environments/test");


const uploadsPort = config.uploadsPort;
const uploadsApp = uploadsServer.init(uploadsPort);

uploadsApp.listen(uploadsPort, () => {
  console.log("Server running at: " + uploadsPort);
});
