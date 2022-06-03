const sorteosLaMillonariaServer = require("./laMillonariaServer");
const config = require("../environments/production");
const cronjobs = require("./cronjobs");

const sorteosLaMillonariaPort = config.sorteosLaMillonariaPort;
const sorteosLaMillonariaApp = sorteosLaMillonariaServer.init(sorteosLaMillonariaPort);

sorteosLaMillonariaApp.listen(sorteosLaMillonariaPort, () => {
  console.log("Server running at: " + sorteosLaMillonariaPort);
  console.log(
    `Heapdump enabled. Run "kill -USR2 ${process.pid}" or send a request to "/heapdump" to generate a heapdump.`
  );
});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
