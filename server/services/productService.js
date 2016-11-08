// Dependencies
var dbHelper = require('../config/dbHelper');
var q = require('q');

// Constructor
var productService = function () { 
}

productService.prototype.getProducts = function (ctx, pageIndex) {
	var sql = dbHelper.prepareQueryCommand("CALL sp_product_paging(?);", [pageIndex]);
	return ctx.queryCommand(sql);
}

productService.prototype.getProductById = function (ctx, productId) {
	var sql = dbHelper.prepareQueryCommand(
		"SELECT prod.ProductId, prod.ProductName, prod.Description, " +
		"		prod.BrandId, bra.Name AS BrandName, " + 
		"       prod.Price, prod.Colour, prod.Created, prod.Status, prod.LatestReviewInfo " +	
		"FROM tblproduct prod inner join tblbrand bra " + 	
		"WHERE prod.brandId = bra.brandId AND prod.productId = ? ", [productId]);
	return ctx.queryCommand(sql);
}

productService.prototype.getProductsByBrand = function (ctx, brandId) {
	var sql = dbHelper.prepareQueryCommand(
		"SELECT prod.ProductId, prod.ProductName, prod.Description,	" +
		"		prod.Price, prod.Colour, prod.Created, prod.Status, " +
        "		prod.BrandId, bra.Name AS BrandName, prod.LatestReviewInfo " +
		"FROM tblproduct prod inner join tblbrand bra " +
		"WHERE bra.brandId = prod.brandId AND bra.brandId = ? " +
		"ORDER BY prod.ProductId DESC ", [brandId]);
	return ctx.queryCommand(sql);
}

productService.prototype.createReview = function (ctx, review) {
    var sqlCreateReview = dbHelper.prepareQueryCommand("INSERT INTO tblreview(Rating, Comment, Created, ProductId, Email, Deleted)VALUES(?, ?, ?, ?, ?, 0)",
        [review.Rating, review.Comment, review.Created, review.ProductId, review.Email]);

    var sqlUpdateProduct = dbHelper.prepareQueryCommand("UPDATE tblProduct SET LatestReviewInfo = ? WHERE ProductId = ?",
        [JSON.stringify(review), review.ProductId]);

    return q.when()
        .then(function () {
            return ctx.beginTransaction();
        }).then(function () {
            return ctx.queryCommand(sqlCreateReview);
        }).then(function () {
            return ctx.queryCommand(sqlUpdateProduct);
        }).then(function () {
            return ctx.commitTransaction();
        }).catch(function (error) {
            ctx.rollbackTransaction();
            throw error;
        });
}

// Export
module.exports = new productService;
