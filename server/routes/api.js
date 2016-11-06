// Dependencies
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var auth = require('../config/auth');
var config = require('../config/config');
var constant = require('../config/constant');
var dbContext = require('../config/dbContext');
var errorHelper = require('../config/errorHelper');
var userService = require('../services/userService');

// routers: use to test
router.get('/', function (req, res, next) {
	res.json({ message: 'eAccounting method GET() is success' });
	console.log('%s %s — %s', (new Date).toString(), req.method, req.url);
	return next();
});

router.post('/', function (req, res, next) {
	res.json({ message: 'eCargo method POST() is success' });
	console.log('%s %s — %s', (new Date).toString(), req.method, req.url);
	return next();
});


// routers: use to authenticate
router.post('/authenticate', function (req, res, next) {
	console.log('authenticate ...');
	return next();
});

router.post('/login', function (req, res, next) {
	passport.authenticate('local', function (err, result) {
		if (err) { return next(err); }
		if (!result.success) {
			console.log('Login is failed ...');
			res.status(404).json({
				success: false,
				message: { code: 'ERROR_UNAUTHENTICATION', message: 'Username and Password is invalid.' }
			});
		} else {
			console.log('Login is success ...');
			var token = jwt.sign(result.user, config.secretKey, { expiresIn: 60 * 60 * 24 * 1 });
			//console.log(token);
			res.status(200).json({
				success: true,
				message: { code: 'SUCCESS_AUTHENTICATION', message: 'Login is successful.' },                
				user: { username: result.user.username, token: token },
			});
		}
	})(req, res, next);
});

router.get('/logout', function (req, res) {
	console.log('Log out current user...');
});


// return Router
module.exports = router;
