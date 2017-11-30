const _ = require('lodash');

const validator = function () { 
}

validator.prototype.validateRating = function (rating) {
    var _rating = parseInt(rating);
    if (_rating > 0 && _rating < 10) return true;
    else return false;
}

validator.prototype.validateEmail = function (email) {
    var regex = /\S+@\S+\.\S+/;
    if (regex.test(email)) return true;
    else return false;
}

validator.prototype.validateNumber = function (value) {
    return true;
}

validator.prototype.validateDate = function (value) {
    return true;
}

validator.prototype.validateString = function (value) {
    return true;
}

// Export
module.exports = new validator;
