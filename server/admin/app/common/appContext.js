(function () {
    'use strict';
    app.factory('appContext', appContext);    
    appContext.$inject = ['$rootScope', '$cookieStore'];
    function appContext($rootScope, $cookieStore) {
        // constructor        
        var appContext = function () {
        }
        
        appContext.prototype = new appContext();
        appContext.prototype.constructor = appContext;

        // constanst
        appContext.prototype.formStatus = {
            isNew: 1,
            isEdit: 2,
            isView: 3
        };
        
        // functions
        appContext.prototype.isUndefined = function(value){
            if(value === undefined || value === null){
                return true;
            }else if(value === 'undefined' || value === 'null'){
                return true;
            }else{
                return false;
            }
        }
        return new appContext;
    };        
})();