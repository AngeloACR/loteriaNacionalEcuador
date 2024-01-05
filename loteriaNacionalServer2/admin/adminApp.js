const adminServer = require("./adminServer");
const config = require("../environments/production");
const cronjobs = require("./cronjobs");

const adminPort = config.adminPort;
const adminApp = adminServer.init(adminPort);

adminApp.listen(adminPort, () => {
  console.log("Server running at: " + adminPort);
});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
