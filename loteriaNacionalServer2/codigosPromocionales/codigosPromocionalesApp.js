const codigosPromocionalesServer = require("./codigosPromocionalesServer");
const config = require("../environments/production");
const cronjobs = require("./cronjobs");

const codigosPromocionalesPort = config.codigosPromocionalesPort;
const codigosPromocionalesApp = codigosPromocionalesServer.init(codigosPromocionalesPort);

codigosPromocionalesApp.listen(codigosPromocionalesPort, () => {
  console.log("Server running at: " + codigosPromocionalesPort);
  console.log(
    `Heapdump enabled. Run "kill -USR2 ${process.pid}" or send a request to "/heapdump" to generate a heapdump.`
  );
});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
