(function () {
    'use strict';
    app.factory('appContext', appContext);
    appContext.$inject = ['$http', '$q', '$rootScope', '$modal', '$location', '$cookieStore'];

    function appContext($http, $q, $rootScope, $modal, $location, $cookieStore) {
        // constructor
        var appContext = {
            http: $http,
            rootScope: $rootScope,
            q: $q,
			modal: $modal,
			location: $location,
			cookieStore: $cookieStore
        }		
		
        return new appContext;
    };
})();