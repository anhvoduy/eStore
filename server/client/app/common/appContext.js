(function () {
    'use strict';
    app.factory('appContext', appContext);
    appContext.$inject = ['$http', '$q', '$rootScope', '$location', '$cookieStore'];

    function appContext($http, $q, $rootScope, $location, $cookieStore) {
        // constructor        
        //var appContext = function () {            
        //    this.http = $http;
        //    this.rootScope = $rootScope;
        //    this.q = $q;
        //    this.location = $location;
        //    this.cookieStore = $cookieStore;
        //}


    };

    return new appContext;
})();