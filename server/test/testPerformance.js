var server = require('../server');
var request = require('supertest');
var loadtest = require('loadtest');
var chai = require('chai');
var expect = require('chai').expect;

var mUrl;
var options = {
    url: mUrl,
    maxRequests: 1,
    statusCallback: function(error, result, latency) {
        //console.log('Current latency %j, result %j, error %j', latency, result, error);
        console.log('- statusCode:', result.statusCode);
        //expect(result.statusCode).eq(200);
        console.log('Current latency %j, error %j', latency, error);
        console.log('----');
        console.log('Request elapsed milliseconds: ', result.requestElapsed);
        console.log('Request index: ', result.requestIndex);
        console.log('Request loadtest() instance index: ', result.instanceIndex);
    }
};

loadtest.loadTest(options, function(error, result) {
    if (error) {
        return console.error('Got an error: %s', error);
    }
    console.log('Request run successfully');    
});

// describe('@DEV load-test', function(){
//     it('should request API successfully', function(){
//          return request(server)
//              .get('/api')
//              .expect(200);
//      });
// });


//     it('should request API successfully with maxRequests: 1000', function(){
//         var options = {
//             url: 'http://localhost:3000/api/',
//             maxRequests: 1000,
//             statusCallback: function(error, result, latency) {
//                 //console.log('Current latency %j, result %j, error %j', latency, result, error);
//                 console.log('Current latency %j, error %j', latency, error);
//                 console.log('----');
//                 console.log('Request elapsed milliseconds: ', result.requestElapsed);
//                 console.log('Request index: ', result.requestIndex);
//                 console.log('Request loadtest() instance index: ', result.instanceIndex);
//             }
//         };
//         loadtest.loadTest(options, function(error) {
//             if (error) {
//                 return console.error('Got an error: %s', error);
//             }
//             console.log('Request run successfully');
//         });
//     });
// })
//});