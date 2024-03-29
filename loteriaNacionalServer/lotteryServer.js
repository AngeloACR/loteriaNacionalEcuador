const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const app = express();

const inquiry = require('./lottery/routes/inquiry');
const lottery = require('./lottery/routes/lottery');
const exalogic = require('./exalogic/routes/main');
const results = require('./results/routes/results');
const cart = require('./lottery/routes/cart');
const raspas = require('./lottery/routes/raspa');
const cache = require('./cache/routes/main');

module.exports.init = function (port) {
  app.set('port', (port));

  // Middlewares initialization

  app.enable('trust proxy'); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc) 
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

  app.use('/boletines', express.static('uploads/boletines'));
  app.use('/boletos', express.static('uploads/boletos'));

  //Adding routes

  app.use('/inquiry', inquiry);
  app.use('/lottery', lottery);
  app.use('/exalogic', exalogic);
  app.use('/results', results);
  app.use('/cart', cart);
  app.use('/raspas', raspas);
  app.use('/cache', cache);

  return app
}