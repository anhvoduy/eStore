(function () {
    'use strict';
    angular.module('product.service', []).service('productService', productService);
    productService.$inject = ['$http', '$q', '$location'];
    function productService($http, $q, $location) {
        // constructor
        var productService = function () {
            this.api = String.format('{0}://{1}:{2}/{3}', $location.protocol(), $location.host(), $location.port(),'api');
        };

        // methods
        productService.prototype.getProducts = function () {
            var url = String.format('{0}/product/fe/items', this.api);
            var params = {};
            return $http.get(url, params).then(function(result){
                return result.data;
            });
        };
        
        return productService;
    };
})();