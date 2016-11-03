(function () {
    'use strict';
    app.factory('userService', userService);
    userService.$inject = ['$http', '$q', 'baseService'];
    function userService($http, $q, baseService) {                
        // constructor
        var userService = function () {            
        }
        userService.prototype = new baseService('api/user');
        userService.prototype.constructor = userService;
        
        // methods
        userService.prototype.getUsers = function () {
            var url = String.format('{0}/items', this.api);
            
            var q = $q.defer();
            this.getData(url).then(function (result) {
                // extend models               
                angular.forEach(result, function (item) {
                    item.Birthday = moment(item.DateOfBirth).format('DD-MMM-YYYY');
                });
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }
        
        userService.prototype.getUserById = function (userId) {
            var url = String.format('{0}/items/{1}', this.api, userId);
                        
            var q = $q.defer();
            this.getData(url).then(function (result) {
                // extend models
                if (result != undefined) {
                    result.Birthday = new Date(moment(result.DateOfBirth));
                }                
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }                

        userService.prototype.getProfile = function () {
            var url = String.format('{0}/profile', this.api);

            var q = $q.defer();
            this.getData(url).then(function (result) {
                // extend models
                if (result != undefined) {
                    result.Birthday = new Date(moment(result.DateOfBirth));
                }
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }

        return new userService;
    };
})();