(function () {
    angular.module('thestore.directive', [])    
    .directive('ngTopBrand',[function () {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            scope:{
                brandlist:'='
            },
            templateUrl: function() {
                return 'modules/thestore/ngTopBrand.tpl.html';
            },
            link: function (scope, element, attrs, modelCtrl) {
            }
        };
    }])
})();