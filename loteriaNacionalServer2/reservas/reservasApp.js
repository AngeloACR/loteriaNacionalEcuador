const reservasServer = require("./reservasServer");
const config = require("../environments/local");
const cronjobs = require("./cronjobs");

const reservasPort = config.reservasPort;
const reservasApp = reservasServer.init(reservasPort);

reservasApp.listen(reservasPort, () => {
  console.log("Server running at: " + reservasPort);
});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
