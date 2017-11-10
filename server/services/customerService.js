const _ = require('lodash');
const dbContext = require('../lib/dbContext');

// Constructor
const Factory = function () { 
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
			FROM Customer
			WHERE Deleted <> 1
		`;
		let totalRows = (await dbContext.queryItem(sqlTotal)).Total;
		
		// get data
		let sqlQuery = `
			SELECT CustomerId, CustomerName, Description, Email, Mobile, Tel, Fax, Title, Address
			FROM Customer
			WHERE Deleted <> 1
			ORDER BY CustomerId DESC
			LIMIT :Offset, :Limit
		`;
		let data = await dbContext.queryList(sqlQuery, {
			Offset: PageOffset,
            Limit: PageSize
		});
		console.log(data);

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

Factory.prototype.getCustomerById = async function (query) {
	var sql = `
		SELECT CustomerId, CustomerName, Description, Email, Mobile, Tel, Fax, Title, Address
		FROM Customer 
		WHERE CustomerId =:CustomerId AND Deleted <> 1
		ORDER BY CustomerId DESC
	`;
	return dbContext.queryItem(sql, query);
}

Factory.prototype.createCustomer = async function (customer) {
	return true;
}

Factory.prototype.updateCustomer = async function (customer) {
	return true;
}

Factory.prototype.deleteCustomer = async function (customer) {
	return true;
}
// Export
module.exports = new Factory;