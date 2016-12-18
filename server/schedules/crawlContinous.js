// Dependencies
var Q = require('q');
var axios = require('axios');
var elasticsearch = require('elasticsearch');
var dbContext = require('../config/dbContext');
var productService = require('../services/productService');

// Crawling
var Crawling = function(){
};

Crawling.prototype.connect = Q.async(function*(){
	var client = new elasticsearch.Client({
		host: 'localhost:9200',
		log: 'trace'
	});
	return client;
});

Crawling.prototype.continous = Q.async(function*(){
	console.log('start Crawl Schedule in Continous Mode ............');
});

// Schedule
var main = function* (){
	var crawling = new Crawling();		
	try{		
		yield crawling.connect();		
		yield crawling.continous();
	}catch(err){
		console.log(err);
		throw err;
	}		
};

Q.spawn(main); //spawn once