(function () {
    angular.module('index.directive', ['index.controller', 'index.service'])
    .directive('ngHeader',[function () {
        return {
            restrict: 'EA',            
            replace: true,            
            templateUrl: function() {                
                return 'modules/index/ngHeader.tpl.html';
            },
            link: function (scope, element, attrs, modelCtrl) {                
            }
        };
    }])
    .directive('ngBrand',[function () {
        return {
            restrict: 'EA',            
            replace: true,
            templateUrl: function() {                
                return 'modules/index/ngBrand.tpl.html';
            },
            link: function (scope, element, attrs, modelCtrl) {                
            }
        };
    }])
    .directive('ngFooter',[function () {
        return {
            restrict: 'EA',            
            replace: true,
            templateUrl: function() {                
                return 'modules/index/ngFooter.tpl.html';
            },
            link: function (scope, element, attrs, modelCtrl) {                
            }
        };
    }])
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
                console.log(scope.products);
            }
        };
    }])
})();