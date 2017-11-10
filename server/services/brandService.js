const _ = require('lodash');
const dbContext = require('../lib/dbContext');

// Constructor
const Factory = function(){	
}

Factory.prototype.getList = async function (query) {
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
			FROM Brand
			WHERE Deleted <> 1
		`;
		let totalRows = (await dbContext.queryItem(sqlTotal)).Total;

		// get data
		let sqlQuery = `
			SELECT BrandId, BrandKey, BrandName, Description
			FROM Brand
			WHERE Deleted <> 1
			ORDER BY BrandId DESC
			LIMIT :Offset, :Limit
		`;
		let brands = await dbContext.queryList(sqlQuery, {
			Offset: PageOffset,
            Limit: PageSize
		});

		let result = {
            HitsTotal: parseInt(totalRows),
            PageTotal: parseInt(Math.ceil(totalRows / PageSize)),
            PageSize: parseInt(PageSize),
            PageCurrent: parseInt(PageCurrent) + 1,
            PageData: brands
        }
        return result;
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

Factory.prototype.createBrand = function (brand) {
	return true;
}

Factory.prototype.updateBrand = function (brand) {
	return true;
}

Factory.prototype.deleteBrand = function (brand) {
	return true;
}

// Export
module.exports = new Factory;
