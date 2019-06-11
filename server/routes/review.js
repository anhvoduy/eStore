var router = require('express').Router();
var Q = require('q');
var CONSTANTS = require('../lib/constants');
var dbContext = require('../lib/dbContext');
var common = require('../lib/commonlib');
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
            if (!common.validateRating(review.Rating)) {
                throw CONSTANTS.ERROR_INVALID_RATING;
            };
        }).then(function () {
            if (!common.validateEmail(review.Email)) {
                throw CONSTANTS.ERROR_INVALID_EMAIL;
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
				throw CONSTANTS.ERROR_NOT_EXIST_EMAIL;
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
