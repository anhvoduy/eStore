// Dependencies
var express = require('express');
var router = express.Router();

// routers: use for testing
router.get('/', function (req, res, next){	
	res.json({ message: 'eCargo method GET() is success' });
	console.log('%s %s — %s', (new Date).toString(), req.method, req.url);	
	return next();
});

// return Router
module.exports = router;
