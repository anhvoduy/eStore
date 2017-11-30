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
			SELECT CustomerId, CustomerKey, CustomerName, Description, Email, Mobile, Tel, Fax, Representative, Title, Address, ImageKey
			FROM Customer
			WHERE Deleted <> 1
			ORDER BY CustomerId DESC
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

Factory.prototype.getCustomerById = async function (query) {
	try
	{
		var sql = `
			SELECT CustomerId, CustomerKey, CustomerName, Description, Email, Mobile, Tel, Fax, Representative, Title, Address, ImageKey
			FROM Customer 
			WHERE CustomerId =:CustomerId AND Deleted <> 1
		`;
		return dbContext.queryItem(sql, query);
	}
	catch(err){
		throw err;
	}	
}

Factory.prototype.getCustomerByKey = async function (query) {
	try
	{
		var sql = `
			SELECT CustomerId, CustomerKey, CustomerName, Description, Email, Mobile, Tel, Fax, Representative, Title, Address, ImageKey
			FROM Customer 
			WHERE CustomerKey =:CustomerKey AND Deleted <> 1
		`;
		return dbContext.queryItem(sql, query);
	}
	catch(err){
		throw err;
	}	
}

Factory.prototype.create = async function (customer) {
	try
	{
		var sql = `
			INSERT INTO Customer(CustomerKey, CustomerName, Description, Email, Mobile, Tel, Fax, Representative, Title, Address)
			VALUES(uuid(),:CustomerName,:Description,:Email,:Mobile,:Tel,:Fax,:Representative,:Title,:Address)
		`;
		return dbContext.queryExecute(sql, customer);
	}
	catch(err){
		throw err;
	}	
}

Factory.prototype.update = async function (customer) {
	try
	{
		var sql = `
			UPDATE Customer
			SET CustomerName=:CustomerName,
				Email=:Email, 
				Mobile=:Mobile, 
				Tel=:Tel, 
				Fax=:Fax,
				Address=:Address,
				Representative=:Representative, 
				Title=:Title, 				
				ImageKey=:ImageKey,
				Description=:Description
			WHERE CustomerId =:CustomerId
		`;
		return dbContext.queryExecute(sql, customer);
	}
	catch(err){
		throw err;
	}
}

Factory.prototype.delete = async function (customerId) {
	try
	{
		var sql = `UPDATE Customer SET Deleted = 1 WHERE CustomerId =:CustomerId`;
		return dbContext.queryExecute(sql, { CustomerId: customerId });
	}
	catch(err){
		throw err;
	}
}

// Export
module.exports = new Factory;
