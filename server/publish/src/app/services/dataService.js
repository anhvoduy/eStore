import React from 'react';

var dataService ={};

var hostName = 'http://localhost:3000';
dataService.getProfile = function(url){
    return fetch(hostName + url).then( function(response) {
        return response.json();
    })
}

module.exports = dataService;
