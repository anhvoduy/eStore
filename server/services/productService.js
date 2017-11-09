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

Factory.prototype.getProductById = function (query) {
	var sql = `
		SELECT  P.ProductId, P.ProductName, P.Description,
				P.BrandId, B.BrandName,
		        P.Price, P.Colour, P.Created, P.Status, P.LatestReviewInfo
		FROM Product P INNER JOIN Brand B ON P.BrandId = B.BrandId 
        WHERE   P.ProductId =:ProductId
            AND B.Deleted <> 1
            AND P.Deleted <> 1
    `;
	return dbContext.queryItem(sql, { ProductId: query.ProductId });
}

Factory.prototype.getProductsByBrand = function (query) {
	var sql = `
		SELECT  P.ProductId, P.ProductName, P.Description,
				P.Price, P.Colour, P.Created, P.Status,
        		P.BrandId, B.BrandName, P.LatestReviewInfo
		FROM Product P INNER JOIN Brand B ON P.BrandId = B.BrandId
        WHERE   B.BrandId =:BrandId 
            AND B.Deleted <> 1 
            AND P.Deleted <> 1 
        ORDER BY P.ProductId DESC
    `;
	return dbContext.queryList(sql, { BrandId: query.BrandId });
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