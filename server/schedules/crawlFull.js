// Dependencies
var Q = require('q');
var axios = require('axios');
var elasticsearch = require('elasticsearch');
var dbContext = require('../config/dbContext');
var productService = require('../services/productService');

// Crawling
var Crawling = function() {
};

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

Crawling.connect = Q.async(function*(){
	this.client = new elasticsearch.Client({
		host: 'localhost:9200',
		log: 'trace'
	});
});

Crawling.readDataSource = Q.async(function*(){
	var restaurants = require('./data/restaurants');	
	console.log('COUNT:', restaurants.length);
	return restaurants;
});

Crawling.importData = Q.async(function*(){	
	console.log('3. import data ....');	
	// generate Schema	
	yield Crawling.createItem(url, sampleData);

});

Crawling.truncate = Q.async(function*(){
	console.log('1. truncate all data ....');
	return this.client.indices.delete({
		index: 'place'
	}, function(err,res,status) { 
		if(err) {
			console.log('---------------------------'); 
			console.log(err); 
		}
		console.log("DELETE:",res);
	});
});

Crawling.generateSchema = function(){
	console.log('2. generate schema ....');
};

Crawling.createItem = Q.async(function*(item){
	var url = 'http://localhost:9200/place/restaurants';
	return axios.post(url, item)
	.then(function (response) {
    	console.log(response);
  	}).catch(function (error) {
    	console.log(error);
  	});
});

// Schedule
var main = function* (){	
	try{
		console.log('start Crawl Schedule in Full Mode ............');
		yield Crawling.connect();
		yield Crawling.truncate();
		var restaurants = yield Crawling.readDataSource();		
		for(var re of restaurants){
			yield Crawling.createItem(re);
		}
	}catch(err){
		console.log(err);
		throw err;
	}		
};

Q.spawn(main); //spawn once
