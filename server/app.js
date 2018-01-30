var server = require('./server');

/* ----------- Start Server -----------*/
var app = server.listen(server.get('port'), function () {
    console.log('Node Js version:', process.version)
    console.log('eStore Web & API is running on port:' + server.get('port'));    
});