(function () {
    'use strict';
    angular.module('search.service', []).service('searchService', searchService);
    searchService.$inject = ['$http', '$q', '$location'];
    function searchService($http, $q, $location) {
        // constructor
        var searchService = function () {
            this.api = String.format('{0}://{1}:{2}/{3}', $location.protocol(), $location.host(), $location.port(), 'api');
        }

        // methods
        searchService.prototype.searchProducts = function (s, pageSize, pageNumber) {
            var url = String.format('{0}/product/brand/items', this.api);
            var params = {
                s: s, 
                pageSize: pageSize, 
                pageNumber: pageNumber
            };
            return $http.get(url, {params: params}).then(function(result){
                return result.data;
            });
        };
        
        return searchService;
    };
})();