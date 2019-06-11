const dbContext = require('../lib/dbContext');

const Factory = function(){	
}

Factory.prototype.getList = async function (query) {
	try
	{
        let PageCurrent = parseInt(query.PageCurrent) - 1;
        let PageSize = parseInt(query.PageSize);
		let PageOffset = PageCurrent * PageSize;
		
		// get hits total
        let sqlTotal = `
			SELECT COUNT(*) AS Total
			FROM Brand
			WHERE Deleted <> 1
		`;
		let totalRows = (await dbContext.queryItem(sqlTotal)).Total;
		
		// get data
		let sqlQuery = `
			SELECT BrandId, BrandKey, BrandName, Description
			FROM Brand
			WHERE Deleted <> 1
			ORDER BY BrandId ASC
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

// get top 5 brands: 12,14,15,28,29,30
Factory.prototype.getTopBrands = async function () {
	try
	{
		// top 5 brands
		let sqlQuery = `
			SELECT BrandId, BrandKey, BrandName, Description
			FROM Brand
			WHERE Deleted <> 1 AND BrandId IN (12,14,15,28,29,30)
			ORDER BY BrandId ASC
		`;
		return dbContext.queryList(sqlQuery);
	}
	catch(err){
		throw err;
	}
}

Factory.prototype.getBrandById = function (query) {
	let sql = `
		SELECT BrandId, BrandKey, BrandName, Description
		FROM Brand 
		WHERE BrandId=:BrandId AND Deleted <> 1		
	`;
	return dbContext.queryItem(sql, { BrandId: query.BrandId });
}

Factory.prototype.getBrandByKey = function (query) {
	let sql = `
		SELECT BrandId, BrandKey, BrandName, Description
		FROM Brand 
		WHERE BrandKey=:BrandKey AND Deleted <> 1		
	`;
	return dbContext.queryItem(sql, { BrandKey: query.BrandKey });
}

Factory.prototype.create = function (brand) {
	let sql = `
		INSERT INTO Brand(BrandKey, BrandName, Description)
		VALUES(uuid(), :BrandName, :Description)		
	`;
	return dbContext.queryExecute(sql, brand);
}

Factory.prototype.update = function (brand) {
	let sql = `
		UPDATE Brand
		SET BrandName=:BrandName,
			Description=:Description		
		WHERE BrandId=:BrandId
	`;
	return dbContext.queryExecute(sql, brand);
}

Factory.prototype.delete = function (brand) {
	let sql = `UPDATE Brand SET Deleted = 1 WHERE BrandId=:BrandId`;
	return dbContext.queryExecute(sql, brand);
}

// Export
module.exports = new Factory;
