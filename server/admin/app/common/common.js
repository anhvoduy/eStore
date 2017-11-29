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

        appCommon.prototype.colorList = [
            { Key: 'NoColor', Label: 'No Color' },
			{ Key: 'Red', Label: 'Red' },
            { Key: 'Pink', Label: 'Pink' },
            { Key: 'Orange', Label: 'Orange' },
            { Key: 'Yellow', Label: 'Yellow' },
            { Key: 'Green', Label: 'Green' },
            { Key: 'Blue', Label: 'Blue' },
            { Key: 'Purple', Label: 'Purple' },
            { Key: 'Brown', Label: 'Brown' },
            { Key: 'Grey', Label: 'Grey' },
            { Key: 'White', Label: 'White' },
            { Key: 'Black', Label: 'Black' },
            { Key: 'Print', Label: 'Print' },
            { Key: 'Strip', Label: 'Strip' },
            { Key: 'Floral', Label: 'Floral' },
            { Key: 'Check', Label: 'Check' },
            { Key: 'Dot', Label: 'Dot' },
            { Key: 'Gold', Label: 'Gold' },
            { Key: 'Silver', Label: 'Silver' },
            { Key: 'Rosegold', Label: 'Rosegold' },
            { Key: 'Champagne', Label: 'Champagne' },
            { Key: 'Whitegold', Label: 'Whitegold' },
            { Key: 'Platinum', Label: 'Platinum' },
            { Key: 'MultiColor', Label: 'Multiple Color' }
        ];
        
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