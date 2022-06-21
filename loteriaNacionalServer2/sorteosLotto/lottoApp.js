const sorteosLottoServer = require("./lottoServer");
const config = require("../environments/test");
const cronjobs = require("./cronjobs");

const sorteosLottoPort = config.sorteosLottoPort;
const sorteosLottoApp = sorteosLottoServer.init(sorteosLottoPort);

sorteosLottoApp.listen(sorteosLottoPort, () => {
  console.log("Server running at: " + sorteosLottoPort);
  console.log(
    `Heapdump enabled. Run "kill -USR2 ${process.pid}" or send a request to "/heapdump" to generate a heapdump.`
  );
});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
