// Dependencies
var q = require('q');
var axios = require('axios');
var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
	host: 'localhost:9200',
	log: 'trace'
});

var elasticEndpoint = 'http://localhost:9200';

// Constructor
var searchQuery = function () {	
}

searchQuery.prototype.getData = function (url) {	
	return axios.get(url).then(function(result){
		if (result && result.data){
			console.log(result.data.version);
		}
	}, function(error){
		console.log(error);
	});	
}

searchQuery.prototype.searchData = function(){
	client.search({
  		q: 'pants'
	}).then(function (body) {
  		var hits = body.hits.hits;
	}, function (error) {
  		console.trace(error.message);
	});
}

searchQuery.prototype.getRestaurants = function(){
	var url = 'http://localhost:9200/place/restaurants/_search';
	return axios.get(url).then(function(result){
		if (result && result.data){
			console.log(result.data.version);
		}
	}, function(error){
		console.log(error);
	});
}

// Export
module.exports = new searchQuery;
