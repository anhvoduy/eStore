const router = require('express').Router();
const productService = require('../services/productService');

// Router
router.get('/items', async function (req, res, next) {
	try
	{
		const categories = await productService.getCategories();
		return res.status(200).json(categories);
	}
	catch(err){
		next(err);
	}
});

module.exports = router;