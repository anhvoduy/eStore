// Dependencies
var express = require('express');
var http = require('http');
var path = require("path");
var passport = require('passport');
var flash = require('connect-flash');
var jwt = require('jsonwebtoken');
//var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var responseTime = require('response-time');
var axios = require('axios');
//var redis = require('redis');
/*
  dependencies:
  "mssql": "^4.0.4",
  "express-redis-cache": "^0.4.2",
*/

var auth = require('./config/auth');
var config = require('./config/config');
var errorHelper = require('./config/errorHelper');

// Express
var server = express();
//server.use(morgan('dev'));  // log every request to the console
server.use(cookieParser()); // read cookies (needed for auth)
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

/* ----------- Setup Server -----------*/
auth.setup(server);
//server.set('port', process.env.PORT || 3000);
server.set('port', 3000);
server.set('secretKey', config.secretKey); // secret variable


// create a new redis client and connect to our local redis instance
// var client = redis.createClient();
// //if an error occurs, print it to the console
// client.on('error', function (err) {
//     console.log("Error " + err);
// });

// call the GitHub API to fetch information about the user's repositories
// function getUserRepositories(user) {
//     var githubEndpoint = 'https://api.github.com/users/' + user + '/repos' + '?per_page=100';
//     console.log('URL:' + githubEndpoint);
//     return axios.get(githubEndpoint);
// }

// add up all the stars and return the total number of stars across all repositories
// function computeTotalStars(repositories) {
//     return repositories.data.reduce(function (prev, curr) {
//         return prev + curr.stargazers_count
//     }, 0);
// }

// set up the response-time middleware
//server.use(responseTime());


/* ----------- Register API -----------*/
server.use('/api', require('./routes/api'));
server.use('/api/account', require('./routes/account'));
server.use('/api/brand', require('./routes/brand'));
server.use('/api/customer', require('./routes/customer'));
server.use('/api/inventory', require('./routes/inventory'));
server.use('/api/journal', require('./routes/journal'));
server.use('/api/product', require('./routes/product'));
//server.use('/api/reporting', require('./routes/reporting'));
server.use('/api/review', require('./routes/review'));
server.use('/api/search', require('./routes/search'));
server.use('/api/transaction', require('./routes/transaction'));
server.use('/api/user', require('./routes/user'));



/**
 * Error Handling
 * this is middleware to handle error
 */
server.use(function (error, request, response, next) {
	response.status(500);
	response.json(errorHelper.errorHandler(error));
});


/**
 * register inventory site
 * public folder
 * default page as SPA
 */
if(config.debugMode){
	server.use('/app', express.static(path.join(__dirname, 'client/app')));
	server.use('/img', express.static(path.join(__dirname, 'client/img')));
	server.use('/libs', express.static(path.join(__dirname, 'client/libs')));
}
else{
	server.use('/app', express.static(path.join(__dirname, 'build/app')));
	server.use('/img', express.static(path.join(__dirname, 'build/img')));
	server.use('/libs', express.static(path.join(__dirname, 'build/libs')));
}

// register SPA
server.get('/', function (req, res, next) {
	if(config.debugMode) 
		res.sendFile(path.join(__dirname + '/client/index.html'));
	else 
		res.sendFile(path.join(__dirname + '/build/index.html'));	
});

// export
module.exports = server;