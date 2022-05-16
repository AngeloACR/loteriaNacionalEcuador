const { createLogger, format, transports } = require("winston");
const { combine, timestamp, prettyPrint } = format;

module.exports.loteriaVentasLogger = createLogger({
  defaultMeta: { component: "loteria" },
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    prettyPrint()
  ),

  transports: [
    new transports.File({
      filename: "logs/loteria-ventas.json",
      prettyPrint: true,
      maxSize: "10485760",
      maxFiles: 10,
      level: "info",
    }),
    new transports.File({
      filename: "logs/loteria-ventas-error.json",
      prettyPrint: true,
      maxSize: "10485760",
      maxFiles: 10,
      level: "error",
    }),
  ],
});

module.exports.loteriaReservasLogger = createLogger({
  defaultMeta: { component: "loteria" },
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    prettyPrint()
  ),

  transports: [
    new transports.File({
      filename: "logs/loteria-reservas.json",
      prettyPrint: true,
      maxSize: "10485760",
      maxFiles: 10,
      level: "info",
    }),
    new transports.File({
      filename: "logs/loteria-reservas-error.json",
      prettyPrint: true,
      maxSize: "10485760",
      maxFiles: 10,
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
    prettyPrint()
  ),

  transports: [
    new transports.File({
      filename: "logs/loteria-consultas.json",
      maxsize: "10485760",
      maxFiles: 10,
      level: "info",
      prettyPrint: true,
    }),
    new transports.File({
      filename: "logs/loteria-consultas-error.json",
      prettyPrint: true,
      maxsize: "10485760",
      maxFiles: 10,
      level: "error",
    }),
  ],
});
