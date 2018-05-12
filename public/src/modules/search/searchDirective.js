(function () {
    angular.module('search.directive', [])
    .directive('ngProductList',[function () {
        return {
            restrict: 'EA',
            required: 'ngModel',
            replace: true,
            transclude: true,
            scope:{
                products:'='
            },
            templateUrl: function() {
                return 'modules/search/ngProductList.tpl.html';
            },
            link: function (scope, element, attrs, modelCtrl) {
            }
        };
    }]);
})();