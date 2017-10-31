(function () {
    angular.module('cargo.directives.footer', []).directive('footer', function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: function () {
                return "/app/directives/footer.html";
            },
            link: function (scope, element, attrs, ngCtrl) {
            }
        };
    });
})();