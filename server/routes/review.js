// Dependencies
var express = require('express');
var router = express.Router();
var q = require('q');
var dbContext = require('../config/dbContext');
var dbHelper = require('../config/dbHelper');
var errorHelper = require('../config/errorHelper');
var productService = require('../services/productService');
var userService = require('../services/userService');

// Router
router.post('/add', function (request, response, next) {
    // create model
    var review = {
        Rating: request.body.Rating,
        Comment: request.body.Comment,
        ProductId: request.body.ProductId,
        Email: request.body.Email,
        Created: new Date(),
        UserName: ''
    }

    var ctx = {};
    q.when()
        .then(function () {
            if (!dbHelper.validateRating(review.Rating)) {
                throw errorHelper.Error_Invalid_Rating;
            };
        }).then(function () {
            if (!dbHelper.validateEmail(request.body.Email)) {
                throw errorHelper.Error_Invalid_Email;
            };
        }).then(function () {
            return dbContext.getConnection();
        }).then(function (con) {
            ctx = con;
            return userService.getUserByEmail(ctx, review.Email);
        }).then(function (users) {
			if (users.length > 0) {
				review.UserName = users[0].UserName; // set UserName if User is existed			
			}else {
				throw errorHelper.Error_Existed_Email;
			}
        }).then(function () {
            return productService.createReview(ctx, review);
        }).then(function () {            
            response.status(201).json({ code: 'CREATE_REVIEW_SUCCESS', message: "Create new Review is success." });
        }).catch(function (error) {
            next(error);
        }).finally(function () {
            ctx.release();
        });
})

// return Router
module.exports = router;
