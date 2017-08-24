const Q = require('q');
const _ = require('lodash');
const dbHelper = require('../config/dbHelper');

// Constructor
const Factory = function () { 
}

Factory.prototype.getProducts = function (ctx, pageIndex) {
	var sql = dbHelper.prepareQueryCommand("CALL sp_product_paging(?);", [pageIndex]);
	return ctx.queryCommand(sql);
}

Factory.prototype.getProductById = function (ctx, productId) {
	var sql = dbHelper.prepareQueryCommand(
		"SELECT prod.ProductId, prod.ProductName, prod.Description, " +
		"		prod.BrandId, bra.Name AS BrandName, " + 
		"       prod.Price, prod.Colour, prod.Created, prod.Status, prod.LatestReviewInfo " +	
		"FROM Product prod inner join tblbrand bra " + 	
		"WHERE prod.brandId = bra.brandId AND prod.productId = ? ", [productId]);
	return ctx.queryCommand(sql);
}

Factory.prototype.getProductsByBrand = function (ctx, brandId) {
	var sql = dbHelper.prepareQueryCommand(
		"SELECT prod.ProductId, prod.ProductName, prod.Description,	" +
		"		prod.Price, prod.Colour, prod.Created, prod.Status, " +
        "		prod.BrandId, bra.Name AS BrandName, prod.LatestReviewInfo " +
		"FROM Product prod inner join tblbrand bra " +
		"WHERE bra.brandId = prod.brandId AND bra.brandId = ? " +
		"ORDER BY prod.ProductId DESC ", [brandId]);
	return ctx.queryCommand(sql);
}

Factory.prototype.createReview = function (ctx, review) {
    var sqlCreateReview = dbHelper.prepareQueryCommand(
        "INSERT INTO Review(Name, Rating, Comment, ProductId, Email, Author, Editor, Deleted)VALUES(?, ?, ?, ?, ?, ?, ?, 0)",
        [review.Name, review.Rating, review.Comment, review.ProductId, review.Email, 'SYSTEM', 'SYSTEM']
    );

    var sqlUpdateProduct = dbHelper.prepareQueryCommand(
        "UPDATE Product SET LatestReviewInfo = ? WHERE ProductId = ?",
        [JSON.stringify(review), review.ProductId]
    );

    return Q.when()
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
module.exports = new Factory;