const { createLogger, format, transports } = require("winston");
const { combine, timestamp, prettyPrint } = format;

module.exports.codigosPromocionalesLogger = createLogger({
  defaultMeta: { component: "codigosPromocionales" },
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    prettyPrint()
  ),

  transports: [
    new transports.File({
      filename: "logs/codigos_promocionales_log.json",
      prettyPrint: true,
      maxSize: "10485760",
      maxFiles: 10,
      level: "info",
    }),
    new transports.File({
      filename: "logs/codigos_promocionales_error_log.json",
      prettyPrint: true,
      maxSize: "10485760",
      maxFiles: 10,
      level: "error",
    }),
  ],
});
