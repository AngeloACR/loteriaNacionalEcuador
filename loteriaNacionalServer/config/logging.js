const { createLogger, format, transports, config } = require("winston");
const { combine, timestamp, json } = format;
const environment = require("./environment");

module.exports.apiVentasLogger = createLogger({
  defaultMeta: { component: "api-ventas" },
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    json()
  ),

  transports: [
    new transports.File({
      filename: "logs/api-ventas.json",
      prettyPrint: true,
      level: "info",
    }),
    new transports.File({
      filename: "logs/api-ventas-error.json",
      prettyPrint: true,
      level: "error",
    }),
  ],
});

module.exports.apiConsultasLogger = createLogger({
  defaultMeta: { component: "api-ventas" },
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    json()
  ),

  transports: [
    new transports.File({
      filename: "logs/api-consultas.json",
      prettyPrint: true,
      level: "info",
    }),
    new transports.File({
      filename: "logs/api-consultas-error.json",
      prettyPrint: true,
      level: "error",
    }),
  ],
});

module.exports.loteriaVentasLogger = createLogger({
  defaultMeta: { component: "loteria" },
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    json()
  ),

  transports: [
    new transports.File({
      filename: "logs/loteria-ventas.json",
      prettyPrint: true,
      level: "info",
    }),
    new transports.File({
      filename: "logs/loteria-ventas-error.json",
      prettyPrint: true,
      level: "error",
    }),
  ],
});
module.exports.loteriaConsultasLogger = createLogger({
  defaultMeta: { component: "loteria-consulta" },
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    json()
  ),

  transports: [
    new transports.File({
      filename: "logs/loteria-consultas.json",
      level: "info",
      prettyPrint: true,
    }),
    new transports.File({
      filename: "logs/loteria-consultas-error.json",
      prettyPrint: true,
      level: "error",
    }),
  ],
});
module.exports.exalogicLogger = createLogger({
  defaultMeta: { component: "exalogic" },
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    json()
  ),

  transports: [
    new transports.File({
      filename: "logs/exalogic.json",
      prettyPrint: true,
      level: "info",
    }),
    new transports.File({
      filename: "logs/exalogic-error.json",
      prettyPrint: true,
      level: "error",
    }),
  ],
});
