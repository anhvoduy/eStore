(function () {
    'use strict';
    angular.module('index.service', []).factory('indexService', indexService);
    indexService.$inject = ['$http', '$q', '$location'];
    function indexService($http, $q, $location) {
        // constructor
        var indexService = function () {
            var baseUrl = String.format('{0}://{1}:{2}', $location.protocol(), $location.host(), $location.port());
			this.api = String.format('{0}/{1}', baseUrl, api);
        }

        // methods
        indexService.prototype.getList = function (pageCurrent, pageSize) {
            // var url = String.format('{0}/items', this.api);
            // var params = {
            //     PageCurrent: pageCurrent,
            //     PageSize: pageSize
            // };
            return this.getData(url, params);                      
        };                
        
        return new indexService;
    };
})();