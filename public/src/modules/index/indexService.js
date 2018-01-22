(function () {
    'use strict';
    angular.module('index.service', []).service('indexService', indexService);
    indexService.$inject = ['$http', '$q', '$location'];
    function indexService($http, $q, $location) {
        // constructor
        var indexService = function () {
            var baseUrl = String.format('{0}://{1}:{2}', $location.protocol(), $location.host(), $location.port());
			this.api = String.format('{0}/{1}', baseUrl, 'api/product');
        };

        // methods
        indexService.prototype.getProducts = function () {
            var url = String.format('{0}/fe/items', this.api);
            var params = {};
            return $http.get(url, params).then(function(result){
                return result.data;
            });
        };
        
        return indexService;
    };
})();