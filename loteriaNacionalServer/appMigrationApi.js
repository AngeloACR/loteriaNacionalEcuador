const db = require('./database');
const migrationServer = require('./migrationServer');
const config = require('./config/environment');

// https://www.nginx.com/blog/nginx-caching-guide/
const connection = db.initConnect();

const migrationPort = config.migrationPort;
const migrationApp = migrationServer.init(migrationPort);

migrationApp.listen(migrationPort, () => {
    console.log('Server running at: ' + migrationPort);
});