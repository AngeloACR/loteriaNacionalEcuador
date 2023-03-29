const sorteosFacilottoServer = require("./facilottoServer");
const config = require("../environments/test");
const cronjobs = require("./cronjobs");

const sorteosFacilottoPort = config.sorteosFacilottoPort;
const sorteosFacilottoApp = sorteosFacilottoServer.init(sorteosFacilottoPort);

sorteosFacilottoApp.listen(sorteosFacilottoPort, () => {
  console.log("Server running at: " + sorteosFacilottoPort);
});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
