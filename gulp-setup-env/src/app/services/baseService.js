(function () {
    'use strict';
    app.factory('baseService', baseService);
    baseService.$inject = ['$http', '$q', '$location'];
    
    function baseService($http, $q, $location) {
        // constructor
		var baseService = function (api) {			
			var baseUrl = String.format('{0}://{1}:{2}', $location.protocol(), $location.host(), $location.port());
			this.api = String.format('{0}/{1}', baseUrl, api);
		}

        // GET()
        baseService.prototype.getData = function (url) {
            var q = $q.defer();
            $http({
                url: url,
                method: 'GET'
            }).success(function (result) {
                q.resolve(result);
			}).error(function (error, status) {
				writeLogs(error, status);
                q.reject(error);
            });
            return q.promise;
        }                
        
        // POST()
        baseService.prototype.add = function (url, data) {
            var q = $q.defer();
            $http({
                url: url,
                method: 'POST',
                data: data
            }).success(function (result) {
                q.resolve(result);               
			}).error(function (error, status) {
				writeLogs(error, status);
                q.reject(error);
            });
            return q.promise;
        }
        
        // PUT()
        baseService.prototype.update = function (url, data) {            
            var q = $q.defer();
            $http({
                url: url,
                data: data,
                method: 'PUT'
            }).success(function (result) {
                q.resolve(result);
			}).error(function (error, status) {
				writeLogs(error, status);
                q.reject(error);
            });
            return q.promise;
        }
        
        // DELETE()
        baseService.prototype.delete = function (url) {            
            var q = $q.defer();
            $http({
                url: url,
                method: 'DELETE'
            }).success(function (result) {
                q.resolve(result);
			}).error(function (error, status) {
				writeLogs(error, status);
                q.reject(error);
            });
            return q.promise;
        }

        // Write Logs
        var writeLogs = function (error, status) {
			console.log(String.format('{0}: {1}', status , error));
        }
        
        return baseService;
    };
})();