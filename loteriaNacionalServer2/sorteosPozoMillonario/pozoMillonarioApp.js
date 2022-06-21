const sorteosPozoMillonarioServer = require("./pozoMillonarioServer");
const config = require("../environments/test");
const cronjobs = require("./cronjobs");

const sorteosPozoMillonarioPort = config.sorteosPozoMillonarioPort;
const sorteosPozoMillonarioApp = sorteosPozoMillonarioServer.init(sorteosPozoMillonarioPort);

sorteosPozoMillonarioApp.listen(sorteosPozoMillonarioPort, () => {
  console.log("Server running at: " + sorteosPozoMillonarioPort);
  console.log(
    `Heapdump enabled. Run "kill -USR2 ${process.pid}" or send a request to "/heapdump" to generate a heapdump.`
  );
});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
