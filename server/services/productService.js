const _ = require('lodash');
const dbContext = require('../lib/dbContext');

// Constructor
const Factory = function () {
}

Factory.prototype.getProducts = async function (query) {
    try
    {
        let TotalSize = 0;
        let PageTotal = 0;
        let PageCurrent = parseInt(query.PageCurrent) - 1;
        let PageSize = parseInt(query.PageSize);
        let PageOffset = PageCurrent * PageSize;
        
        // get hits total
        let sqlTotal = `
            SELECT COUNT(*) AS Total
            FROM Product
            WHERE Deleted <> 1
        `;
        let totalRows = (await dbContext.queryItem(sqlTotal)).Total;

        // get data
        var sqlQuery = `
            SELECT  P.ProductId, P.ProductKey, P.ProductName, P.Description, 
                    P.BrandId, B.BrandName,
                    P.Price, P.ColorCode, P.Created, P.Status, P.LatestReviewInfo, P.ProductImage 
            FROM Product P INNER JOIN Brand B
            WHERE P.BrandId = B.BrandId
            ORDER BY P.ProductId ASC
            LIMIT :Offset, :Limit
        `;
        let data = await dbContext.queryList(sqlQuery, {
			Offset: PageOffset,
            Limit: PageSize
        });
        
        let result = {
            HitsTotal: parseInt(totalRows),
            PageTotal: parseInt(Math.ceil(totalRows / PageSize)),
            PageSize: parseInt(PageSize),
            PageCurrent: parseInt(PageCurrent) + 1,
            PageData: data
        }
        return result;
    }
    catch(err){
        throw err;
    }    
}

Factory.prototype.getProductById = async function (query) {
    try
    {
        var sql = `
            SELECT  P.ProductId, P.ProductKey, P.ProductName, P.Description, 
                    P.BrandId, B.BrandName,
                    P.Price, P.ColorCode, P.Created, P.Status, P.LatestReviewInfo, P.ProductImage 
            FROM Product P INNER JOIN Brand B ON P.BrandId = B.BrandId 
            WHERE   P.ProductId =:ProductId
                AND B.Deleted <> 1
                AND P.Deleted <> 1
        `;
        let data = await dbContext.queryItem(sql, { ProductId: query.ProductId });
        return data;
    }
    catch(err){
        throw err;
    }	
}

Factory.prototype.getProductByKey = function (query) {
	var sql = `
		SELECT  P.ProductId, P.ProductKey, P.ProductName, P.Description, 
				P.BrandId, B.BrandName,
		        P.Price, P.ColorCode, P.Created, P.Status, P.LatestReviewInfo, P.ProductImage 
		FROM Product P INNER JOIN Brand B ON P.BrandId = B.BrandId 
        WHERE   P.ProductKey =:ProductKey
            AND B.Deleted <> 1
            AND P.Deleted <> 1
    `;
	return dbContext.queryItem(sql, { ProductKey: query.ProductKey });
}

Factory.prototype.getProductsByBrand = function (query) {
	var sql = `
		SELECT  P.ProductId, P.ProductKey, P.ProductName, P.Description, 
				P.Price, P.ColorCode, P.Created, P.Status,
        		P.BrandId, B.BrandName, P.LatestReviewInfo, P.ProductImage 
		FROM Product P INNER JOIN Brand B ON P.BrandId = B.BrandId
        WHERE   B.BrandId =:BrandId 
            AND B.Deleted <> 1 
            AND P.Deleted <> 1 
        ORDER BY P.ProductId DESC
    `;
	return dbContext.queryList(sql, { BrandId: query.BrandId });
}

Factory.prototype.createReview = function (review) {
    var sqlCreateReview = `
        INSERT INTO Review(Name, Rating, Comment, ProductId, Email, Author, Editor)
        VALUES(:Name, :Rating, :Comment, :ProductId, :Email, :Author, :Editor)
    `;

    var sqlUpdateProduct = `
        UPDATE Product SET LatestReviewInfo =:Comment WHERE ProductId =:ProductId 
    `;
    return true;
}

Factory.prototype.create = async function (product) {
    try
    {
        let sql = `
            INSERT INTO Product(ProductKey, ProductName, Description, BrandId, ColorCode, Price, Status)
            VALUES(uuid(), :ProductName, :Description, :BrandId, :ColorCode, :Price, :Status)
        `;
        return dbContext.queryExecute(sql, product);
    }
    catch(err){
        throw err;
    }
}

Factory.prototype.update = async function (product) {
    try
    {
        let sql = `
            UPDATE Product
            SET ProductName=:ProductName,
                BrandId=:BrandId,
                ColorCode=:ColorCode,
                Price=:Price,
                Description=:Description
            WHERE ProductId=:ProductId
        `;
        return dbContext.queryExecute(sql, product);
    }
    catch(err){
        throw err;
    }
}

Factory.prototype.saveImage = async function (product) {
    try
    {
        let sql = `UPDATE Product SET ProductImage=:ProductImage WHERE ProductId=:ProductId`;
        return dbContext.queryExecute(sql, product);
    }
    catch(err){
        throw err;
    }
}

Factory.prototype.delete = async function (productId) {
    try
    {
        let sql = `UPDATE Product SET Deleted = 1 WHERE ProductId=:ProductId`;
        return dbContext.queryExecute(sql, { ProductId: productId });
    }
    catch(err){
        throw err;
    }
}

// Export
module.exports = new Factory;
