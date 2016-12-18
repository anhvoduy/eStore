// Dependencies
var express = require('express');
var router = express.Router();
var Q = require('q');
var searchService = require('../services/searchService');

// Router
router.get('/restaurants', Q.async(function* (req, res, next) {	
	try{		
		var restaurants = yield searchService.getRestaurants();
		return res.status(200).json(restaurants);
	}catch(err){
		next(err);
	};
}));

module.exports = router;
