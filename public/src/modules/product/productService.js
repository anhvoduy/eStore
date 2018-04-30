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
            return $http.get(url, {params: params}).then(function(result){
                return result.data;
            });
        };

        productService.prototype.getProductItem = function (productKey) {
            var url = String.format('{0}/product/fe/item', this.api);
            var params = {
                ProductKey: productKey
            };
            return $http.get(url, {params: params}).then(function(result){
                return result.data;
            });
        };

        productService.prototype.getProductMostLiked = function () {
            var url = String.format('{0}/product/fe/mostliked', this.api);            
            return $http.get(url, null).then(function(result){
                return result.data;
            });
        };

        productService.prototype.getProductMostLikedOne = function () {
            var url = String.format('{0}/product/fe/mostliked', this.api);            
            return $http.get(url, null).then(function(result){
                return result.data[0];
            });
        };

        productService.prototype.getProductsByBrand = function (brandId) {
            var url = String.format('{0}/product/brand/items', this.api);
            var params = {
                BrandId: brandId
            };
            return $http.get(url, {params: params}).then(function(result){
                return result.data;
            });
        };
        
        return productService;
    };
})();