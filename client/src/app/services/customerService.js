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
            return this.getData(url, params);
        };
        
        customerService.prototype.getCustomerByKey = function (customerKey) {
            var url = String.format('{0}/item', this.api);
            var params = {
                CustomerKey: customerKey
            };
            return this.getData(url, params);
        };

        customerService.prototype.create = function (customer) {
            var url = String.format('{0}/create', this.api);
            return this.postData(url, customer);
        };
        
        customerService.prototype.update = function (customer) {
            var url = String.format('{0}/update', this.api);
            return this.postData(url, customer);
        };
        
        customerService.prototype.delete = function (customerId) {
            var url = String.format('{0}/delete', this.api);
            var params = {
                CustomerId: customerId
            };
            return this.postData(url, params);
        };
        
        return new customerService;
    };
})();