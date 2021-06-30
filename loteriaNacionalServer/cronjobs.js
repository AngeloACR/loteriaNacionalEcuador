const Sorteos = require('./results/controller/sorteos');
var CronJob = require('cron').CronJob;

module.exports.setCronJobs = function () {
    let jobs = [];
    var job = new CronJob('00 35 00 * * *', Sorteos.updateSorteos, null, true, 'America/Guayaquil');
    jobs.push(job)
    return jobs;
}