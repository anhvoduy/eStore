(function () {
    angular.module('cargo.directives.searchControl', [])
    .directive('searchControl', function () {
        return {
            restrict: 'EA',
            replace: true,
            template: function () {
                var template = '<div>-----search-----</div>';
                return template;
            },
            link: function (scope, element, attrs, ngCtrl) {
            }
        };
    });
})();