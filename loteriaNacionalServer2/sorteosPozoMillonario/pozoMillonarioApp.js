const sorteosPozoMillonarioServer = require("./pozoMillonarioServer");
const config = require("../environments/production");
const cronjobs = require("./cronjobs");

const sorteosPozoMillonarioPort = config.sorteosPozoMillonarioPort;
const sorteosPozoMillonarioApp = sorteosPozoMillonarioServer.init(sorteosPozoMillonarioPort);

sorteosPozoMillonarioApp.listen(sorteosPozoMillonarioPort, () => {
  console.log("Server running at: " + sorteosPozoMillonarioPort);

});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
