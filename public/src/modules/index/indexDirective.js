(function () {
    angular.module('index.directive', ['index.controller', 'index.service'])
    .directive('ngIndexHeader',[function () {
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
    .directive('ngIndexProduct',[function () {
        return {
            restrict: 'EA',            
            replace: true,
            transclude: true,
            templateUrl: function() {                
                return 'modules/index/indexProduct.tpl.html';
            },
            link: function (scope, element, attrs, modelCtrl) {                
            }
        };
    }])
})();