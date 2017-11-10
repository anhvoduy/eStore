(function () {
    angular.module('cargo.directives.megaMenu', [])
    .directive('megaMenu',['$rootScope', function ($rootScope) {
        var link = function (scope, element, attrs, ngCtrl) {
            // TO DO: review to hide mega menu at login view
            // console.log($rootScope.hideMegaMenu);
        }

        return {
            restrict: 'EA',
            replace: true,
            templateUrl: function () {
                return "/app/directives/megaMenu.tpl.html";
            },
            link: link
        };
    }]);
})();