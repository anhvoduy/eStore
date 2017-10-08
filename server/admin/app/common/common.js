(function () {
    'use strict';
    app.factory('appCommon', appCommon);    
    appCommon.$inject = ['$rootScope', '$cookieStore'];
    function appCommon($rootScope, $cookieStore) {
        // constructor        
        var appCommon = function () {
        }        
        appCommon.prototype = new appCommon();
        appCommon.prototype.constructor = appCommon;

        // constanst
        appCommon.prototype.formStatus = {
            isNew: 1,
            isEdit: 2,
            isView: 3
        };
        
        // functions
        appCommon.prototype.isUndefined = function(value){
            if(value === undefined || value === null){
                return true;
            }else if(value === 'undefined' || value === 'null'){
                return true;
            }else{
                return false;
            }
        }
        return new appCommon;
    };        
})();

(function () {
    String.format = function() {
        var s = arguments[0];
        for (var i = 0; i < arguments.length - 1; i += 1) {
            var reg = new RegExp('\\{' + i + '\\}', 'gm');
            s = s.replace(reg, arguments[i + 1]);
        }
        return s;
    };
})();