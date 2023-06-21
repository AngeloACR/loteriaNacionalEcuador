const ganadoresServer = require("./ganadoresServer");
const config = require("../environments/local");
const cronjobs = require("./cronjobs");

const ganadoresPort = config.ganadoresPort;
const ganadoresApp = ganadoresServer.init(ganadoresPort);

ganadoresApp.listen(ganadoresPort, () => {
  console.log("Server running at: " + ganadoresPort);
});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
