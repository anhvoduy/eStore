// Dependencies
var uuid = require('uuid');
var http = require('http');
var server = require('./config/server');
var memoryMonitor = require('pubnub-rickshaw-memory');
memoryMonitor.init({dev: true});

memoryMonitor.init({
  publish_key: 'publishKey',
  subscribe_key: 'subscribeKey',
  channel: uuid(),
  interval_timeout: 1000,
  dev_mode: false,
  port: 3333
});

/* ----------- Start Server -----------*/
http.createServer(server).listen(server.get('port'), function () {
    console.log('eAccounting Web & API is running on port:' + server.get('port'));    
});