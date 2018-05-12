(function () {
    'use strict';
    angular.module('thestore.service', []).service('thestoreService', thestoreService);
    thestoreService.$inject = ['$http', '$q', '$location'];
    function thestoreService($http, $q, $location) {
        // constructor
        var thestoreService = function () {
            this.api = String.format('{0}://{1}:{2}/{3}', $location.protocol(), $location.host(), $location.port(), 'api');
        }

        // methods
        thestoreService.prototype.getTopBrand = function () {
            var url = String.format('{0}/brand/fe/top/items', this.api);
            return $http.get(url, {}).then(function(result){
                return result.data;
            });
        };

        thestoreService.prototype.getProductByBrand = function (brandId) {
            var url = String.format('{0}/product/brand/items', this.api);
            var params = {
                BrandId: brandId
            };
            return $http.get(url, {params: params}).then(function(result){
                return result.data;
            });
        };
        
        return thestoreService;
    };
})();