const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const config = require('./config/environment');
const cookieSess = require('cookie-session');
const helmet = require('helmet');
const RateLimit = require('express-rate-limit');
const app = express();

const inquiry = require('./lottery/routes/inquiry');
const lottery = require('./lottery/routes/lottery');
const results = require('./results/routes/results');

module.exports.init = function (port) {
  app.set('port', (port));

  // Middlewares initialization

  // app.enable('trust proxy'); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc) 
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
  app.options('*', cors())
  // Body Parser Middleware
  app.use(bodyParser.json());



  //Adding routes

  app.use('/inquiry', inquiry);
  app.use('/lottery', lottery);
  app.use('/results', results);

  return app
}