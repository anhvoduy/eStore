﻿/*
200 OK Standard response for successful HTTP requests
201 Created Request has been fulfilled.New resource created
204 No Content Request processed.No content returned
301 Moved Permanently This and all future requests directed to the given URI
304 Not Modified Resource has not been modified since last requested
400 Bad Request Request cannot be fulfilled due to bad syntax
401 Unauthorized Authentication is possible, but has failed
403 Forbidden Server refuses to respond to request
404 Not Found Requested resource could not be found
500 Internal Server Error Generic error message when server fails
501 Not Implemented Server does not recognize method or lacks ability to fulfill
503 Service Unavailable Server is currently unavailable
*/

// Constructor
var constant = function () { 
}

constant.transactionType = {
	cashIn: 'CASHIN',
	cashOut: 'CASHOUT',
	stockIn: 'STOCKIN',
	stockOut: 'STOCKOUT',
	journal: 'JOURNAL',
};

// Success Lists
constant.Success_Authentication = { code: 'SUCCESS_UNAUTHENTICATION', message: 'Login is success.' };

constant.Success_Cash_Create = { code: 'SUCCESS_CASH_CREATE', message: 'Create Cash is success.' };
constant.Success_Cash_Update = { code: 'SUCCESS_CASH_UPDATE', message: 'Update Cash is success.' };
constant.Success_Cash_Delete = { code: 'SUCCESS_CASH_DELETE', message: 'Delete Cash is success.' };

constant.Success_Stock_Create = { code: 'SUCCESS_STOCK_CREATE', message: 'Create Stock is success.' };
constant.Success_Stock_Update = { code: 'SUCCESS_STOCK_UPDATE', message: 'Update Stock is success.' };
constant.Success_Stock_Delete = { code: 'SUCCESS_STOCK_DELETE', message: 'Delete Stock is success.' };

constant.Success_Brand_Create = { code: 'SUCCESS_BRAND_CREATE', message: 'Create Brand is success.' };
constant.Success_Brand_Update = { code: 'SUCCESS_BRAND_UPDATE', message: 'Update Brand is success.' };
constant.Success_Brand_Delete = { code: 'SUCCESS_BRAND_DELETE', message: 'Delete Brand is success.' };

// Export
module.exports = constant;