const jwt = require('jsonwebtoken');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const config = require('../config/config');
const userService = require('../services/userService');

const auth = {};
auth.setup = function (app) {

    app.use(passport.initialize());

    passport.use(new LocalStrategy(
        async function (username, password, done) {
            try
            {
                let result = await userService.authenticate(username, password);
                let data = {
                    success: result.success,
                    user: { username: result.username, userkey: result.userkey }
                };
                return done(null, data);
            }
            catch(err){
                return done(err);
            }
        }
    ));
};

auth.checkAuthentication = function () {
    return function (req, res, next) {
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

auth.checkSelf = function(){
    return true;
};

module.exports = auth;