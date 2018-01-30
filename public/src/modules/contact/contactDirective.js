(function () {
    angular.module('contact.directive', [])    
    .directive('ngContact',[function () {
        return {
            restrict: 'EA',
            required: 'ngModel',
            replace: true,
            transclude: true,            
            templateUrl: function() {                
                return 'modules/contact/ngContact.tpl.html';
            },
            link: function (scope, element, attrs, modelCtrl) {                
            }
        };
    }])
})();