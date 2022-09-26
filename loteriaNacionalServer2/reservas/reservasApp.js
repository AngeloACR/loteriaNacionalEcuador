const reservasServer = require("./reservasServer");
const config = require("../environments/production");
const cronjobs = require("./cronjobs");

const reservasPort = config.reservasPort;
const reservasApp = reservasServer.init(reservasPort);

reservasApp.listen(reservasPort, () => {
  console.log("Server running at: " + reservasPort);
  console.log(
    `Heapdump enabled. Run "kill -USR2 ${process.pid}" or send a request to "/heapdump" to generate a heapdump.`
  );
});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
