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


        // properties
        appCommon.prototype.userTypes = [
			{ Key: 'ADMIN', Label: 'ADMIN' }, 
            { Key: 'USER', Label: 'USER' },
            { Key: 'VISITOR', Label: 'VISITOR' }
        ];
        
        appCommon.prototype.formStatus = {
            isNew: 1,
            isEdit: 2
        };

        appCommon.prototype.defaultPagination = {
            hitsTotal: 100,
            pageTotal: 10,
			pageCurrent: 1,
			pageSize: 10,
			maxSize: 5,
			lstPageSize: [10, 50, 100]
        };
        
        
        // functions
        appCommon.prototype.setFormTitle = function(formStatus, title) {
            if(Number(formStatus) === this.formStatus.isNew)
                return String.format('Create {0}', title);
            else if (Number(formStatus) === this.formStatus.isEdit)
                return String.format('Edit {0}', title);
            else
                return 'Undefined';
        };        
        
        appCommon.prototype.isUndefined = function(value){
            if(value === undefined || value === null)
                return true;
            else if(value === 'undefined' || value === 'null' || value === '')
                return true;
            else
                return false;
        };                

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