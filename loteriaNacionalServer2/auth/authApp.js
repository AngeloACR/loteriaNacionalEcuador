const authServer = require("./authServer");
const config = require("../environments/production");
const cronjobs = require("./cronjobs");

const authPort = config.authPort;
const authApp = authServer.init(authPort);

authApp.listen(authPort, () => {
  console.log("Server running at: " + authPort);

});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
