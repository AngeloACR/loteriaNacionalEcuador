const helperServer = require("./helperServer");
const config = require("../environments/production");
const cronjobs = require("./cronjobs");

const helperPort = config.helperPort;
const helperApp = helperServer.init(helperPort);

helperApp.listen(helperPort, () => {
  console.log("Server running at: " + helperPort);

});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
