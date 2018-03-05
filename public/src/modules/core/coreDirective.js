(function () {
    angular.module('core.directive', ['core.service'])
    .directive('ngHeader',[function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: function() {
                return 'modules/core/ngHeader.tpl.html';
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
                return 'modules/core/ngFooter.tpl.html';
            },
            link: function (scope, element, attrs, modelCtrl) {
            }
        };
    }])
    .directive('ngSlider',[function () {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                products: "="
            },
            templateUrl: function() {
                return 'modules/core/ngSlider.tpl.html';
            },
            link: function (scope, element, attrs, modelCtrl) {
                scope.$watch('products', function(newVal, oldVal){
                    if(newVal != oldVal){
                        $('.bxslider').bxSlider({
                            mode: 'horizontal',
                            captions: true,
                            auto: true,
                            speed: 1000,
                            infiniteLoop: true,
                            stopAutoOnClick: true,
                            pager: false
                        });
                    }
                }, true);
            }
        };
    }])
    .directive('ngSearch',[function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: function() {
                return 'modules/core/ngSearch.tpl.html';
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
                return 'modules/core/ngBrand.tpl.html';
            },
            link: function (scope, element, attrs, modelCtrl) {
            }
        };
    }])
})();