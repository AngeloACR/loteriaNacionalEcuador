const walletServer = require("./walletServer");
const config = require("../environments/local");
const cronjobs = require("./cronjobs");

const walletPort = config.walletPort;
const walletApp = walletServer.init(walletPort);

walletApp.listen(walletPort, () => {
  console.log("Server running at: " + walletPort);
  console.log(
    `Heapdump enabled. Run "kill -USR2 ${process.pid}" or send a request to "/heapdump" to generate a heapdump.`
  );
});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
