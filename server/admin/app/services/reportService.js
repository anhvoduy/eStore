(function () {
    'use strict';
    app.factory('reportService', reportService);
    reportService.$inject = ['$http', '$q', 'baseService'];
    function reportService($http, $q, baseService) {                
        // constructor
        var reportService = function () {            
        }
        reportService.prototype = new baseService('api/report');
        reportService.prototype.constructor = reportService;        
        
        // methods
        reportService.prototype.getCashReport = function (pageCurrent, pageSize, fromDate, toDate) {
            var url = String.format('{0}/cash', this.api);
            var params = {
                PageCurrent: pageCurrent,
                PageSize: pageSize,
                FromDate: fromDate,
                ToDate: toDate
            }

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

        reportService.prototype.getInventoryReport = function (pageCurrent, pageSize, inventoryId, fromDate, toDate) {
            var url = String.format('{0}/inventory', this.api);
            var params = {
                PageCurrent: pageCurrent,
                PageSize: pageSize,
                InventoryId: inventoryId,
                FromDate: fromDate,
                ToDate: toDate
            }

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

        reportService.prototype.getAccountReport = function (pageCurrent, pageSize, accountId, fromDate, toDate) {
            var url = String.format('{0}/account', this.api);
            var params = {
                PageCurrent: pageCurrent,
                PageSize: pageSize,
                AccountId: accountId,
                FromDate: fromDate,
                ToDate: toDate
            }

            var q = $q.defer();
            this.getData(url, params).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }

        return new reportService;
    };
})();