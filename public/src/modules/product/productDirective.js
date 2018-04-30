(function () {
    angular.module('product.directive', [])
    .directive('ngProductDetail',[function () {
        return {
            restrict: 'EA',
            required: 'ngModel',
            replace: true,
            transclude: true,
            scope:{
                product:'=',
                hello:'='
            },
            templateUrl: function() {
                return 'modules/product/ngProductDetail.tpl.html';
            },
            link: function (scope, element, attrs, modelCtrl) {
            }
        };
    }])
    .directive('ngProductList',[function () {
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
                return 'modules/product/ngProductList.tpl.html';
            },
            link: function (scope, element, attrs, modelCtrl) {
            }
        };
    }])
    .directive('ngProductRelated',[function () {
        return {
            restrict: 'EA',
            required: 'ngModel',
            replace: true,
            transclude: true,
            scope:{
                relatedProducts:'='
            },
            templateUrl: function() {
                return 'modules/product/ngProductRelated.tpl.html';
            },
            link: function (scope, element, attrs, modelCtrl) {
            }
        };
    }])
})();