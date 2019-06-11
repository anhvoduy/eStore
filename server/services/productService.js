const dbContext = require('../lib/dbContext');

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
        let OrderBy = (query.OrderBy != undefined && query.OrderBy == 'DESC') ? 'DESC': 'ASC';
        
        // get hits total
        let sqlTotal = `SELECT COUNT(*) AS Total FROM Product WHERE Deleted <> 1`;
        let totalRows = (await dbContext.queryItem(sqlTotal)).Total;

        // get data
        var sqlQuery = `
            SELECT  P.ProductId, P.ProductKey, P.ProductName, P.SizeList, P.Description,
                    P.Price, P.ColorCode, P.Created, P.Status, P.LatestReviewInfo, P.ProductImage
            FROM Product P
            WHERE P.Deleted <> 1
            ORDER BY P.ProductId ${OrderBy}
            LIMIT :Offset, :Limit
        `;
        let data = await dbContext.queryList(sqlQuery, { Offset: PageOffset, Limit: PageSize });
        
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
            SELECT  P.ProductId, P.ProductKey, P.ProductName, P.SizeList, P.Description, 
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

// most liked: 3 latest product by Updated
Factory.prototype.getProductMostLiked = async function () {
    try
    {
        var sql = `
            SELECT  P.ProductId, P.ProductKey, P.ProductName, P.SizeList, P.Description, 
                    P.BrandId, B.BrandName,
                    P.Price, P.ColorCode, P.Created, P.Status, P.LatestReviewInfo, P.ProductImage 
            FROM Product P INNER JOIN Brand B ON P.BrandId = B.BrandId 
            WHERE   B.Deleted <> 1  AND P.Deleted <> 1
            ORDER BY P.Updated DESC
            LIMIT 3
        `;
        return dbContext.queryList(sql);
    }
    catch(err){
        throw err;
    }
}

Factory.prototype.getProductByKey = function (query) {
	var sql = `
		SELECT  P.ProductId, P.ProductKey, P.ProductName, P.SizeList, P.Description, 
				P.BrandId, B.BrandName,
		        P.Price, P.ColorCode, P.Created, P.Status, P.LatestReviewInfo, P.ProductImage 
		FROM Product P INNER JOIN Brand B ON P.BrandId = B.BrandId 
        WHERE   P.ProductKey =:ProductKey
            AND B.Deleted <> 1
            AND P.Deleted <> 1
    `;
	return dbContext.queryItem(sql, { ProductKey: query.ProductKey });
}

Factory.prototype.getProductsByBrand = async function (query) {
    try
    {
        let TotalSize = 0;
        let PageTotal = 0;
        let PageCurrent = parseInt(query.PageCurrent) - 1;
        let PageSize = parseInt(query.PageSize);
        let PageOffset = PageCurrent * PageSize;

        // get hits total
        let sqlTotal = `
            SELECT  COUNT(P.ProductId) AS Total
            FROM Product P INNER JOIN Brand B ON P.BrandId = B.BrandId
            WHERE   B.BrandId =:BrandId 
                AND B.Deleted <> 1 
                AND P.Deleted <> 1 
            ORDER BY P.ProductId DESC            
        `;
        let totalRows = (await dbContext.queryItem(sqlTotal, { BrandId: parseInt(query.BrandId) })).Total;

        let sql = `
            SELECT  P.ProductId, P.ProductKey, P.ProductName, P.SizeList, P.Description, 
                    P.Price, P.ColorCode, P.Created, P.Status,
                    P.BrandId, B.BrandName, P.LatestReviewInfo, P.ProductImage 
            FROM Product P INNER JOIN Brand B ON P.BrandId = B.BrandId
            WHERE   B.BrandId =:BrandId 
                AND B.Deleted <> 1 
                AND P.Deleted <> 1 
            ORDER BY P.ProductId DESC
            LIMIT :Offset, :Limit
        `;
        let data = await dbContext.queryList(sql, { BrandId: parseInt(query.BrandId), Offset: PageOffset, Limit: PageSize });

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

Factory.prototype.createReview = async function (review) {
    try
    {
        var sqlCreateReview = `
            INSERT INTO Review(Name, Rating, Comment, ProductId, Email, Author, Editor)
            VALUES(:Name, :Rating, :Comment, :ProductId, :Email, :Author, :Editor)
        `;

        // var sqlUpdateProduct = `
        //     UPDATE Product SET LatestReviewInfo =:Comment WHERE ProductId =:ProductId 
        // `;
        return dbContext.queryExecute(sqlCreateReview, {
            Name: review.UserName,
            Rating: review.Rating, 
            Comment: review.Comment, 
            ProductId: review.ProductId, 
            Email: review.Email, 
            Author: review.UserName,
            Editor: review.UserName
        });
    }
    catch(err){
        throw err;
    }
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

Factory.prototype.saveImage = async function (productId, productImage) {
    try
    {
        let sql = `UPDATE Product SET ProductImage=:ProductImage WHERE ProductId=:ProductId`;
        return dbContext.queryExecute(sql, { ProductId: productId, ProductImage: productImage });
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

Factory.prototype.getCategories = async function () {
    try
    {
        const sql = `SELECT * FROM Category WHERE Deleted <> 1`;
        const data = await dbContext.queryList(sql);
        return data;
    }
    catch(err){
        throw err;
    }	
}

// Export
module.exports = new Factory;
