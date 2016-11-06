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
        cashService.prototype.getCash = function () {
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
        
        cashService.prototype.getCash = function (cashId) {
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