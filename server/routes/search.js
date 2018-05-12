const express = require('express');
const router = express.Router();
const Q = require('q');
const searchService = require('../services/searchService');

router.get('/restaurants', Q.async(function* (req, res, next) {	
	try
	{		
		let restaurants = yield searchService.getRestaurants();
		return res.status(200).json(restaurants);
	}
	catch(err){
		next(err);
	};
}));

module.exports = router;
