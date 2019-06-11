var router = require('express').Router();
var Q = require('q');
var common = require('../lib/commonlib');
var productService = require('../services/productService');
var userService = require('../services/userService');

// Router
router.post('/add', function (req, res, next) {
    var review = {
        Rating: req.body.Rating,
        Comment: req.body.Comment,
        ProductId: req.body.ProductId,
        Email: req.body.Email
    }
    
    Q.when()
        .then(function () {
            if (!common.validateRating(review.Rating)) {
                throw { code: 'INVALID_RATING', message: "Rating is invalid" };
            };
        }).then(function () {
            if (!common.validateEmail(review.Email)) {
                throw { code: 'INVALID_EMAIL', message: 'Invalid Email Address' };
            };
        }).then(function () {
            return userService.getUserByEmail(review.Email);
        }).then(function (user) {
			if (user && user.UserName) {
				review.UserName = user.UserName; // set UserName if User is existed
			}else {
				throw { code: 'INVALID_EMAIL', message: 'Invalid Email Address' };
			}
        }).then(function () {
            return productService.createReview(review);
        }).then(function () {            
            return res.status(200).json({ 
                code: 'CREATE_REVIEW_SUCCESS', 
                message: "Create new Review is success." 
            });
        }).catch(function (err) {
            next(err);
        });
})

module.exports = router;