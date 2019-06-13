const router = require('express').Router();
const cors = require('cors')
const jwt = require('jsonwebtoken');
const passport = require('passport');
const OIDCStrategy = require('passport-azure-ad').OIDCStrategy;

const auth = require('../config/auth');
const config = require('../config/config');
const aadConfig = require('../config/aadConfig');
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


// routers: use to login/logout by DB
router.post('/authenticate', function (req, res, next) {
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
