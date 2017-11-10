(function () {
    'use strict';
    app.factory('brandService', brandService);
    brandService.$inject = ['$q', 'baseService'];
    function brandService($q, baseService) {
        // constructor
        var brandService = function () {
            //console.log('instance');
        }
        brandService.prototype = new baseService('api/brand');
        brandService.prototype.constructor = brandService;

        // methods
        brandService.prototype.getBrands = function () {
            var url = String.format('{0}/items', this.api);

            var q = $q.defer();
            this.getData(url).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;            
        }
        
        brandService.prototype.getBrandByKey = function (brandKey) {
            var url = String.format('{0}/item', this.api);
            var params = {
                BrandKey: brandKey
            }
            
            var q = $q.defer();
            this.getData(url, params).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }

        brandService.prototype.createBrand = function (brand) {
            var url = String.format('{0}/create', this.api);
            return true;
        }
        
        brandService.prototype.updateBrand = function (brand) {
            var url = String.format('{0}/update', this.api);
            
            var q = $q.defer();
            this.update(url, brand).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }
        
        brandService.prototype.deleteBrand = function (brandKey) {
            var url = String.format('{0}/delete', this.api);
            
            var q = $q.defer();
            this.delete(url).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;            
        }
        
        return new brandService;
    };
})();