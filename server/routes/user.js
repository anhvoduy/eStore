// Dependencies
var express = require('express');
var router = express.Router();
var dbContext = require('../config/dbContext');
var errorHelper = require('../config/errorHelper');
var userService = require('../services/userService');

/*
200 OK Standard response for successful HTTP requests
201 Created Request has been fulfilled.New resource created
204 No Content Request processed.No content returned
301 Moved Permanently This and all future requests directed to the given URI
304 Not Modified Resource has not been modified since last requested
400 Bad Request Request cannot be fulfilled due to bad syntax
401 Unauthorized Authentication is possible, but has failed
403 Forbidden Server refuses to respond to request
404 Not Found Requested resource could not be found
500 Internal Server Error Generic error message when server fails
501 Not Implemented Server does not recognize method or lacks ability to fulfill
503 Service Unavailable Server is currently unavailable
*/

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
