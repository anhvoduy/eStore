var express = require('express');
var http = require('http');
var path = require("path");
var passport = require('passport');
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var auth = require('./config/auth');
var config = require('./config/config');
var errorHelper = require('./lib/errorHelper');

// Express
var server = express();
server.use(cookieParser()); // read cookies (needed for auth)
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// setup Server
auth.setup(server);
//server.set('port', process.env.PORT || 3000);
server.set('port', 3000);
server.set('secretKey', config.secretKey); // secret variable

// Register API 
server.use('/api', require('./routes/api'));
server.use('/api/account', require('./routes/account'));
server.use('/api/brand', require('./routes/brand'));
server.use('/api/product', require('./routes/product'));
server.use('/api/customer', require('./routes/customer'));
server.use('/api/user', require('./routes/user'));
server.use('/api/inventory', require('./routes/inventory'));
server.use('/api/journal', require('./routes/journal'));
server.use('/api/review', require('./routes/review'));
server.use('/api/transaction', require('./routes/transaction'));

server.use('/api/search', require('./routes/search'));
server.use('/api/report', require('./routes/report'));





/**
 * Allow CORS: https://jonathanmh.com/how-to-enable-cors-in-express-js-node-js/
 * this is middleware to allow cors requests
 */
// server.use(function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
// });


/**
 * Error Handling
 * this is middleware to handle error
 */
server.use(function (err, req, res, next) {
	res.status(500);
	res.json(errorHelper.errorHandler(err));
});


/**
 *   register estore:
 * - public site: angular js & multiple pages
 * - admin site : angular js & single page
 */
var pathPublic = path.join(__dirname, 'public/build');
server.use('/', express.static(pathPublic, { index: 'index.html' }));


var pathAdmin = path.join(__dirname, 'admin');
server.use('/admin', express.static(pathAdmin, { index: 'index.html' }));
server.use('/app', express.static(path.join(pathAdmin, 'app')));
server.use('/img', express.static(path.join(pathAdmin, 'img')));
server.use('/libs', express.static(path.join(pathAdmin, 'libs')));



// register SPA
// server.get('/', function (req, res, next) {
// 	if(config.debugMode) 
// 		res.sendFile(path.join(__dirname + '/client/index.html'));
// 	else 
// 		res.sendFile(path.join(__dirname + '/build/index.html'));	
// });

// export
module.exports = server;