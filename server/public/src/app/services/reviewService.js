import React from 'react';

var reviewService = function(){
    this.hostName = 'http://localhost:3000';    
};

reviewService.prototype.createReview = function(data){    
    var self = this;
    var url = self.hostName + '/api/review/add';
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(function(res){
        if(res.status !== 200) throw Error(res.statusText);
        return { status: true, body: res.body };
    })
    .catch(function(error){
        return { status: false, message: error};
    });
}

module.exports = new reviewService;
