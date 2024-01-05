const codigosPromocionalesServer = require("./codigosPromocionalesServer");
const config = require("../environments/produccion");

const cronjobs = require("./cronjobs");

const codigosPromocionalesPort = config.codigosPromocionalesPort;
const codigosPromocionalesApp = codigosPromocionalesServer.init(
  codigosPromocionalesPort
);

codigosPromocionalesApp.listen(codigosPromocionalesPort, () => {
  console.log("Server running at: " + codigosPromocionalesPort);

});

let jobs = cronjobs.setCronJobs();
jobs.forEach((job) => {
  job.start();
});
