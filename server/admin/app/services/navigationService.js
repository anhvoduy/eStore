(function () {
    'use strict';
    app.factory('navigationService', navigationService);
    navigationService.$inject = ['$q', 'baseService'];
    function navigationService($q, baseService) {
        // constructor
        var navigationService = function () {            
        }
        navigationService.prototype = new baseService('api/navigation');
        navigationService.prototype.constructor = navigationService;
        
        // methods
        navigationService.prototype.getNavigation = function () {
            var url = String.format('{0}', this.api);
            
            var q = $q.defer();
            this.getData(url).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }

        return new navigationService;
    };
})();