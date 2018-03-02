(function () {
    angular.module('indexpage', ['core', 'product']);
})();

(function(){
    $(function(){
        $('.bxslider').bxSlider({
            mode: 'horizontal',
            speed: 500,
            auto: true,
            captions: true,
            pager: false
        });
    });
})();
