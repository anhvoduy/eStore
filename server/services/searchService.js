// Dependencies
var q = require('q');
var axios = require('axios');
var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
	host: 'localhost:9200',
	log: 'trace'
});

// Constructor
var searchService = function () {
	getData();
	//searchData();
}

var getData = function () {
	var elasticEndpoint = 'http://localhost:9200';
	return axios.get(elasticEndpoint).then(function(result){
		if (result && result.data){
			console.log(result.data.version);
		}
	}, function(error){
		console.log(error);
	});	
}

var searchData = function(){
	client.search({
  		q: 'pants'
	}).then(function (body) {
  		var hits = body.hits.hits;
	}, function (error) {
  		console.trace(error.message);
	});
}

// Export
module.exports = new searchService;
