(function () {
    'use strict';
    app.factory('appContext', appContext);
    appContext.$inject = ['$http', '$q', '$rootScope', '$modal'];

    function appContext($http, $q, $rootScope, $modal) {
        // constructor
        var appContext = {
            http: $http,
            rootScope: $rootScope,
            q: $q,
            modal: $modal
        }		
		
        return new appContext;
    };
})();