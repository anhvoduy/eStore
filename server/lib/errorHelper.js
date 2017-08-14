// Constructor
const errorHelper = function () { 
}

errorHelper.errorHandler = function (error) {	
    const _error = {
        code: error.code,
        message: error.message,
    }
    console.log(_error);
	return _error;
}

// Error Lists
errorHelper.Error_UnAuthorized = { code: 'ERROR_UNAUTHORIZED', message: 'User is not authorized.' };
errorHelper.Error_UnAuthentication = { code: 'ERROR_UNAUTHENTICATION', message: 'Username and Password is invalid.' };

errorHelper.Error_Not_Exist_TransactionId = { code: 'ERROR_NOT_EXIST_TRANSACTIONID', message: 'Cash Id does not existed.' };
errorHelper.Error_Not_Exist_BrandId = { code: 'ERROR_NOT_EXIST_BRANDID', message: 'Brand Id does not existed.' };
errorHelper.Error_Not_Exist_ProductId = { code: 'ERROR_PRODUCTID', message: 'Product Id does not existed.' };
errorHelper.Error_Not_Exist_UserId = { code: 'ERROR_USERID', message: 'User Id does not existed.' };
errorHelper.Error_Not_Exist_Email = { code: 'ERROR_EMAIL', message: 'Email Account does not existed.' };

errorHelper.Error_Invalid_Rating = { code: 'ERROR_VALID_RATING', message: "Rating is invalid" };
errorHelper.Error_Invalid_Email = { code: 'ERROR_VALID_EMAIL', message: "Email is invalid" };

errorHelper.Error_Connection = { code: 'ERROR_CONNECTION', message: 'Error: the current connection is closed or undefined.' };

// Export
module.exports = errorHelper;