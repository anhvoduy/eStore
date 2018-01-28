(function () {
    angular.module('index.directive', [])
    .directive('ngProduct',[function () {
        return {
            restrict: 'EA',
            required: 'ngModel',
            replace: true,
            transclude: true,
            scope:{
                products:'=',
                hello:'='
            },
            templateUrl: function() {                
                return 'modules/index/ngProduct.tpl.html';
            },
            link: function (scope, element, attrs, modelCtrl) {                
            }
        };
    }])
})();