const adminServer = require("./adminServer");
<<<<<<< HEAD
const config = require("../environments/production");
=======
const config = require("../environments/test");
>>>>>>> be00adcaac21b90e3687f73f0906b40dbe9cda90
const cronjobs = require("./cronjobs");

const adminPort = config.adminPort;
const adminApp = adminServer.init(adminPort);

adminApp.listen(adminPort, () => {
  console.log("Server running at: " + adminPort);
  console.log(
    `Heapdump enabled. Run "kill -USR2 ${process.pid}" or send a request to "/heapdump" to generate a heapdump.`
  );
});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
