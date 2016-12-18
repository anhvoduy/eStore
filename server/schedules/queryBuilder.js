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
var queryBuilder = function () {	
}

// Export
module.exports = new queryBuilder;