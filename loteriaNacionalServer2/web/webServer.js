const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const app = express();
const config = require("../environments/production");

module.exports.init = function (folder, thePath, port) {
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

  // Cors Middleware
  app.use(cors());

  // Body Parser Middleware
  app.use(bodyParser.json());

  app.use(helmet());
  app.use((req, res, next) => {
    res.removeHeader("X-Frame-Options");
    next();
  });
  app.use(
    helmet.contentSecurityPolicy({
      useDefaults: true,
      directives: {
        "frame-ancestors": [
          "'self'",
          "*",
          //          "https://*.loteria.com.ec",
          //          "http://*.mongibello.tech",
          "http://loteria.mongibello.tech:8300",
        ],
      },
    })
  );

  // Set Static Folder

  app.use(express.static(path.join(__dirname, folder)));

  app.get("/", (req, res) => {
    res.send("We are having some troubles, please come back in a while!");
  });

  //Pointing to angular app
  app.get("/*", (req, res) => {
    var fileToSend = path.join(__dirname, thePath);
    res.sendFile(fileToSend);
  });

  app.use("/sendinblue", express.static(config.sendinbluePath));

  return app;
};
