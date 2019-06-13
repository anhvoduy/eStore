var express = require('express');
var expressSession = require('express-session');
var path = require("path");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var OIDCStrategy = require('passport-azure-ad').OIDCStrategy;

var auth = require('./config/auth');
var config = require('./config/config');
var aadConfig = require('./config/aadConfig');
var common = require('./lib/commonlib');

// Express
var server = express();
//auth.setup(server); // setup server authenticate
server.use(passport.initialize());
server.use(passport.session());

server.use(cookieParser()); // read cookies (needed for auth)
server.use(methodOverride());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(expressSession({ secret: config.secretKey, resave: true, saveUninitialized: false }));

// setup Server
auth.setup(server);
server.set('port', process.env.PORT || 3000);
server.set('secretKey', config.secretKey);

// Register APIs
server.use('/api', require('./routes/api'));
server.use('/api/account', require('./routes/account'));
server.use('/api/brand', require('./routes/brand'));
server.use('/api/category', require('./routes/category'));
server.use('/api/product', require('./routes/product'));
server.use('/api/customer', require('./routes/customer'));
server.use('/api/user', require('./routes/user'));
server.use('/api/group', require('./routes/group'));
server.use('/api/inventory', require('./routes/inventory'));
server.use('/api/review', require('./routes/review'));
server.use('/api/transaction', require('./routes/transaction'));

server.use('/api/search', require('./routes/search'));
server.use('/api/report', require('./routes/report'));

var pathUploads = path.join(__dirname, 'uploads');
server.use('/uploads', express.static(pathUploads));



/**
 * Allow CORS: https://jonathanmh.com/how-to-enable-cors-in-express-js-node-js/
 * this is middleware to allow cors requests
 */
// server.use(function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
// });


/**
 * Error Handling
 * this is middleware to handle error
 */
server.use(function (err, req, res, next) {
	res.status(500);
	res.json(common.errorHandler(err));
});


/**
 *   register estore:
 * - public site: angular js & multiple pages
 * - admin site : angular js & single page
 */
var pathPublic = path.join(__dirname, '../public/src/');
server.use('/', express.static(pathPublic, { index: 'index.html' }));
server.use('/index', express.static(pathPublic, { index: 'index.html' }));
server.use('/product', express.static(pathPublic, { index: 'thestore.html' }));
server.use('/product/:productKey', express.static(pathPublic, { index: 'productdetail.html' }));
server.use('/search', express.static(pathPublic, { index: 'search.html' }));
server.use('/contact', express.static(pathPublic, { index: 'contact.html' }));

var pathAdmin = path.join(__dirname, '../client/src/');
server.use('/admin', express.static(pathAdmin, { index: 'index.html' }));
server.use('/app', express.static(path.join(pathAdmin, 'app')));
server.use('/img', express.static(path.join(pathAdmin, 'img')));
server.use('/libs', express.static(path.join(pathAdmin, 'libs')));

/**
 * Login & Authenticate by Azure Active Directory
*/
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

server.get('/loginad', function (req, res, next) {
	passport.authenticate('azuread-openidconnect', {
        response: res,
        resourceURL: aadConfig.resourceURL,
        customState: 'my_state',
        failureRedirect: '/'
    })(req, res, next);
}, function(req, res){
	console.log('Login was called in the Sample');
    res.redirect('/');
});

server.get('/auth/openid/return', function(req, res, next) {
    passport.authenticate('azuread-openidconnect', {
		response: res,
		failureRedirect: '/'  
    })(req, res, next);
}, function(req, res) {
    console.log('We received a return from AzureAD.');
	res.redirect('/');
});

server.post('/auth/openid/return', function(req, res, next) {
    passport.authenticate('azuread-openidconnect', {
		response: res,
        failureRedirect: '/'
    })(req, res, next);
}, function(req, res) {
	console.log('We received a return from AzureAD.');
    res.redirect('/');
});

server.get('/logout', function(req, res) {
	req.session.destroy(function(err) {
		req.logOut();
		res.redirect(aadConfig.destroySessionUrl);
	});
});

// export
module.exports = server;