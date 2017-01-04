// Dependencies
var jwt = require('jsonwebtoken');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var config = require('../config/config');
var userService = require('../services/userService');

// Authenticate Service
var auth = {};
auth.setup = function (app) {

    app.use(passport.initialize());

    passport.use(new LocalStrategy(
        function (username, password, done) {

            var data = {
                success: userService.authenticate(username, password),
                user: { username: username, password: password }
            };
            //console.log('Verify Username & Password ...');
            return done(null, data);
        }
    ));
};

auth.checkAuthentication = function () {    
    return function (req, res, next) {        
        //console.log('checkAuthentication() ...');
        // check header or url parameters or post parameters for token
        var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization;
        if (token) {
            jwt.verify(token, config.secretKey, function (err, decoded) {
                if (err) {
                    return res.json({ success: false, message: 'Failed to authenticate token.' });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.status(403).send({ success: false, message: 'No token provided.' });
        }      
    };
};

module.exports = auth;
