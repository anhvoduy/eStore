(function () {
    'use strict';
    app.factory('userService', userService);
    userService.$inject = ['$q', 'baseService', 'Upload'];
    function userService($q, baseService, Upload) {
        // constructor
        var userService = function () {
        }
        userService.prototype = new baseService('api/user');
        userService.prototype.constructor = userService;
        
        // methods
        userService.prototype.upload = function (imageUrl, userId, userKey) {
            return Upload.upload({
                url: String.format('{0}/upload', this.api),
                data: {
                    UserId: userId,                    
                    ProductImage: imageUrl
                }
            });
        };

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
            var params = {
                UserId: userId
            };
                        
            var q = $q.defer();
            this.getData(url, params).then(function (result) {
                if (result && result.Birthday) {
                    result.Birthday = new Date(moment(result.DateOfBirth));
                }
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }

        userService.prototype.getUserByKey = function (userKey) {
            var url = String.format('{0}/item', this.api);
            var params = {
                UserKey: userKey
            };
                        
            var q = $q.defer();
            this.getData(url, params).then(function (result) {
                if (result && result.Birthday) {
                    result.Birthday = new Date(moment(result.DateOfBirth));
                }
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }

        userService.prototype.getProfile = function (userKey) {
            var url = String.format('{0}/profile', this.api);
            var params = {
                UserKey: userKey
            };
			return this.getData(url, params);
		};
		
		userService.prototype.getMenu = function () {
			var url = String.format('{0}/menu', this.api);						
			return this.getData(url);
        };
        
        userService.prototype.create = function (user) {
            var url = String.format('{0}/create', this.api);
            return this.postData(url, user);
        };
        
        userService.prototype.update = function (user) {
            var url = String.format('{0}/update', this.api);
            return this.postData(url, user);
        };
        
        userService.prototype.delete = function (userId) {
            var url = String.format('{0}/delete', this.api);
            var params = {
                UserId: userId
            };
            return this.postData(url, params);
        };

        return new userService;
    };
})();