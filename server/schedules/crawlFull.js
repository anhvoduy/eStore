// Dependencies
var Q = require('q');
var axios = require('axios');
var elasticsearch = require('elasticsearch');
var dbContext = require('../config/dbContext');
var productService = require('../services/productService');

// Crawling
var Crawling = function() {
};

Crawling.connect = Q.async(function*(){
	var client = new elasticsearch.Client({
		host: 'localhost:9200',
		log: 'trace'
	});
	return client;
});

Crawling.full = Q.async(function*(){	
	console.log('3. import data ....');
	var restaurants = require('./data/restaurants');
	var i = 1;
	for(var restaurant of restaurants){
		console.log(i + '. Restaurant:  - Country:' + restaurant.country + ' || - Name' + restaurant.name);
		i++;
	}
	console.log('COUNT:', restaurants.length);

	// generate Schema
	var sampleData = {
    	"geo": "67.34, 68.08",
    	"city": "Texas",
    	"country_icon": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/23px-Flag_of_the_United_Kingdom.svg.png",
    	"country": "United Kingdom",
    	"rating": 3.66,
    	"name": "Fast Food Run Restaurant",
    	"likes": [
    	  "dulce",
    	  "monty",
    	  "maudie",
    	  "sandy",
    	  "josephine",
    	  "dena"
    	]
  	};		
	var url = 'http://localhost:9200/place/restaurants';
	yield Crawling.createItem(url, sampleData);
});

Crawling.truncate = function(url, item){
	console.log('1. truncate all data ....');
}

Crawling.generateSchema = function(url, item){
	console.log('2. generate schema ....');
}

Crawling.createItem = function(url, item){
	return axios.post(url, item)
	.then(function (response) {
    	console.log(response);
  	})
  	.catch(function (error) {
    	console.log(error);
  	});
};

// Schedule
var main = function* (){	
	try{
		console.log('start Crawl Schedule in Full Mode ............');
		yield Crawling.connect();
		yield Crawling.full();
	}catch(err){
		console.log(err);
		throw err;
	}		
};

Q.spawn(main); //spawn once
