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
        reportService.prototype.getCashReport = function (fromDate, toDate) {
            var url = String.format('{0}/cash', this.api);
            var params = {
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

        reportService.prototype.getInventoryReport = function (inventoryKey, fromDate, toDate) {
            var url = String.format('{0}/inventory', this.api);
            var params = {
                InventoryKey: inventoryKey,
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