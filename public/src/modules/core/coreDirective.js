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
                            mode: 'fade',
                            captions: true,
                            auto: true,
                            autoControls: false,
                            stopAutoOnClick: true,
                            speed: 500,
                            infiniteLoop: true
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