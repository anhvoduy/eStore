(function () {
    angular.module('indexpage', ['core', 'product']);
})();

(function(){
    $(function(){
        $('.bxslider').bxSlider({
            mode: 'fade',
            speed: 500,
            auto: true,
            captions: true,
            pager: false
        });
    });
})();
