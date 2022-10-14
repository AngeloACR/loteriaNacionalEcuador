var CronJob = require('cron').CronJob;
const Controller = require("./controller/main");

module.exports.setCronJobs = function () {
    let jobs = [];
    //let jobTime = '00 * * * * *'
  let jobTimeA = '00 00/3 * * * *'
  var jobA = new CronJob(jobTimeA, Controller.alertaArchivos, null, true, 'America/Guayaquil');
  jobs.push(jobA)
    //let jobTimeB = '00 15 00/1 * * *'
    //let jobTimeC = '00 30 00/1 * * *'
    //let jobTimeD = '00 45 00/1 * * *'
    //let jobTimeE = '00 20 00/1 * * *'
    
    return jobs;
}