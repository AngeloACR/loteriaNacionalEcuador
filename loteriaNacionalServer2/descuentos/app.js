const descuentosServer = require("./server");
const config = require("../environments/local");

const cronjobs = require("./cronjobs");

const descuentosPort = config.descuentosPort;
const descuentosApp = descuentosServer.init(descuentosPort);

descuentosApp.listen(descuentosPort, () => {
  console.log("Server running at: " + descuentosPort);
});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
