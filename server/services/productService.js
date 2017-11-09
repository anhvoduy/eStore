const Q = require('q');
const _ = require('lodash');
const dbHelper = require('../lib/dbHelper');
const dbContext = require('../lib/dbContext');

// Constructor
const Factory = function () { 
}

Factory.prototype.getProducts = function () {	
    var sql = `
		SELECT  P.ProductId, P.ProductName, P.Description, 
		        P.BrandId, B.BrandName,
		        P.Price, P.Colour, P.Created, P.Status, P.LatestReviewInfo 
		FROM Product P INNER JOIN Brand B
        WHERE P.BrandId = B.BrandId
        ORDER BY P.ProductId DESC
        LIMIT 5000
    `;
	return dbContext.queryList(sql);
}

Factory.prototype.getProductById = function (ctx, productId) {
	var sql = dbHelper.prepareQueryCommand(`
		SELECT  P.ProductId, P.ProductName, P.Description,
				P.BrandId, B.BrandName,
		        P.Price, P.Colour, P.Created, P.Status, P.LatestReviewInfo
		FROM Product P INNER JOIN Brand B
        WHERE P.brandId = B.brandId AND P.productId = ? 
    `, [productId]);
	return ctx.queryCommand(sql);
}

Factory.prototype.getProductsByBrand = function (ctx, brandId) {
	var sql = dbHelper.prepareQueryCommand(`
		SELECT P.ProductId, P.ProductName, P.Description,
				P.Price, P.Colour, P.Created, P.Status,
        		P.BrandId, B.BrandName, P.LatestReviewInfo
		FROM Product P INNER JOIN Brand B
		WHERE B.brandId = P.brandId AND B.brandId = ?
        ORDER BY P.ProductId DESC
    `, [brandId]);
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