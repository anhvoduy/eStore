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
var CONSTANT = function () { 
}

CONSTANT.TRANSACTIONTYPE = {
	CASHIN: 'CASHIN',
	CASHOUT: 'CASHOUT',
	STOCKIN: 'STOCKIN',
	STOCKOUT: 'STOCKOUT',
	JOURNAL: 'JOURNAL'
};

CONSTANT.STATUS = {
	DELETED: 1,
	ACTIVE: 2,
	PENDING: 3,
	INACTIVE: 4
};

// Success Lists
CONSTANT.Success_Authentication = { code: 'SUCCESS_AUTHENTICATION', message: 'Authentication is success.' };
CONSTANT.Success_Login = { code: 'SUCCESS_LOGIN', message: 'Login is success.' };
CONSTANT.Success_Logout = { code: 'SUCCESS_LOGOUT', message: 'Logout is success.' };

CONSTANT.Success_Account_Create = { code: 'SUCCESS_ACCOUNT_CREATE', message: 'Create Account is success.' };
CONSTANT.Success_Account_Update = { code: 'SUCCESS_ACCOUNT_UPDATE', message: 'Update Account is success.' };
CONSTANT.Success_Account_Delete = { code: 'SUCCESS_ACCOUNT_DELETE', message: 'Delete Account is success.' };

CONSTANT.Success_Cash_Create = { code: 'SUCCESS_CASH_CREATE', message: 'Create Cash is success.' };
CONSTANT.Success_Cash_Update = { code: 'SUCCESS_CASH_UPDATE', message: 'Update Cash is success.' };
CONSTANT.Success_Cash_Delete = { code: 'SUCCESS_CASH_DELETE', message: 'Delete Cash is success.' };

CONSTANT.Success_StockIn_Create = { code: 'SUCCESS_STOCKIN_CREATE', message: 'Create StockIn is success.' };
CONSTANT.Success_StockIn_Update = { code: 'SUCCESS_STOCKIN_UPDATE', message: 'Update StockIn is success.' };
CONSTANT.Success_StockIn_Delete = { code: 'SUCCESS_STOCKIN_DELETE', message: 'Delete StockIn is success.' };

CONSTANT.Success_StockOut_Create = { code: 'SUCCESS_STOCKOUT_CREATE', message: 'Create StockOut is success.' };
CONSTANT.Success_StockOut_Update = { code: 'SUCCESS_STOCKOUT_UPDATE', message: 'Update StockOut is success.' };
CONSTANT.Success_StockOut_Delete = { code: 'SUCCESS_STOCKOUT_DELETE', message: 'Delete StockOut is success.' };

CONSTANT.Success_Brand_Create = { code: 'SUCCESS_BRAND_CREATE', message: 'Create Brand is success.' };
CONSTANT.Success_Brand_Update = { code: 'SUCCESS_BRAND_UPDATE', message: 'Update Brand is success.' };
CONSTANT.Success_Brand_Delete = { code: 'SUCCESS_BRAND_DELETE', message: 'Delete Brand is success.' };

CONSTANT.Success_Product_Create = { code: 'SUCCESS_PRODUCT_CREATE', message: 'Create Product is success.' };
CONSTANT.Success_Product_Update = { code: 'SUCCESS_PRODUCT_UPDATE', message: 'Update Product is success.' };
CONSTANT.Success_Product_Delete = { code: 'SUCCESS_PRODUCT_DELETE', message: 'Delete Product is success.' };

CONSTANT.Success_User_Create = { code: 'SUCCESS_USER_CREATE', message: 'Create User is success.' };
CONSTANT.Success_User_Update = { code: 'SUCCESS_USER_UPDATE', message: 'Update User is success.' };
CONSTANT.Success_User_Delete = { code: 'SUCCESS_USER_DELETE', message: 'Delete User is success.' };

CONSTANT.MISSING_FIELD_USERKEY = { code: 'MISSING_FIELD_USERKEY', message: 'missing field UserKey.' };
CONSTANT.MISSING_FIELD_USERNAME = { code: 'MISSING_FIELD_USERNAME', message: 'missing field UserName.' };

CONSTANT.MISSING_FIELD_BRANDKEY = { code: 'MISSING_FIELD_BRANDKEY', message: 'missing field BrandKey.' };
CONSTANT.MISSING_FIELD_BRANDNAME = { code: 'MISSING_FIELD_BRANDNAME', message: 'missing field BrandName.' };

CONSTANT.INVALID_FIELD_USERKEY = { code: 'INVALID_FIELD_USERKEY', message: 'invalid field UserKey.' };

CONSTANT.INVALID_FIELD_BRANDKEY = { code: 'INVALID_FIELD_BRANDKEY', message: 'invalid field BrandKey.' };

CONSTANT.COLOR_LIST = [
	{ Key: 'NoColor', Label: 'No Color' },
	{ Key: 'Red', Label: 'Red' },
	{ Key: 'Pink', Label: 'Pink' },
	{ Key: 'Orange', Label: 'Orange' },
	{ Key: 'Yellow', Label: 'Yellow' },
	{ Key: 'Green', Label: 'Green' },
	{ Key: 'Blue', Label: 'Blue' },
	{ Key: 'Purple', Label: 'Purple' },
	{ Key: 'Brown', Label: 'Brown' },
	{ Key: 'Grey', Label: 'Grey' },
	{ Key: 'White', Label: 'White' },
	{ Key: 'Black', Label: 'Black' },
	{ Key: 'Print', Label: 'Print' },
	{ Key: 'Strip', Label: 'Strip' },
	{ Key: 'Floral', Label: 'Floral' },
	{ Key: 'Check', Label: 'Check' },
	{ Key: 'Dot', Label: 'Dot' },
	{ Key: 'Gold', Label: 'Gold' },
	{ Key: 'Silver', Label: 'Silver' },
	{ Key: 'Rosegold', Label: 'Rosegold' },
	{ Key: 'Champagne', Label: 'Champagne' },
	{ Key: 'Whitegold', Label: 'Whitegold' },
	{ Key: 'Platinum', Label: 'Platinum' },
	{ Key: 'MultiColor', Label: 'Multiple Color' }
];

// Export
module.exports = CONSTANT;