const { createLogger, format, transports} = require("winston");
const { combine, timestamp, prettyPrint } = format;

module.exports.ftpBoletinesLogger = createLogger({
  defaultMeta: { component: "ftpBoletines" },
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    prettyPrint()
  ),

  transports: [
    new transports.File({
      filename: "logs/ftpBoletines_log.json",
      prettyPrint: true,
      maxSize: "10485760",
      maxFiles: 10,
      level: "info",
    }),
    new transports.File({
      filename: "logs/ftpBoletines_error_log.json",
      prettyPrint: true,
      maxSize: "10485760",
      maxFiles: 10,
      level: "error",
    }),
  ],
});
