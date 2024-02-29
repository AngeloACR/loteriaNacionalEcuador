var CronJob = require('cron').CronJob;
let mainController = require("./controller/main")
module.exports.setCronJobs = function () {
    let jobs = [];
    let jobTimeA = '00 30 00 * * *'
    var jobA = new CronJob(jobTimeA, mainController.validateActives, null, true, 'America/Guayaquil');
    jobs.push(jobA)
    //let jobTimeB = '00 15 00/1 * * *'
    //let jobTimeC = '00 30 00/1 * * *'
    //let jobTimeD = '00 45 00/1 * * *'
    //let jobTimeE = '00 20 00/1 * * *'
    
    return jobs;
}