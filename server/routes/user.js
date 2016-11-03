// Dependencies
var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var dbContext = require('../config/dbContext');
var errorHelper = require('../config/errorHelper');
var userService = require('../services/userService');

// Authenticate
router.post('/authenticate', function (req, res, next) {
    var data = { success: userService.authenticate(req.body.username, req.body.password) };
    if (!data.success) {
        console.log('Login is failed ...');
        res.status(404).json(errorHelper.Error_UnAuthentication);
    } else {
        console.log('Login is success ...');
        res.status(200).json(data);
    }
    return next();
});

router.post('/login', function (req, res, next) {	    
    passport.authenticate('local', function (err, data) {        
        if (err) { return next(err); }
        if (!data.success) {
            console.log('Login is failed ...');
            res.status(404).json(errorHelper.Error_UnAuthentication);
        } else {
            console.log('Login is success ...');
            res.status(200).json(data);
        }
    })(req, res, next);
});

router.get('/logout', function(req, res){
	console.log('Log out current user...');
});


// User Information
router.get('/items', function (req, res, next) {
	var ctx = {};
    dbContext.getConnection().then(function (result) {
		ctx = result;
        return userService.getUsers(ctx);
    }).then(function (users) {
		res.status(200).json(users);
    }).catch(function (error) {        
        next(error);
    }).done(function () {
		ctx.release();
    });
});

router.get('/items/:id', function (req, res, next) {
    var userId = req.params.id
    
	var ctx = {};
    dbContext.getConnection().then(function (result) {
		ctx = result;
        return userService.getUserById(ctx, userId);
	}).then(function (users) {
		if (users.length == 0) {
            res.status(404).json(errorHelper.Error_Existed_UserId);
		} else {
			res.status(200).json(users[0]);
		}
    }).catch(function (error) {        
        next(error);
    }).done(function () {
		ctx.release();
    });
});

router.get('/profile', function (req, res, next) {
    console.log(' get current user profile ...');
    var userId = 1;
    var ctx = {};
    dbContext.getConnection().then(function (result) {
        ctx = result;
        return userService.getUserById(ctx, userId);
    }).then(function (users) {
        if (users.length == 0) {
            res.status(404).json(errorHelper.Error_Existed_UserId);
        } else {
            res.status(200).json(users[0]);
        }
    }).catch(function (error) {
        next(error);
    }).done(function () {
        ctx.release();
    });
});


// return Router
module.exports = router;
