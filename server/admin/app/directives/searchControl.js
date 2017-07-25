(function () {
    angular.module('cargo.directives.searchControl', []).directive('searchControl', function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: function () {
                return "/app/directives/search/searchControl.tpl.html";
            },
            link: function (scope, element, attrs, ngCtrl) {
            }
        };
    });
})();