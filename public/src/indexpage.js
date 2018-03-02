(function () {
    angular.module('indexpage', ['core', 'product']);
})();

(function(){
    $(function(){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 600
        });
    });
})();
