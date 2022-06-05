const ganadoresServer = require("./ganadoresServer");
const config = require("../environments/test");
const cronjobs = require("./cronjobs");

const ganadoresPort = config.ganadoresPort;
const ganadoresApp = ganadoresServer.init(ganadoresPort);

ganadoresApp.listen(ganadoresPort, () => {
  console.log("Server running at: " + ganadoresPort);
  console.log(
    `Heapdump enabled. Run "kill -USR2 ${process.pid}" or send a request to "/heapdump" to generate a heapdump.`
  );
});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
