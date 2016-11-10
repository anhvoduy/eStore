(function () {
    'use strict';
    app.factory('cashService', cashService);
    cashService.$inject = ['$http', '$q', 'baseService'];
    function cashService($http, $q, baseService) {                
        // constructor
        var cashService = function () {            
        }
        cashService.prototype = new baseService('api/cash');
        cashService.prototype.constructor = cashService;
        
        // methods
        cashService.prototype.getCashIn = function () {
            var url = String.format('{0}/cashin', this.api);

            var q = $q.defer();
            this.getData(url).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }
        
        cashService.prototype.getCashOut = function () {
            var url = String.format('{0}/cashout', this.api);

            var q = $q.defer();
            this.getData(url).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }

        cashService.prototype.getCashById = function () {
            var url = String.format('{0}/cashout', this.api);

            var q = $q.defer();
            this.getData(url).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }

        cashService.prototype.create = function (cash) {
            var url = String.format('{0}/create', this.api);

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
		
		cashService.prototype.update = function (cash) {
            var url = String.format('{0}/update', this.api);

            var q = $q.defer();
            this.getData(url).then(function (result) {                
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }
		
		cashService.prototype.delete = function (cashId) {
            var url = String.format('{0}/delete', this.api);

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

        return new cashService;
    };
})();