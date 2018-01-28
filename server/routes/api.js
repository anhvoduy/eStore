var express = require('express');
var router = express.Router();
var cors = require('cors')
var jwt = require('jsonwebtoken');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var multer = require('multer');
var auth = require('../config/auth');
var config = require('../config/config');
var CONSTANT = require('../lib/constant');

// sample redis cache
// var cache = require('express-redis-cache')();
// var responseTime = require('response-time');
// var axios = require('axios');
// var redis = require('redis');




// routers: use to test
router.get('/', function (req, res, next) {
    res.json({ message: 'eAccounting method GET() is success' });
    console.log('%s %s — %s', (new Date).toString(), req.method, req.url);	
    next();
});

router.post('/', function (req, res, next) {
    res.json({ message: 'eAccounting method POST() is success' });
    console.log('%s %s — %s', (new Date).toString(), req.method, req.url);
    next();
});

router.get('/newsfeed', cors(), function (req, res, next){
	var result = { code: 'SUCCESS_NEWSFEED', message: 'request newsfeed with cors is success.' }
	res.status(200).json(result);
	next();
})



// routers TEST REDIS
// create a new redis client and connect to our local redis instance
//var client = redis.createClient();

// if an error occurs, print it to the console
// client.on('error', function (err) {
//     console.log("Error " + err);
// });


// call the GitHub API to fetch information about the user's repositories
// function getUserRepositories(user) {
//     var githubEndpoint = 'https://api.github.com/users/' + user + '/repos' + '?per_page=100';
//     console.log('-----URL:' + githubEndpoint);
//     return axios.get(githubEndpoint);
// }


// add up all the stars and return the total number of stars across all repositories
// function computeTotalStars(repositories) {
//     return repositories.data.reduce(function (prev, cur) {
// 		console.log('- full_name:', cur.full_name);
// 		console.log('- stargazers_count:', cur.stargazers_count);
//         return prev + cur.stargazers_count
//     }, 0);
// }

// if a user visits /api/facebook, return the total number of stars 'facebook'
// has across all it's public repositories on GitHub
// router.get('/:username', function(req, res) {
// 	// get the username parameter in the URL
// 	// i.e.: username = "coligo-io" in http://localhost:5000/api/coligo-io
// 	var username = req.params.username;	
// 	console.log('-----username:' + username);

// 	// use the redis client to get the total number of stars associated to that
//   	// username from our redis cache
// 	client.get(username, function(err, result) {
// 		if(result){
// 			// the result exists in our cache - return it to our user immediately
//         	res.send({ "totalStars": result, "source": "redis cache" });			
// 		}else{
// 			// we couldn't find the key "coligo-io" in our cache, so get it from the GitHub API
// 			getUserRepositories(username).then(computeTotalStars).then(function(totalStars){
// 				console.log('- totalStars:', totalStars);
// 				// store the key-value pair (username:totalStars) in our cache with an expiry of 1 minute (60s)
// 				client.setex(username, 60, totalStars);
// 				// return the result to user
// 				res.send({ "totalStars": totalStars, "source": "GitHub API" });					
// 			}).catch(function(result){
// 				if(res.status === 404){
// 					res.send('The GitHub username could not be found. Try "coligo-io" as an example!');
// 				}else{
// 					res.send(result);
// 				}
// 			});
// 		}
// 	});
// });





// routers: use to login/logout
router.post('/login', function (req, res, next) {
	passport.authenticate('local', function (err, result) {
		if (err) return next(err);

		if (!result.success) {
			//console.log('Login is failed ...');
			res.status(404).json({
				success: false,
				message: { code: 'ERROR_UNAUTHENTICATION', message: 'Username and Password is invalid.' }
			});
		} 
		else {
			//console.log('Login is success ...');
			var token = jwt.sign(result.user, config.secretKey, { expiresIn: 60 * 60 * 24 * 1 });
			res.status(200).json({
				success: true,
				message: { code: 'SUCCESS_AUTHENTICATION', message: 'Login is successful.' },
				user: { username: result.user.username, userkey: result.user.userkey, token: token },
			});
		}
	})(req, res, next);
});

router.get('/logout', function (req, res, next) {
	// TO DO: force logout 404
	// console.log('Log out current user ...');	
	next();
});



// sample file upload
const multerConfig = {
	dest: './uploads/sample',
	limits: { fileSize: 1048576 }
};
const uploadProductImage = multer(multerConfig).single('ProductImage');

router.post('/upload', auth.checkAuthentication(), uploadProductImage, async function(req, res, next){
	try
	{
		// req.file is the `ProductImage` file
		let fileName = req.file.filename;
		// req.body will hold the text fields, if there were any
		let product = req.body;
		product.ProductId = parseInt(product.ProductId);
		product.ProductImage = fileName;
		
		if(product){
			console.log(product);
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
