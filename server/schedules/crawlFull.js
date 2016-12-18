// Dependencies
var Q = require('q');
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

Crawling.prototype.full = Q.async(function*(){	
	console.log('start Crawl Schedule in Full Mode ............');
	var restaurants = require('./data/restaurants');
	console.log(restaurants.length);
	var i = 1;
	for(var restaurant of restaurants){
		console.log(i + '. Restaurant:  - Country:' + restaurant.country + ' || - Name' + restaurant.name);
		i++;
	}	
});

// Schedule
var main = function* (){
	var crawling = new Crawling();		
	try{		
		yield crawling.connect();
		yield crawling.full();		
	}catch(err){
		console.log(err);
		throw err;
	}		
};

Q.spawn(main); //spawn once