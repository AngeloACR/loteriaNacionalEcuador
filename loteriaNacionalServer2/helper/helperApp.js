const helperServer = require("./helperServer");
const config = require("../environments/test");
const cronjobs = require("./cronjobs");

const helperPort = config.helperPort;
const helperApp = helperServer.init(helperPort);

helperApp.listen(helperPort, () => {
  console.log("Server running at: " + helperPort);
  console.log(
    `Heapdump enabled. Run "kill -USR2 ${process.pid}" or send a request to "/heapdump" to generate a heapdump.`
  );
});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
