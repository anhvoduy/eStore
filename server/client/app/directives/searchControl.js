(function () {
    angular.module('cargo.directives.searchControl', []).directive('search-control', function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: function () {
                return "/app/directives/templates/searchControl.tpl.html";
            },
            link: function (scope, element, attrs, ngCtrl) {
            }
        };
    });
})();