const sorteosLoteriaNacionalServer = require("./loteriaNacionalServer");
const config = require("../environments/local");
const cronjobs = require("./cronjobs");

const sorteosLoteriaNacionalPort = config.sorteosLoteriaNacionalPort;
const sorteosLoteriaNacionalApp = sorteosLoteriaNacionalServer.init(sorteosLoteriaNacionalPort);

sorteosLoteriaNacionalApp.listen(sorteosLoteriaNacionalPort, () => {
  console.log("Server running at: " + sorteosLoteriaNacionalPort);
  console.log(
    `Heapdump enabled. Run "kill -USR2 ${process.pid}" or send a request to "/heapdump" to generate a heapdump.`
  );
});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
