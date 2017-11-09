// Dependencies
var express = require('express');
var router = express.Router();
var Q = require('q');
var auth = require('../config/auth');
var constant = require('../lib/constant');
var dbContext = require('../lib/dbContext');
var errorHelper = require('../lib/errorHelper');
var productService = require('../services/productService');

// Router
router.get('/items', function (req, res, next) {
    var pageIndex = req.params.id;
    if (pageIndex == undefined) pageIndex = 0;
    
	var ctx = {};
    dbContext.getConnection().then(function (result) {
		ctx = result;
        return productService.getProductsPaging(ctx, pageIndex);
	}).then(function (result) {
		var products = result[0];
		res.status(200).json(products);      
    }).catch(function (error) {        
        next(error);
    }).done(function () {
		ctx.release();
    });    
});

router.get('/item', function (req, res, next) {
	var productId = req.params.id;
	
	var ctx = {};
	dbContext.getConnection().then(function (result) {
        ctx = result;
        // TO DO: getProductById() || getProductsByBrand()
		return productService.getProductById(ctx, productId);
	}).then(function (products) {
		if (products.length == 0) {
            res.status(404).json(errorHelper.Error_Not_Exist_ProductId);
		} else {
			res.status(200).json(products[0]);
		}
	}).catch(function (error) {        
        next(error);
	}).done(function () {
		ctx.release();
	});
});

// router.get('/itemsbrand/:id', function (req, res, next) {
//     var brandId = req.params.id;

//     var ctx = {};
//     dbContext.getConnection().then(function (result) {
//         ctx = result;
//         return productService.getProductsByBrand(ctx, brandId);
//     }).then(function (products) {
//         res.status(200).json(products)
//     }).catch(function (error) {        
//         next(error);
//     }).done(function () {
//         ctx.release();
//     });
// });

// return Router
module.exports = router;