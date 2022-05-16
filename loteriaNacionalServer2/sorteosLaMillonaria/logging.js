const { createLogger, format, transports} = require("winston");
const { combine, timestamp, prettyPrint } = format;

module.exports.sorteosLaMillonariaLogger = createLogger({
  defaultMeta: { component: "sorteosLaMillonaria" },
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    prettyPrint()
  ),

  transports: [
    new transports.File({
      filename: "logs/sorteosLaMillonaria_log.json",
      prettyPrint: true,
      maxSize: "10485760",
      maxFiles: 10,
      level: "info",
    }),
    new transports.File({
      filename: "logs/sorteosLaMillonaria_error_log.json",
      prettyPrint: true,
      maxSize: "10485760",
      maxFiles: 10,
      level: "error",
    }),
  ],
});
