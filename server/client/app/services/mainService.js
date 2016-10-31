(function () {
    'use strict';
    app.factory('mainService', mainService);
    mainService.$inject = ['$q', 'baseService'];
    function mainService($q, baseService) {
        // constructor
        var mainService = function () {
            //console.log('instance');
        }
        mainService.prototype = new baseService('api');
        mainService.prototype.constructor = mainService;                

        // methods
        mainService.prototype.getBrands = function () {
            var url = String.format('{0}/items', this.api);

            var q = $q.defer();
            this.getData(url).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;            
        }
        
        mainService.prototype.getBrandById = function (brandId) {
            var url = String.format('{0}/items/{1}', this.api, brandId);
            
            var q = $q.defer();
            this.getData(url).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }        
        
        mainService.prototype.updateBrand = function (brand) {
            var url = String.format('{0}/update', this.api);
            
            var q = $q.defer();
            this.update(url, brand).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }
        
        mainService.prototype.deleteBrand = function (brandId) {
            var url = String.format('{0}/delete/{1}', this.api, brandId);
            
            var q = $q.defer();
            this.delete(url).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;            
        }
        
        return new mainService;
    };
})();