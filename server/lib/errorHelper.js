// Constructor
const ErrorHelper = function () { 
}

ErrorHelper.errorHandler = function (error) {	
    let _error = {
        code: error.code,
        message: error.message,
    }
    console.log(_error);
	return _error;
}

// System Errors
ErrorHelper.ERROR_UNAUTHORIZED = { code: 'ERROR_UNAUTHORIZED', message: 'User is not authorized.' };
ErrorHelper.ERROR_UNAUTHENTICATION = { code: 'ERROR_UNAUTHENTICATION', message: 'Username and Password is invalid.' };

ErrorHelper.ERROR_CONNECTION = { code: 'ERROR_CONNECTION', message: 'Error: the current connection is closed or undefined.' };

// Business Errors
ErrorHelper.ERROR_NOT_EXIST_TRANSACTIONID = { code: 'ERROR_NOT_EXIST_TRANSACTIONID', message: 'Cash Id does not existed.' };
ErrorHelper.ERROR_NOT_EXIST_BRANDID = { code: 'ERROR_NOT_EXIST_BRANDID', message: 'Brand Id does not existed.' };
ErrorHelper.ERROR_NOT_EXIST_PRODUCTID = { code: 'ERROR_PRODUCTID', message: 'Product Id does not existed.' };
ErrorHelper.ERROR_NOT_EXIST_USERID = { code: 'ERROR_USERID', message: 'User Id does not existed.' };
ErrorHelper.ERROR_NOT_EXIST_EMAIL = { code: 'ERROR_EMAIL', message: 'Email Account does not existed.' };

ErrorHelper.ERROR_INVALID_RATING = { code: 'ERROR_VALID_RATING', message: "Rating is invalid" };
ErrorHelper.ERROR_INVALID_EMAIL = { code: 'ERROR_VALID_EMAIL', message: "Email is invalid" };

// Export
module.exports = ErrorHelper;