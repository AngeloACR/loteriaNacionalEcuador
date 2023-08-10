const sorteosLottoServer = require("./lottoServer");
const config = require("../environments/local");

const cronjobs = require("./cronjobs");

const sorteosLottoPort = config.sorteosLottoPort;
const sorteosLottoApp = sorteosLottoServer.init(sorteosLottoPort);

sorteosLottoApp.listen(sorteosLottoPort, () => {
  console.log("Server running at: " + sorteosLottoPort);
});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
