const router = require('express').Router();
const cors = require('cors')
const jwt = require('jsonwebtoken');
const passport = require('passport');
const OIDCStrategy = require('passport-azure-ad').OIDCStrategy;

const auth = require('../config/auth');
const config = require('../config/config');
const credential = require('../config/credential');
const { uploadProductImageFS } = require('../lib/uploadFile');

// routes for testing
router.get('/', function (req, res, next) {
    res.json({ code: 'SUCCESS', message: 'request GET is success' });
    next();
});

router.post('/', function (req, res, next) {
    res.json({ code: 'SUCCESS', message: 'request POST is success' });
    next();
});

router.put('/', function (req, res, next) {
    res.json({ code: 'SUCCESS', message: 'request PUT is success' });
    next();
});

router.get('/newsfeed', cors(), function (req, res, next){
	res.status(200).json({ code: 'SUCCESS', message: 'request newsfeed with CORS is success.' });
	next();
});


// routers: use to login/logout
router.post('/login1', function (req, res, next) {
	return passport.authenticate('local', async function (err, result) {
		try
		{
			if (err) throw err;
			
			if (!result.success) {
				return res.status(404).json({
					success: false,
					message: { code: 'ERROR_UNAUTHENTICATION', message: 'Username and Password is invalid.' }
				});
			} 
			else {
				var token = jwt.sign(result.user, config.secretKey, { expiresIn: 60 * 60 * 24 * 1 });
				return res.status(200).json({
					success: true,
					message: { code: 'SUCCESS_AUTHENTICATION', message: 'Login is successful.' },
					user: { username: result.user.username, userkey: result.user.userkey, token: token },
				});
			}
		}
		catch(err){
			next(err);
		}
	})(req, res, next);
});

router.get('/logout1', function(req, res, next) {
	// TO DO: force logout 404
	next();
});


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
		identityMetadata: credential.identityMetadata,
		clientID: credential.clientID,
		responseType: credential.responseType,
		responseMode: credential.responseMode,
		redirectUrl: credential.redirectUrl,
		allowHttpForRedirectUrl: credential.allowHttpForRedirectUrl,
		clientSecret: credential.clientSecret,
		validateIssuer: credential.validateIssuer,
		isB2C: credential.isB2C,
		issuer: credential.issuer,
		passReqToCallback: credential.passReqToCallback,
		scope: credential.scope,
		loggingLevel: credential.loggingLevel,
		nonceLifetime: credential.nonceLifetime,
		nonceMaxAmount: credential.nonceMaxAmount,
		useCookieInsteadOfSession: credential.useCookieInsteadOfSession,
		cookieEncryptionKeys: credential.cookieEncryptionKeys,
		clockSkew: credential.clockSkew,
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

router.post('/login', function (req, res, next) {
	passport.authenticate('azuread-openidconnect', {
        response: res,
        resourceURL: credential.resourceURL,
        customState: 'my_state',
        failureRedirect: '/'
    })(req, res, next);
}, function(req, res){
	console.log('Login was called in the Sample');
    res.redirect('/');
});

app.get('/auth/openid/return', function(req, res, next) {
    passport.authenticate('azuread-openidconnect', {
		response: res,
		failureRedirect: '/'  
    })(req, res, next);
}, function(req, res) {
    console.log('We received a return from AzureAD.');
	res.redirect('/');
});

router.post('/auth/openid/return', function(req, res, next) {
    passport.authenticate('azuread-openidconnect', {
		response: res,
        failureRedirect: '/'
    })(req, res, next);
}, function(req, res) {
	console.log('We received a return from AzureAD.');
    res.redirect('/');
});

router.get('/logout', function(req, res) {
	req.session.destroy(function(err) {
		req.logOut();
		res.redirect(config.destroySessionUrl);
	});
});

router.post('/upload', auth.checkAuthentication(), uploadProductImageFS, async function(req, res, next){
	try
	{
		// req.file is the `ProductImage` file
		let fileName = req.file.filename;
		// req.body will hold the text fields, if there were any
		let product = req.body;
		product.ProductId = parseInt(product.ProductId);
		product.ProductImage = fileName;
		
		if(product){
			res.status(200).json({ success: true, data: product });
		}
		else{
			res.status(500).json({ success: false });
		}
	}
	catch(err){
		next(err);
	}
});

// return Router
module.exports = router;
