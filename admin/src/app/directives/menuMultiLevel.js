(function () {
    angular.module('cargo.directives.menuMultiLevel', [])
    .directive('menuMultiLevel',['$rootScope', function ($rootScope) {
        var link = function (scope, element, attrs, ngCtrl) {
        }

        return {
            restrict: 'EA',
            replace: true,
            templateUrl: function () {
                return "/app/directives/menuMultiLevel.tpl.html";
            },
            link: link
        };
    }]);
})();