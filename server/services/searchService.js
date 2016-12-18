// Dependencies
var Q = require('q');
var axios = require('axios');
var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
	host: 'localhost:9200',
	log: 'trace'
});

var elasticEndpoint = 'http://localhost:9200';

// Constructor
var searchService = function () {	
}

searchService.prototype.getData = function (url) {	
	return axios.get(url).then(function(result){
		if (result && result.data){
			console.log(result.data.version);
		}
	}, function(error){
		console.log(error);
	});	
}

searchService.prototype.searchData = function(){
	client.search({
  		q: 'pants'
	}).then(function (body) {
  		var hits = body.hits.hits;
	}, function (error) {
  		console.trace(error.message);
	});
}

searchService.prototype.getRestaurants = function(){
	var url = 'http://localhost:9200/place/restaurants/_search';
	var defer = Q.defer();
	axios.get(url).then(function(result){
		defer.resolve(result.data.hits.hits);
	}, function(error){
		console.log(error);
		defer.reject(error);
	});
	return defer.promise;
}

// Export
module.exports = new searchService;
