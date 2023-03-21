var CronJob = require("cron").CronJob;
const Cache = require("./controller/cache");
const Controller = require("./controller/main");
module.exports.setCronJobs = function () {
  let jobs = [];
  //let jobTimeA = '00 * * * * *'
  let jobTimeA = "00 35 00/1 * * *";
  var jobA = new CronJob(
    jobTimeA,
    Controller.cronActualizarSorteosJugados,
    null,
    true,
    "America/Guayaquil"
  );
  jobs.push(jobA);
  let jobTimeB = "00 40 00/1 * * *";
  var jobB = new CronJob(
    jobTimeB,
    Controller.cronActualizarUltimoResultado,
    null,
    true,
    "America/Guayaquil"
  );
  jobs.push(jobB);
  let jobTimeC = "00 30 00/1 * * *";
  var jobC = new CronJob(
    jobTimeC,
    Cache.actualizar,
    null,
    true,
    "America/Guayaquil"
  );
  jobs.push(jobC);
  let jobTimeD = "00 50 01 * * *";
  var jobD = new CronJob(
    jobTimeD,
    Controller.limpiarDB,
    null,
    true,
    "America/Guayaquil"
  );
  jobs.push(jobD);

  return jobs;
};
