// Dependencies
var http = require('http');
var server = require('./server');

/* ----------- Start Server -----------*/
http.createServer(server).listen(server.get('port'), function () {
    console.log('Web is running on port ' + server.get('port'));
    console.log('API is running on port ' + server.get('port'));    
});