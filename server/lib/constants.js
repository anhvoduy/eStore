'use strict';

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

const CONSTANTS = {
	/** ------------- Unchange -------------*/
	TRANSACTIONTYPE: {
		CASHIN	: 'CASHIN',
		CASHOUT	: 'CASHOUT',
		STOCKIN	: 'STOCKIN',
		STOCKOUT: 'STOCKOUT',
		JOURNAL	: 'JOURNAL'
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
	UPLOAD_FILE: {
		FILE_SIZE: 1048576
	},
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
	],

	/** ------------- Authentication -------------*/
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

	/** -------------Error Handle -------------*/
	ERROR_UNAUTHORIZED: { code: 'ERROR_UNAUTHORIZED', message: 'User is not authorized.' },
	ERROR_UNAUTHENTICATION: { code: 'ERROR_UNAUTHENTICATION', message: 'Username and Password is invalid.' },
	

	// User
	MISSING_FIELD_USERKEY: { code: 'MISSING_FIELD_USERKEY', message: 'missing field UserKey.' },
	MISSING_FIELD_USERNAME: { code: 'MISSING_FIELD_USERNAME', message: 'missing field UserName.' },
	MISSING_FIELD_PASSWORD: { code: 'MISSING_FIELD_PASSWORD', message: 'missing field Password.' },
	INVALID_FIELD_USERKEY: { code: 'INVALID_FIELD_USERKEY', message: 'invalid field UserKey.' },

	// Product
	MISSING_FIELD_PRODUCTID: { code: 'MISSING_FIELD_PRODUCTID', message: 'missing field ProductId.' },
	MISSING_FIELD_PRODUCTKEY: { code: 'MISSING_FIELD_PRODUCTKEY', message: 'missing field ProductKey.' },
	MISSING_FIELD_PRODUCTCODE: { code: 'MISSING_FIELD_PRODUCTCODE', message: 'missing field ProductCode.' },
	MISSING_FIELD_PRODUCTNAME: { code: 'MISSING_FIELD_PRODUCTNAME', message: 'missing field ProductName.' },
	INVALID_FIELD_PRODUCTKEY: { code: 'INVALID_FIELD_PRODUCTKEY', message: 'invalid field ProductKey.' },
};

module.exports = CONSTANTS;