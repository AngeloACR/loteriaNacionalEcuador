var CronJob = require("cron").CronJob;
const Sorteos = require("./models/sorteo");
const UltimosResultados = require("./models/ultimoResultado");
const Cache = require("./controller/cache");
module.exports.setCronJobs = function () {
  let jobs = [];
  //let jobTime = '00 * * * * *'
  let jobTimeA = '00 15 00/1 * * *'
  var jobA = new CronJob(jobTimeA, Sorteos.actualizarSorteosJugados, null, true, 'America/Guayaquil');
  jobs.push(jobA)
  let jobTimeB = '00 20 00/1 * * *'
  var jobB = new CronJob(jobTimeB, UltimosResultados.actualizar, null, true, 'America/Guayaquil');
  jobs.push(jobB)
  let jobTimeC = '00 30 00/1 * * *'
  var jobC = new CronJob(jobTimeC, Cache.actualizar, null, true, 'America/Guayaquil');
  jobs.push(jobC)
  //let jobTimeC = '00 30 00/1 * * *'
  //let jobTimeD = '00 45 00/1 * * *'
  //let jobTimeE = '00 20 00/1 * * *'

  return jobs;
};
