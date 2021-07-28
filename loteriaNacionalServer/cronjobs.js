const Resultados = require('./results/controller/main');
const Cache = require('./cache/controller/main');
var CronJob = require('cron').CronJob;

module.exports.setCronJobs = function () {
    let jobs = [];
    //let jobTime = '00 * * * * *'
    let jobTimeA = '00 00 00 * * *'
    var jobA = new CronJob(jobTimeA, Resultados.agregarSorteos, null, true, 'America/Guayaquil');
    jobs.push(jobA)
    let jobTimeB = '00 15 00/1 * * *'
    //let jobTimeB = '00 */3 * * * *'
    var jobB = new CronJob(jobTimeB, Cache.setSorteos, null, true, 'America/Guayaquil');
    jobs.push(jobB)
    let jobTimeC = '00 30 00/1 * * *'
    //let jobTimeC = '00 */3 * * * *'
    var jobC = new CronJob(jobTimeC, Cache.setUltimosResultados, null, true, 'America/Guayaquil');
    jobs.push(jobC)
    return jobs;
}