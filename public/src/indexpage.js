(function () {
    angular.module('indexpage', ['core', 'product']);
})();

(function(){
    $(function(){
        $('.bxslider').bxSlider({
            mode: 'horizontal',
            captions: true,
            auto: true,
            speed: 1000,
            infiniteLoop: false,
            stopAutoOnClick: true,
            pager: false
        });
    });
})();
