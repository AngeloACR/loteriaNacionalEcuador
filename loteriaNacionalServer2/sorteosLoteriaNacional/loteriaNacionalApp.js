const sorteosLoteriaNacionalServer = require("./loteriaNacionalServer");
const config = require("../environments/produccion");

const cronjobs = require("./cronjobs");

const sorteosLoteriaNacionalPort = config.sorteosLoteriaNacionalPort;
const sorteosLoteriaNacionalApp = sorteosLoteriaNacionalServer.init(
  sorteosLoteriaNacionalPort
);

sorteosLoteriaNacionalApp.listen(sorteosLoteriaNacionalPort, () => {
  console.log("Server running at: " + sorteosLoteriaNacionalPort);
});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
