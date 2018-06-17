(function () {
    'use strict';
    app.factory('appCommon', appCommon);    
    appCommon.$inject = ['$rootScope', '$cookieStore', '$location'];
    function appCommon($rootScope, $cookieStore, $location) {
        // constructor        
        var appCommon = function () {
        }        
        appCommon.prototype = new appCommon();
        appCommon.prototype.constructor = appCommon;


        // properties
        appCommon.prototype.userTypes = [
            { Key: 'USER', Label: 'USER' },
            { Key: 'ADMIN', Label: 'ADMIN' },
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
			pageSize: 50,
			maxSize: 5,
			lstPageSize: [10, 50, 100]
        };

        appCommon.prototype.accountTypeList = [
            { Key: 'DR', Value: 'Debit' },
            { Key: 'CR', Value: 'Credit' }
        ];

        appCommon.prototype.colorList = [
            { ColorCode: 'NoColor', ColorName: 'No Color' },
			{ ColorCode: 'Red', ColorName: 'Red' },
            { ColorCode: 'Pink', ColorName: 'Pink' },
            { ColorCode: 'Orange', ColorName: 'Orange' },
            { ColorCode: 'Yellow', ColorName: 'Yellow' },
            { ColorCode: 'Green', ColorName: 'Green' },
            { ColorCode: 'Blue', ColorName: 'Blue' },
            { ColorCode: 'Purple', ColorName: 'Purple' },
            { ColorCode: 'Brown', ColorName: 'Brown' },
            { ColorCode: 'Grey', ColorName: 'Grey' },
            { ColorCode: 'White', ColorName: 'White' },
            { ColorCode: 'Black', ColorName: 'Black' },
            { ColorCode: 'Print', ColorName: 'Print' },
            { ColorCode: 'Strip', ColorName: 'Strip' },
            { ColorCode: 'Floral', ColorName: 'Floral' },
            { ColorCode: 'Check', ColorName: 'Check' },
            { ColorCode: 'Dot', ColorName: 'Dot' },
            { ColorCode: 'Gold', ColorName: 'Gold' },
            { ColorCode: 'Silver', ColorName: 'Silver' },
            { ColorCode: 'Rosegold', ColorName: 'Rosegold' },
            { ColorCode: 'Champagne', ColorName: 'Champagne' },
            { ColorCode: 'Whitegold', ColorName: 'Whitegold' },
            { ColorCode: 'Platinum', ColorName: 'Platinum' },
            { ColorCode: 'MultiColor', ColorName: 'Multiple Color' }
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
        
        appCommon.prototype.getRootLocation = function(){
            return $location.$$protocol + ':' + '//' + $location.$$host + ':' + $location.$$port;
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