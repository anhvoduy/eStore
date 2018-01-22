(function () {
    angular.module('index.directive', ['index.controller', 'index.service'])
    .directive('ngHeader',[function () {
        return {
            restrict: 'EA',            
            replace: true,            
            templateUrl: function() {                
                return 'modules/index/header.tpl.html';
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
                return 'modules/index/brand.tpl.html';
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
                return 'modules/index/footer.tpl.html';
            },
            link: function (scope, element, attrs, modelCtrl) {                
            }
        };
    }])
    .directive('ngProduct',[function () {
        return {
            restrict: 'EA',            
            replace: true,
            transclude: true,
            templateUrl: function() {                
                return 'modules/index/product.tpl.html';
            },
            link: function (scope, element, attrs, modelCtrl) {                
            }
        };
    }])
})();