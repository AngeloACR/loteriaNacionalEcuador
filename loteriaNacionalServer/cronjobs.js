const Sorteos = require('./results/controller/sorteos');
var CronJob = require('cron').CronJob;

module.exports.setCronJobs = function () {
    let jobs = [];
    var job = new CronJob('00 00 01 * * *', Sorteos.updateSorteos, null, true, 'America/Guayaquil');
    jobs.push(job)
    return jobs;
}