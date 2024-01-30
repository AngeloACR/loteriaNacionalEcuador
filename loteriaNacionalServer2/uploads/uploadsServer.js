const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const app = express();
const config = require("../environments/production");
const routes = require("./routes/main");
var path = require("path");
module.exports.init = function (port) {
  app.set("port", port);

  // Middlewares initialization

  app.enable("trust proxy"); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)
  /* 
  var limiter = new RateLimit({
    windowMs: 15*60*1000, // 15 minutes 
    max: 50, // limit each IP to 50 requests per windowMs 
    delayMs: 0 // disable delaying - full speed until the max limit is reached 
  });
   
  //  apply to all requests 
  app.use(limiter);*/

  //App compression
  app.use(compression());
  app.use(helmet());

  // Cors Middleware
  app.use(cors());

  // Body Parser Middleware
  app.use(bodyParser.json());

  // Static files
  app.use("/boletines", express.static(path.resolve(config.ftpBoletinesPath)));
  app.use("/boletos", express.static(path.resolve(config.ftpBoletosPath)));
  app.use("/correos", express.static(path.resolve(config.imgCorreosPath)));
  app.use("/resultados", express.static(path.resolve(config.resultadosPath)));
  app.use("/pega3", express.static(path.resolve(config.pega3Path)));
  app.use("/pega4", express.static(path.resolve(config.pega4Path)));
  app.use("/bingazo", express.static(path.resolve(config.bingazoPath)));
  app.use("/", routes);

  return app;
};
