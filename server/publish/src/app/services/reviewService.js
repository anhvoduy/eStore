import React from 'react';

var reviewService = function(){
    this.hostName = 'http://localhost:3000';
};

reviewService.prototype.createReview = function(url, data){
    return fetch(this.hostName + url, {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(function(res){
        return res.json();
    });
}

module.exports = new reviewService;
