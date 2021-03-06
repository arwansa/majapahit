const config = require('./app/config');
const db = require('./app/core/db');
const firebase = require('./app/core/firebase');
const server = require('./app/core/server');

const morgan = require('morgan');
server.use(morgan('dev'));

const route = require('./app/core/route')(server);

const port = process.env.PORT || config.portConfig;
server.listen(port, function() {
    console.log(server.name + " started at port " + port);
});
