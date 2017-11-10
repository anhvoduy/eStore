(function () {
    'use strict';
    app.factory('customerService', customerService);
    customerService.$inject = ['$q', 'baseService'];
    function customerService($q, baseService) {
        // constructor
        var customerService = function () {
        }
        customerService.prototype = new baseService('api/customer');
        customerService.prototype.constructor = customerService;                

        // methods
        customerService.prototype.getList = function (pageCurrent, pageSize) {
            var url = String.format('{0}/items', this.api);
            var params = {
                PageCurrent: pageCurrent,
                PageSize: pageSize
            };

            var q = $q.defer();
            this.getData(url, params).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            });
            return q.promise;            
        }
        
        customerService.prototype.getCustomerByKey = function (customerKey) {
            var url = String.format('{0}/item', this.api);
            var params = {
                CustomerKey: customerKey
            }
            
            var q = $q.defer();
            this.getData(url, params).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            });
            return q.promise;
        }

        customerService.prototype.createCustomer = function (Customer) {
            var url = String.format('{0}/create', this.api);
            
            var q = $q.defer();
            this.create(url, Customer).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            });
            return q.promise;
        }
        
        customerService.prototype.updateCustomer = function (Customer) {
            var url = String.format('{0}/update', this.api);
            
            var q = $q.defer();
            this.update(url, Customer).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            });
            return q.promise;
        }
        
        customerService.prototype.deleteCustomer = function (customerId) {
            var url = String.format('{0}/delete', this.api);
            
            var q = $q.defer();
            this.delete(url).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            });
            return q.promise;            
        }
        
        return new customerService;
    };
})();