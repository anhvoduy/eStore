// Dependencies
var express = require('express');
var router = express.Router();
var Q = require('q');
var _ = require('lodash');
var auth = require('../config/auth');
var constant = require('../config/constant');
var dbContext = require('../config/dbContext');
var dbHelper = require('../config/dbHelper');
var errorHelper = require('../config/errorHelper');
var validator = require('../lib/validator');
var productService = require('../services/productService');
var userService = require('../services/userService');

// Router
router.post('/add', function (req, res, next) {
    var ctx = {};
    var review = {
        Rating: req.body.rating,
        Comment: req.body.comment,
        ProductId: req.body.productId,
        Email: req.body.email,
        Name: req.body.name
    }

    Q.when()
        .then(function () {
            if (!validator.validateRating(review.Rating)) {
                throw errorHelper.Error_Invalid_Rating;
            };
        }).then(function () {
            if (!validator.validateEmail(review.Email)) {
                throw errorHelper.Error_Invalid_Email;
            };
        }).then(function () {
            return dbContext.getConnection().then(function(con){
                ctx = con;
            });
        }).then(function () {            
            return userService.getUserByEmail(ctx, review.Email);
        }).then(function (users) {
			if (users.length > 0) {
				review.UserName = users[0].UserName; // set UserName if User is existed
			}else {
				throw errorHelper.Error_Not_Exist_Email;
			}
        }).then(function () {
            return productService.createReview(ctx, review);
        }).then(function () {            
            return res.status(200).json({ 
                code: 'CREATE_REVIEW_SUCCESS', 
                message: "Create new Review is success." 
            });
        }).catch(function (err) {
            next(err);
        });
})

// return Router
module.exports = router;
