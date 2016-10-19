// Dependencies
var express = require('express');
var router = express.Router();
var dbContext = require('../config/dbContext');
var errorHelper = require('../config/errorHelper');
var userService = require('../services/userService');

// routers: use for testing
router.post('/', function (req, res, next) {
    var msg = { success: userService.authenticate(req.body.username, req.body.password) };
    if (!msg.success) {
        console.log('Login is failed');
        res.status(404).json(errorHelper.Error_Wrong_Authentication);
    } else {
        console.log('Login is success');
        res.status(200).json(msg);
    }    
	return next();
});

// return Router
module.exports = router;
