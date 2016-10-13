// Dependencies
var express = require('express');
var http = require('http');
var path = require("path");
var bodyParser = require('body-parser');
var errorHelper = require('./config/errorHelper');

// Express
var app = express();
var router = express.Router();
app.set('port', process.env.PORT || 3000);
//app.set('port', 3000);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* ----------- Register API -----------*/
app.use('/api', require('./routes/api'));
app.use('/api/brand', require('./routes/brand'));
app.use('/api/product', require('./routes/product'));
app.use('/api/account', require('./routes/account'));
app.use('/api/user', require('./routes/user'));
app.use('/api/review', require('./routes/review'));

// Error Handling
app.use(function (error, request, response, next) {
    response.status(500);
    response.json(errorHelper.errorHandler(error));
});


/* ----------- Register Angular Application -----------*/
app.use('/app', express.static(path.join(__dirname, 'client/app')));
app.use('/libs', express.static(path.join(__dirname, 'client/libs')));


// Render page at Client Side
app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/client/index.html'));
	//response.sendFile(path.join(__dirname + '/publish/index.html'));
});

/* ----------- Start Server -----------*/
http.createServer(app).listen(app.get('port'), function () {
    console.log('Web is running on port ' + app.get('port'));
    console.log('API is running on port ' + app.get('port'));    
});