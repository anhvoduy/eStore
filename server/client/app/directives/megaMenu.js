(function () {
    angular.module('cargo.directives.megaMenu', []).directive('megaMenu', function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: function () {
                return "/app/directives/megaMenu/megaMenu.tpl.html";
            },
            link: function (scope, element, attrs, ngCtrl) {
				console.log('init mega-menu');
            }
        };
    });
})();