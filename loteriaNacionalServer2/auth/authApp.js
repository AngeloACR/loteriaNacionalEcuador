const authServer = require("./authServer");
const config = require("../environments/test");
const cronjobs = require("./cronjobs");

const authPort = config.authPort;
const authApp = authServer.init(authPort);

authApp.listen(authPort, () => {
  console.log("Server running at: " + authPort);
  console.log(
    `Heapdump enabled. Run "kill -USR2 ${process.pid}" or send a request to "/heapdump" to generate a heapdump.`
  );
});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
