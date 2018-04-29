'use strict',
/*
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

const CONSTANT = { 
	TRANSACTIONTYPE: {
		CASHIN: 'CASHIN',
		CASHOUT: 'CASHOUT',
		STOCKIN: 'STOCKIN',
		STOCKOUT: 'STOCKOUT',
		JOURNAL: 'JOURNAL'
	},
	STATUS: {
		DELETED: 1,
		ACTIVE: 2,
		PENDING: 3,
		INACTIVE: 4
	},
	USERTYPES: {
		USER: 'USER',
		ADMIN: 'ADMIN',
		VISITOR: 'VISITOR'
	},
	PRODUCT_STATUS: {
		NEW: 'NEW',
		IN: 'IN',
		OUT: 'OUT'	
	},
	ACCOUNT_TYPE: {
		DEBIT: 'DR',
		CREDIT: 'CR'
	},
	ACCOUNT_TYPE_LIST: [
		{ Key: 'DR', Value: 'Debit' },
		{ Key: 'CR', Value: 'Credit' }
	],
	UPLOAD_FILE = {
		FILE_SIZE: 1048576
	},

	/** -------------Success Lists -------------*/
	SUCCESS_AUTHENTICATION: { 
		code: 'SUCCESS_AUTHENTICATION', 
		message: 'Authentication is success.' 
	},
	SUCCESS_LOGIN: { 
		code: 'SUCCESS_LOGIN', 
		message: 'Login is success.' 
	},
	SUCCESS_LOGOUT: { 
		code: 'SUCCESS_LOGOUT', 
		message: 'Logout is success.' 
	},

	SUCCESS_ACCOUNT_CREATE: { code: 'SUCCESS_ACCOUNT_CREATE', message: 'Create Account is success.' },
	SUCCESS_ACCOUNT_UPDATE: { code: 'SUCCESS_ACCOUNT_UPDATE', message: 'Update Account is success.' },
	SUCCESS_ACCOUNT_DELETE: { code: 'SUCCESS_ACCOUNT_DELETE', message: 'Delete Account is success.' },

	SUCCESS_CASH_CREATE: { code: 'SUCCESS_CASH_CREATE', message: 'Create Cash is success.' },
	SUCCESS_CASH_UPDATE: { code: 'SUCCESS_CASH_UPDATE', message: 'Update Cash is success.' },
	SUCCESS_CASH_DELETE: { code: 'SUCCESS_CASH_DELETE', message: 'Delete Cash is success.' },

	SUCCESS_STOCKIN_CREATE: { code: 'SUCCESS_STOCKIN_CREATE', message: 'Create StockIn is success.' },
	SUCCESS_STOCKIN_UPDATE: { code: 'SUCCESS_STOCKIN_UPDATE', message: 'Update StockIn is success.' },
	SUCCESS_STOCKIN_DELETE: { code: 'SUCCESS_STOCKIN_DELETE', message: 'Delete StockIn is success.' },

	SUCCESS_STOCKOUT_CREATE: { code: 'SUCCESS_STOCKOUT_CREATE', message: 'Create StockOut is success.' },
	SUCCESS_STOCKOUT_UPDATE: { code: 'SUCCESS_STOCKOUT_UPDATE', message: 'Update StockOut is success.' },
	SUCCESS_STOCKOUT_DELETE: { code: 'SUCCESS_STOCKOUT_DELETE', message: 'Delete StockOut is success.' },

	SUCCESS_BRAND_CREATE: { code: 'SUCCESS_BRAND_CREATE', message: 'Create Brand is success.' },
	SUCCESS_BRAND_UPDATE: { code: 'SUCCESS_BRAND_UPDATE', message: 'Update Brand is success.' },
	SUCCESS_BRAND_DELETE: { code: 'SUCCESS_BRAND_DELETE', message: 'Delete Brand is success.' },

	SUCCESS_PRODUCT_CREATE: { code: 'SUCCESS_PRODUCT_CREATE', message: 'Create Product is success.' },
	SUCCESS_PRODUCT_UPDATE: { code: 'SUCCESS_PRODUCT_UPDATE', message: 'Update Product is success.' },
	SUCCESS_PRODUCT_DELETE: { code: 'SUCCESS_PRODUCT_DELETE', message: 'Delete Product is success.' },

	SUCCESS_USER_CREATE: { code: 'SUCCESS_USER_CREATE', message: 'Create User is success.' },
	SUCCESS_USER_UPDATE: { code: 'SUCCESS_USER_UPDATE', message: 'Update User is success.' },
	SUCCESS_USER_DELETE: { code: 'SUCCESS_USER_DELETE', message: 'Delete User is success.' },

	/** -------------Error Lists -------------*/
	ERROR_UNAUTHORIZED: { code: 'ERROR_UNAUTHORIZED', message: 'User is not authorized.' },
	ERROR_UNAUTHENTICATION: { code: 'ERROR_UNAUTHENTICATION', message: 'Username and Password is invalid.' },
	ERROR_CONNECTION: { code: 'ERROR_CONNECTION', message: 'Error: the current connection is closed or undefined.' },
	ERROR_NOT_EXIST_TRANSACTIONID: { code: 'ERROR_NOT_EXIST_TRANSACTIONID', message: 'Cash Id does not existed.' },
	ERROR_NOT_EXIST_BRANDID: { code: 'ERROR_NOT_EXIST_BRANDID', message: 'Brand Id does not existed.' },
	ERROR_NOT_EXIST_PRODUCTID: { code: 'ERROR_NOT_EXIST_PRODUCTID', message: 'Product Id does not existed.' },
	ERROR_NOT_EXIST_USERID: { code: 'ERROR_NOT_EXIST_USERID', message: 'User Id does not existed.' },
	ERROR_NOT_EXIST_EMAIL: { code: 'ERROR_NOT_EXIST_EMAIL', message: 'Email Account does not existed.' },
	ERROR_INVALID_RATING: { code: 'ERROR_INVALID_RATING', message: "Rating is invalid" },
	ERROR_INVALID_EMAIL: { code: 'ERROR_INVALID_EMAIL', message: "Email is invalid" },

	// User
	MISSING_FIELD_USERKEY: { code: 'MISSING_FIELD_USERKEY', message: 'missing field UserKey.' },
	MISSING_FIELD_USERNAME: { code: 'MISSING_FIELD_USERNAME', message: 'missing field UserName.' },
	MISSING_FIELD_PASSWORD: { code: 'MISSING_FIELD_PASSWORD', message: 'missing field Password.' },
	INVALID_FIELD_USERKEY: { code: 'INVALID_FIELD_USERKEY', message: 'invalid field UserKey.' },

	// Brand
	MISSING_FIELD_BRANDID_BRANDKEY: { code: 'MISSING_FIELD_BRANDID_BRANDKEY', message: 'missing field BrandId or BrandKey.' },
	MISSING_FIELD_BRANDID: { code: 'MISSING_FIELD_BRANDID', message: 'missing field BrandId.' },
	MISSING_FIELD_BRANDKEY: { code: 'MISSING_FIELD_BRANDKEY', message: 'missing field BrandKey.' },
	MISSING_FIELD_BRANDNAME: { code: 'MISSING_FIELD_BRANDNAME', message: 'missing field BrandName.' },

	INVALID_FIELD_BRANDKEY: { code: 'INVALID_FIELD_BRANDKEY', message: 'invalid field BrandKey.' },

	// Product
	MISSING_FIELD_PRODUCTID: { code: 'MISSING_FIELD_PRODUCTID', message: 'missing field ProductId.' },
	MISSING_FIELD_PRODUCTKEY: { code: 'MISSING_FIELD_PRODUCTKEY', message: 'missing field ProductKey.' },
	MISSING_FIELD_PRODUCTCODE: { code: 'MISSING_FIELD_PRODUCTCODE', message: 'missing field ProductCode.' },
	MISSING_FIELD_PRODUCTNAME: { code: 'MISSING_FIELD_PRODUCTNAME', message: 'missing field ProductName.' },
	INVALID_FIELD_PRODUCTKEY: { code: 'INVALID_FIELD_PRODUCTKEY', message: 'invalid field ProductKey.' },

	// Account
	MISSING_FIELD_ACCOUNTKEY: { code: 'MISSING_FIELD_ACCOUNTKEY', message: 'missing field AccountKey.' },
	MISSING_FIELD_ACCOUNTNO: { code: 'MISSING_FIELD_ACCOUNTNO', message: 'missing field AccountNo.' },
	MISSING_FIELD_ACCOUNTNAME: { code: 'MISSING_FIELD_ACCOUNTNAME', message: 'missing field AccountName.' },
	MISSING_FIELD_DEBITORCREDIT: { code: 'MISSING_FIELD_DEBITORCREDIT', message: 'missing field DebitOrCredit.' },
	INVALID_FIELD_ACCOUNTKEY: { code: 'INVALID_FIELD_ACCOUNTKEY', message: 'invalid field AccountKey.' },

	// Customer
	MISSING_FIELD_CUSTOMER_KEY: { code: 'MISSING_FIELD_CUSTOMER_KEY', message: 'missing field Customer Key.' },
	MISSING_FIELD_CUSTOMER_NAME: { code: 'MISSING_FIELD_CUSTOMER_NAME', message: 'missing field Customer Name.' },
	MISSING_FIELD_CUSTOMER_ADDRESS: { code: 'MISSING_FIELD_CUSTOMER_ADDRESS', message: 'missing field Customer Address.' },
	MISSING_FIELD_CUSTOMER_EMAIL: { code: 'MISSING_FIELD_CUSTOMER_EMAIL', message: 'missing field Customer Email.' },
	INVALID_FIELD_CUSTOMER_KEY: { code: 'INVALID_FIELD_CUSTOMER_KEY', message: 'invalid field Customer Key.' },

	COLOR_LIST: [
		{ ColorCode: 'NoColor', ColorName: 'No Color' },
		{ ColorCode: 'Red', ColorName: 'Red' },
		{ ColorCode: 'Pink', ColorName: 'Pink' },
		{ ColorCode: 'Orange', ColorName: 'Orange' },
		{ ColorCode: 'Yellow', ColorName: 'Yellow' },
		{ ColorCode: 'Green', ColorName: 'Green' },
		{ ColorCode: 'Blue', ColorName: 'Blue' },
		{ ColorCode: 'Purple', ColorName: 'Purple' },
		{ ColorCode: 'Brown', ColorName: 'Brown' },
		{ ColorCode: 'Grey', ColorName: 'Grey' },
		{ ColorCode: 'White', ColorName: 'White' },
		{ ColorCode: 'Black', ColorName: 'Black' },
		{ ColorCode: 'Print', ColorName: 'Print' },
		{ ColorCode: 'Strip', ColorName: 'Strip' },
		{ ColorCode: 'Floral', ColorName: 'Floral' },
		{ ColorCode: 'Check', ColorName: 'Check' },
		{ ColorCode: 'Dot', ColorName: 'Dot' },
		{ ColorCode: 'Gold', ColorName: 'Gold' },
		{ ColorCode: 'Silver', ColorName: 'Silver' },
		{ ColorCode: 'Rosegold', ColorName: 'Rosegold' },
		{ ColorCode: 'Champagne', ColorName: 'Champagne' },
		{ ColorCode: 'Whitegold', ColorName: 'Whitegold' },
		{ ColorCode: 'Platinum', ColorName: 'Platinum' },
		{ ColorCode: 'MultiColor', ColorName: 'Multiple Color' }
	]
};

module.exports = CONSTANT;