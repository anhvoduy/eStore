import React from 'react';

var dataService ={};
dataService.hostName = 'http://localhost:3000';

// this is only api supports cors for test request
dataService.getProfile = function(url){
    return fetch(this.hostName + url)
    .then(function(res) {
        return res.json();
    })
    .catch(function(err){
        return err;
    });
}

// dataService.getMenu = function(url){
//     return fetch(this.hostName + url)
//     .then(function(res){
//         return res.json();
//     });
// }

dataService.get = function(url){
    return fetch(this.hostName + url)
    .then(function(res){
        return res.json();
    });
}

dataService.post = function(url, data){
    return fetch(this.hostName + url, {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(function(res){
        return res.json();
    });
}

module.exports = dataService;
