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

Crawling.prototype.full = Q.async(function*(){
	console.log('start Crawl Schedule in Full Mode ............');
	//try{
	//	var ctx = yield dbContext.getConnection();
	//	var products = yield productService.getProducts(ctx, 0);
	//	for(let product of products){
	//		console.log(product);
	//	}
	//}catch(err){
	//	console.log(err);
	//	throw err;
	//}
});

Crawling.prototype.incremental = Q.async(function*(){
	console.log('start Crawl Schedule in Incremental Mode ............');
});

// Schedule
var main = function* (){
	var crawling = new Crawling();		
	try{		
		yield crawling.connect();
		yield crawling.full();
		yield crawling.incremental();
	}catch(err){
		console.log(err);
		throw err;
	}		
};

Q.spawn(main); //spawn once