(function () {
    angular.module('cargo.directives.megaMenu', []).directive('mega-menu', function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: function () {
                return "/app/directives/megaMenu/megaMenu.tpl.html";
            },
            link: function (scope, element, attrs, ngCtrl) {
            }
        };
    });
})();