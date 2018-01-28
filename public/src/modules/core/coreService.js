(function () {
    'use strict';
    angular.module('core.service', []).service('coreService', coreService);    
    coreService.$inject = ['$http', '$q', '$location'];
    function coreService($http, $q, $location) {
        // constructor
        var coreService = function () {
            this.api = String.format('{0}://{1}:{2}', $location.protocol(), $location.host(), $location.port());			
        };

        // methods
        coreService.prototype.getProducts = function () {
            var url = String.format('{0}/product/fe/items', this.api);
            var params = {};
            return $http.get(url, params).then(function(result){
                return result.data;
            });
        };

        coreService.prototype.getProductItem = function (productId) {
            var url = String.format('{0}/product/fe/item', this.api);
            var params = {
                ProductId: productId
            };
            return $http.get(url, params).then(function(result){
                return result.data;
            });
        };
        
        return coreService;
    };
})();