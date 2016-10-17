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
        
        brandService.prototype.getBrandById = function (brandId) {
            var url = String.format('{0}/items/{1}', this.api, brandId);
            
            var q = $q.defer();
            this.getData(url).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
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
        
        brandService.prototype.deleteBrand = function (brandId) {
            var url = String.format('{0}/delete/{1}', this.api, brandId);
            
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