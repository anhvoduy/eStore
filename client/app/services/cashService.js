(function () {
    'use strict';
    app.factory('cashService', cashService);
    cashService.$inject = ['$http', '$q', 'baseService'];
    function cashService($http, $q, baseService) {                
        // constructor
        var cashService = function () {            
        }
        cashService.prototype = new baseService('api/transaction');
        cashService.prototype.constructor = cashService;
        
        // methods
        cashService.prototype.getCashIn = function (pageCurrent, pageSize) {
            var url = String.format('{0}/cashin/items', this.api);
            var params = {
                PageCurrent: pageCurrent,
                PageSize: pageSize
            };

            var q = $q.defer();
            this.getData(url, params).then(function (result) {
                if(result.PageData && result.PageData.length > 0){
                    angular.forEach(result.PageData, function(item){
                        item.TransactionDate = moment(item.TransactionDate).format('DD/MM/YYYY');
                    });
                };
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }
        
        cashService.prototype.getCashOut = function (pageCurrent, pageSize) {
            var url = String.format('{0}/cashout/items', this.api);
            var params = {
                PageCurrent: pageCurrent,
                PageSize: pageSize
            };

            var q = $q.defer();
            this.getData(url, params).then(function (result) {
                if(result.PageData && result.PageData.length > 0){
                    angular.forEach(result.PageData, function(item){
                        item.TransactionDate = moment(item.TransactionDate).format('DD/MM/YYYY');
                    });
                };
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }

        cashService.prototype.getCashById = function (transactionId) {
            var url = String.format('{0}/items/{1}', this.api, transactionId);

            var q = $q.defer();
            this.getData(url).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }

        cashService.prototype.createCash = function (cash) {
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
		
		cashService.prototype.updateCash = function (cash) {
            var url = String.format('{0}/update', this.api);

            var q = $q.defer();
            this.update(url, cash).then(function (result) {                
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }
		
		cashService.prototype.deleteCash = function (cashId) {
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