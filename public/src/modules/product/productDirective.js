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
                productlist:'='
            },
            templateUrl: function() {
                return 'modules/product/ngProductRelated.tpl.html';
            },
            link: function (scope, element, attrs, modelCtrl) {
                scope.$watch('productlist', function(newVal, oldVal){
                    if(newVal != oldVal){
                        $('.popular').bxSlider({
                            mode: 'horizontal',
                            captions: true,
                            auto: true,
                            speed: 1000,
                            infiniteLoop: true,
                            stopAutoOnClick: true,
                            minSlides: 3,
                            maxSlides: 3,
                            moveSlides: 3,
                            pause: 2000,
                            pager: false,
                            onSlideBefore: function(){
                                $(".popular").fadeOut();
                            },
                            onSlideAfter: function(){
                                $(".popular").fadeIn();
                            }
                        });
                    }
                }, true);
            }
        };
    }])
})();