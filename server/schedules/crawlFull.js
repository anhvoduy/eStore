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
	var i = 1;
	for(var restaurant of restaurants){
		console.log(i + '. Restaurant:  - Country:' + restaurant.country + ' || - Name' + restaurant.name);
		i++;
	}
	console.log(restaurants.length);

	// generate Schema
	var sampleRes = {
    	"geo": "67.34, 68.08",
    	"city": "Rothera",
    	"country_icon": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/23px-Flag_of_the_United_Kingdom.svg.png",
    	"country": "United Kingdom",
    	"rating": 3.66,
    	"name": "Earl Run Restaurant",
    	"likes": [
    	  "dulce",
    	  "monty",
    	  "maudie",
    	  "sandy",
    	  "josephine",
    	  "dena"
    	]
  	}	
	//POST: sampleRes TO http://localhost:9200/place/restaurants
  
	
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