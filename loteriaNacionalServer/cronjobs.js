const Resultados = require('./results/controller/main');
var CronJob = require('cron').CronJob;

module.exports.setCronJobs = function () {
    let jobs = [];
    //let jobTime = '00 * * * * *'
    let jobTime = '00 00 00 * * *'
    var job = new CronJob(jobTime, Resultados.agregarSorteos, null, true, 'America/Guayaquil');
    jobs.push(job)
    return jobs;
}