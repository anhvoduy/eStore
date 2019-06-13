const jwt = require('jsonwebtoken');
const passport = require('passport');
const OIDCStrategy = require('passport-azure-ad').OIDCStrategy;
const config = require('./config');
const aadConfig = require('./aadConfig');


passport.serializeUser(function(user, done) {
	done(null, user.oid);
});
  
passport.deserializeUser(function(oid, done) {
	findByOid(oid, function (err, user) {
	  	done(err, user);
	});
});

// array to hold logged in users
var users = [];
var findByOid = function(oid, fn) {
  	for (var i = 0, len = users.length; i < len; i++) {
    	var user = users[i];
   		console.log('we are using user: ', user);
		if (user.oid === oid) {
			return fn(null, user);
		}
  	}
  	return fn(null, null);
};



const auth = {};
auth.setup = function (app) {

    app.use(passport.initialize());
    app.use(passport.session());

    //-----------------------------------------------------------------------------
    // Use the OIDCStrategy within Passport.
    // 
    // Strategies in passport require a `verify` function, which accepts credentials
    // (in this case, the `oid` claim in id_token), and invoke a callback to find
    // the corresponding user object.
    // 
    // The following are the accepted prototypes for the `verify` function
    // (1) function(iss, sub, done)
    // (2) function(iss, sub, profile, done)
    // (3) function(iss, sub, profile, access_token, refresh_token, done)
    // (4) function(iss, sub, profile, access_token, refresh_token, params, done)
    // (5) function(iss, sub, profile, jwtClaims, access_token, refresh_token, params, done)
    // (6) prototype (1)-(5) with an additional `req` parameter as the first parameter
    //
    // To do prototype (6), passReqToCallback must be set to true in the config.
    //-----------------------------------------------------------------------------
    passport.use(new OIDCStrategy({
        identityMetadata: aadConfig.creds.identityMetadata,
        clientID: aadConfig.creds.clientID,
        responseType: aadConfig.creds.responseType,
        responseMode: aadConfig.creds.responseMode,
        redirectUrl: aadConfig.creds.redirectUrl,
        allowHttpForRedirectUrl: aadConfig.creds.allowHttpForRedirectUrl,
        clientSecret: aadConfig.creds.clientSecret,
        validateIssuer: aadConfig.creds.validateIssuer,
        isB2C: aadConfig.creds.isB2C,
        issuer: aadConfig.creds.issuer,
        passReqToCallback: aadConfig.creds.passReqToCallback,
        scope: aadConfig.creds.scope,
        loggingLevel: aadConfig.creds.loggingLevel,
        nonceLifetime: aadConfig.creds.nonceLifetime,
        nonceMaxAmount: aadConfig.creds.nonceMaxAmount,
        useCookieInsteadOfSession: aadConfig.creds.useCookieInsteadOfSession,
        cookieEncryptionKeys: aadConfig.creds.cookieEncryptionKeys,
        clockSkew: aadConfig.creds.clockSkew,
      },
      function(iss, sub, profile, accessToken, refreshToken, done) {
        if (!profile.oid) {
            return done(new Error("No oid found"), null);
        }
        // asynchronous verification, for effect...
        process.nextTick(function () {
            findByOid(profile.oid, function(err, user) {
                if (err) {
                    return done(err);
                }
                if (!user) {
                // "Auto-registration"
                users.push(profile);
                return done(null, profile);
                }
                return done(null, user);
            });
        });
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

module.exports = auth;