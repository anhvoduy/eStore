(function () {
    'use strict';
    app.factory('brandService', brandService);
    brandService.$inject = ['$q', 'baseService'];
    function brandService($q, baseService) {
        // constructor
        var brandService = function () {            
        }
        brandService.prototype = new baseService('api/brand');
        brandService.prototype.constructor = brandService;

        // methods
        brandService.prototype.getList = function (pageCurrent, pageSize) {
            var url = String.format('{0}/items', this.api);
            var params = {
                PageCurrent: pageCurrent,
                PageSize: pageSize
            };
            return this.getData(url, params);                      
        };
        
        brandService.prototype.getBrandByKey = function (brandKey) {
            var url = String.format('{0}/item', this.api);
            var params = {
                BrandKey: brandKey
            };                    
            return this.getData(url, params);
        };

        brandService.prototype.create = function (brand) {
            var url = String.format('{0}/create', this.api);
            return this.postData(url, brand);
        };
        
        brandService.prototype.update = function (brand) {
            var url = String.format('{0}/update', this.api);            
            return this.postData(url, brand);
        };
        
        brandService.prototype.delete = function (brandKey) {
            var url = String.format('{0}/delete', this.api);
            var params = {
                BrandKey: brandKey
            };
            return this.postData(url, params);                       
        };
        
        return new brandService;
    };
})();