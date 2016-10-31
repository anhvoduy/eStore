(function () {
    'use strict';
    app.factory('inventoryService', inventoryService);
    inventoryService.$inject = ['$q', 'baseService'];
    function inventoryService($q, baseService) {
        // constructor
        var inventoryService = function () {
            //console.log('instance');
        }
        inventoryService.prototype = new baseService('api/inventory');
        inventoryService.prototype.constructor = inventoryService;                

        // methods
        inventoryService.prototype.getBrands = function () {
            var url = String.format('{0}/items', this.api);

            var q = $q.defer();
            this.getData(url).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;            
        }
        
        inventoryService.prototype.getBrandById = function (brandId) {
            var url = String.format('{0}/items/{1}', this.api, brandId);
            
            var q = $q.defer();
            this.getData(url).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }        
        
        inventoryService.prototype.updateBrand = function (brand) {
            var url = String.format('{0}/update', this.api);
            
            var q = $q.defer();
            this.update(url, brand).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }
        
        inventoryService.prototype.deleteBrand = function (brandId) {
            var url = String.format('{0}/delete/{1}', this.api, brandId);
            
            var q = $q.defer();
            this.delete(url).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;            
        }
        
        return new inventoryService;
    };
})();