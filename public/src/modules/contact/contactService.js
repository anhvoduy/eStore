(function () {
    'use strict';
    angular.module('contact.service', []).factory('contactService', contactService);
    contactService.$inject = ['$http', '$q', '$location'];
    function contactService($http, $q, $location) {
        // constructor
        var contactService = function () {
            var baseUrl = String.format('{0}://{1}:{2}', $location.protocol(), $location.host(), $location.port());
			this.api = String.format('{0}/{1}', baseUrl, api);
        }

        // methods
        contactService.prototype.getList = function (pageCurrent, pageSize) {
            // var url = String.format('{0}/items', this.api);
            // var params = {
            //     PageCurrent: pageCurrent,
            //     PageSize: pageSize
            // };
            return this.getData(url, params);                      
        };                
        
        return new contactService;
    };
})();