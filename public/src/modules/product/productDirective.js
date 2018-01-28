(function () {
    angular.module('index.directive', [])    
    .directive('ngProductDetail',[function () {
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
                return 'modules/index/ngProductDetail.tpl.html';
            },
            link: function (scope, element, attrs, modelCtrl) {
                console.log(scope.products);
            }
        };
    }])
})();