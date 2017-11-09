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

        // constant
        appCommon.prototype.formStatus = {
            isNew: 1,
            isEdit: 2
        };

        appCommon.prototype.setFormTitle = function(formStatus) {
            if(Number(formStatus) === this.formStatus.isNew) 
                return 'Create Brand';
            else if (Number(formStatus) === this.formStatus.isEdit) 
                return 'Edit Brand';
            else 
                return 'Undefined';
        };
        
        // functions
        appCommon.prototype.isUndefined = function(value){
            if(value === undefined || value === null)
                return true;
            else if(value === 'undefined' || value === 'null' || value === '')
                return true;
            else
                return false;
        }

        // export
        return new appCommon;
    };        
})();

// override string object
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