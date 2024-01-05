const sorteosPozoRevanchaServer = require("./pozoRevanchaServer");
const config = require("../environments/produccion");

const cronjobs = require("./cronjobs");

const sorteosPozoRevanchaPort = config.sorteosPozoRevanchaPort;
const sorteosPozoRevanchaApp = sorteosPozoRevanchaServer.init(
  sorteosPozoRevanchaPort
);

sorteosPozoRevanchaApp.listen(sorteosPozoRevanchaPort, () => {
  console.log("Server running at: " + sorteosPozoRevanchaPort);
});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
