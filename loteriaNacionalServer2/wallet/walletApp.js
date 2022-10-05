const walletServer = require("./walletServer");
const config = require("../environments/test");
const cronjobs = require("./cronjobs");

const walletPort = config.walletPort;
const walletApp = walletServer.init(walletPort);

walletApp.listen(walletPort, () => {
  console.log("Server running at: " + walletPort);

});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
