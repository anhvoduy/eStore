// Constructor
var errorHelper = function () { 
}

errorHelper.prototype.errorHandler = function (error) {	
    var _error = {
        code: error.code,
        message: error.message,
    }
	return _error;
}

// Error Lists
errorHelper.prototype.Error_Wrong_Authentication = { code: 'ERROR_AUTHENTICATION', message: 'Username and Password is invalid.' };
errorHelper.prototype.Error_Existed_BrandId = { code: 'ERROR_BRANDID', message: 'Brand Id does not existed.' };
errorHelper.prototype.Error_Existed_ProductId = { code: 'ERROR_PRODUCTID', message: 'Product Id does not existed.' };
errorHelper.prototype.Error_Existed_UserId = { code: 'ERROR_USERID', message: 'User Id does not existed.' };
errorHelper.prototype.Error_Existed_Email = { code: 'ERROR_EMAIL', message: 'Email Account does not existed.' };

errorHelper.prototype.Error_Invalid_Rating = { code: 'ERROR_VALID_RATING', message: "Rating is invalid" };
errorHelper.prototype.Error_Invalid_Email = { code: 'ERROR_VALID_EMAIL', message: "Email is invalid" };

errorHelper.prototype.Error_Connection = { code: 'ERROR_CONNECTION', message: 'Error: the current connection is closed or undefined.' };

// Export
module.exports = new errorHelper;