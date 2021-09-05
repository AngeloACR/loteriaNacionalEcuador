const config = require('./config/environment');
const mongoose = require('mongoose');
//const myDB = config.testDB;
const myDB = config.prodDB;

const Sorteos = require('./results/controller/sorteos');
const Premios = require('./results/controller/premios');
const Resultados = require('./results/controller/resultados');

module.exports.initConnect = function () {
    // Connect to Database
    mongoose.connect(myDB, { useUnifiedTopology: true, useNewUrlParser: true });

    // On Connection
    mongoose.connection.on('connected', () => {
        console.log('Connected to database ' + myDB);
    });

    // On Error
    mongoose.connection.on('error', (err) => {
        console.log('Database error' + err);
    });

    return mongoose.connection;
}

module.exports.endConnect = function (connection) {
    // Connect to Database
    console.log('Ending connection');
}

module.exports.cleanDatabase = async function () {
    let sorteos = (await Sorteos.getSorteos()).values;
    let outdatedSorteos = [];
    sorteos.forEach(sorteo => {

        let date = sorteo.fecha;
        let day = date.split(" ")[0].split("/")[0]
        let month = date.split(" ")[0].split("/")[1]
        let year = date.split(" ")[0].split("/")[2]
        let today = new Date();
        let todayYear = today.getYear();
        let todayMonth = today.getMonth();
        let todayDay = today.getDay()
        let limit;
        let limitYear
        if (todayMonth < 3) {
            limit = todayMonth + 9;
            limitYear = todayYear - 1
        } else {
            limit = todayMonth - 3;
            limitYear = todayYear
        }
        console.log(limit)
        if ((month < limit || (month == limit && day <= todayDay)) && year <= limitYear) {
            console.log(`I should be deleting this sorteo: ${sorteo.sorteo}`)
            outdatedSorteos.push(sorteo.sorteo);
            /*             await Resultados.deleteResultadosBySorteo(sorteo._id);
                        await Premios.deletePremiosBySorteo(sorteo._id);
                        await Sorteos.deleteSorteo(sorteo._id); */
        }
    });
    return outdatedSorteos;
}