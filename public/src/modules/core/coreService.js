(function () {
    'use strict';
    angular.module('core.service', []).service('coreService', coreService);    
    coreService.$inject = ['$http', '$q', '$location'];
    function coreService($http, $q, $location) {
        // constructor
        var coreService = function () {
            this.api = String.format('{0}://{1}:{2}/{3}', $location.protocol(), $location.host(), $location.port(), 'api');
        };

        // methods
        coreService.prototype.getProductMostLiked = function () {
            var url = String.format('{0}/product/fe/mostliked', this.api);
            return $http.get(url, null).then(function(result){
                return result.data;
            });
        };
        
        return coreService;
    };
})();