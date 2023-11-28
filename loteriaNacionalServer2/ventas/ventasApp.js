const ventasServer = require("./ventasServer");
const config = require("../environments/production");

const cronjobs = require("./cronjobs");

const ventasPort = config.ventasPort;
const ventasApp = ventasServer.init(ventasPort);

ventasApp.listen(ventasPort, () => {
  console.log("Server running at: " + ventasPort);
});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
