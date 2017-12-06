'use strict';
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

// Error Lists
ErrorHelper.ERROR_CONNECTION = { code: 'ERROR_CONNECTION', message: 'Error: the current connection is closed or undefined.' };


// Export
module.exports = ErrorHelper;