const ventasServer = require("./ventasServer");
const config = require("../environments/local");
const cronjobs = require("./cronjobs");

const ventasPort = config.ventasPort;
const ventasApp = ventasServer.init(ventasPort);

ventasApp.listen(ventasPort, () => {
  console.log("Server running at: " + ventasPort);
  console.log(
    `Heapdump enabled. Run "kill -USR2 ${process.pid}" or send a request to "/heapdump" to generate a heapdump.`
  );
});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
