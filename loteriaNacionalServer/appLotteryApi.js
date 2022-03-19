const db = require("./database");
const lotteryServer = require("./lotteryServer");
const webServer = require("./webServer");
const config = require("./config/environment");
const cronjobs = require("./cronjobs");

// https://www.nginx.com/blog/nginx-caching-guide/
const connection = db.initConnect();

const lotteryPort = config.lotteryPort;
const lotteryApp = lotteryServer.init(lotteryPort);

lotteryApp.listen(lotteryPort, () => {
  console.log("Server running at: " + lotteryPort);
  console.log(
    `Heapdump enabled. Run "kill -USR2 ${process.pid}" or send a request to "/heapdump" to generate a heapdump.`
  );
});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
