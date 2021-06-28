const Sorteos = require('./results/controller/sorteos');
var CronJob = require('cron').CronJob;

module.exports.setCronJobs = function (port) {
    let jobs = [];
    var job = new CronJob('00 00 00 * * *', Sorteos.updateSorteos, null, true, 'America/Los_Angeles');
    jobs.push(job)
    return jobs;
}