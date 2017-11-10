(function () {
    angular.module('cargo.directives.footer', []).directive('footer', function () {
        return {
            restrict: 'EA',
            replace: true,
            template: function () {
                var template = '<div>-----footer-----</div>';
                return template;
            },
            link: function (scope, element, attrs, ngCtrl) {
            }
        };
    });
})();