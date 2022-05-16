const { createLogger, format, transports} = require("winston");
const { combine, timestamp, prettyPrint } = format;

module.exports.exalogicLogger = createLogger({
    defaultMeta: { component: "exalogic" },
    format: combine(
      timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      prettyPrint()
    ),
  
    transports: [
      new transports.File({
        filename: "logs/exalogic.json",
        prettyPrint: true,
        maxsize: "10485760",
        maxFiles: 10,
        level: "info",
      }),
      new transports.File({
        filename: "logs/exalogic-error.json",
        prettyPrint: true,
        maxsize: "10485760",
        maxFiles: 10,
        level: "error",
      }),
    ],
  });