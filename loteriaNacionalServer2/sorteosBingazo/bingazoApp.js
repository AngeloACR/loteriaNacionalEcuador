const sorteosBingazoServer = require("./bingazoServer");
const config = require("../environments/produccion");

const cronjobs = require("./cronjobs");

const sorteosBingazoPort = config.sorteosBingazoPort;
const sorteosBingazoApp = sorteosBingazoServer.init(
  sorteosBingazoPort
);

sorteosBingazoApp.listen(sorteosBingazoPort, () => {
  console.log("Server running at: " + sorteosBingazoPort);
});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
