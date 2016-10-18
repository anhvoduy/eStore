// Dependencies
var express = require('express');
var router = express.Router();
var dbContext = require('../config/dbContext');
var errorHelper = require('../config/errorHelper');
var userService = require('../services/userService');

// Router
router.get('/items', function (request, response, next) {
	var ctx = {};
    dbContext.getConnection().then(function (result) {
		ctx = result;
        return userService.getUsers(ctx);
    }).then(function (users) {
		response.status(200).json(users);
    }).catch(function (error) {        
        next(error);
    }).done(function () {
		ctx.release();
    });
});

router.get('/items/:id', function (request, response, next) {
    var userId = request.params.id
    
	var ctx = {};
    dbContext.getConnection().then(function (result) {
		ctx = result;
        return userService.getUserById(ctx, userId);
	}).then(function (users) {
		if (users.length == 0) {
            response.status(404).json(errorHelper.Error_Existed_UserId);
		} else {
			response.status(200).json(users[0]);
		}
    }).catch(function (error) {        
        next(error);
    }).done(function () {
		ctx.release();
    });
});

// return Router
module.exports = router;
