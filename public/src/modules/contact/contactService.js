(function () {
    'use strict';
    angular.module('contact.service', []).factory('contactService', contactService);
    contactService.$inject = ['$http', '$q', '$location'];
    function contactService($http, $q, $location) {
        // constructor
        var contactService = function () {
            this.api = String.format('{0}://{1}:{2}/{3}', $location.protocol(), $location.host(), $location.port(),'api');
        }

        // methods
        contactService.prototype.create = function (email, description) {
            var url = String.format('{0}/contact/fe/create', this.api);
            var params = {
                Email: email,
                Description: description
            };
            return $http.post(url, params).then(function(result){
                return result.data;
            });
        };
        
        return new contactService;
    };
})();