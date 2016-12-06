// Dependencies
var q = require('q');
var axios = require('axios');
var elasticsearch = require('elasticsearch');

// Crawling
var Crawling = function () {
};

Crawling.prototype.full = function(){
	console.log('start Crawl Schedule in Full Mode ............');
};

Crawling.prototype.incremental = function(){
	console.log('start Crawl Schedule in Incremental Mode ............');
};

// Schedule
var schedule = function(){
	var crawling = new Crawling();
	crawling.full();
	crawling.incremental();

	var client = new elasticsearch.Client({
		host: 'localhost:9200',
		log: 'trace'
	});
};

// Export
module.exports = new schedule;
