(function () {
    angular.module('cargo.directives', [])
    .directive('ngInputNumberOnly', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, modelCtrl) {
                modelCtrl.$parsers.push(function (inputValue) {
                    if (inputValue == undefined) return '';
                    var transformedInput = inputValue.replace(/[^0-9]/g, '');
                    if (transformedInput != inputValue) {
                        modelCtrl.$setViewValue(transformedInput);
                        modelCtrl.$render();
                    }
                    return transformedInput;
                });
            }
        };
    })
    .directive('ngFormatDate', function(){
        return {
            restrict: 'A',                
            link: function (scope, element, attrs, modelCtrl) {
                if(scope.stock !== undefined && scope.stock.StockDate!=undefined){
                    scope.stock.StockDate = moment(scope.stock.StockDate).format('DD/MM/YYYY');
                }
            }
        };
    })
    .directive('ngInputDate', function(){
        return {            
            restrict: 'EA',
            replace: true,
            transclude: true,
            scope: {
                name:  '@',
                value: '=',
                format: '@',
                required: '@'
            },
            template: function() {
                var template = 
                '<div class="input-group">' +
                    '<input type="text" class="form-control" uib-datepicker-popup="{{format}}" ng-model="dtValue" ng-change="changeSelectedDate()" is-open="popup.opened" datepicker-options="dateOptions" close-text="Close" alt-input-formats="altInputFormats" ng-required="required"/>' +
                    '<span class="input-group-btn">' +
                        '<button type="button" class="btn btn-default" ng-click="openDate()"><i class="glyphicon glyphicon-calendar"></i></button>' +
                    '</span>'
                '</div>';
                return template;
            },
            link: function (scope, element, attrs, modelCtrl) {
                scope.dtValue = scope.value;
                scope.popup = {
                    opened: false
                };
                scope.openDate = function(){
                    scope.popup.opened = true;
                };
                scope.changeSelectedDate = function(){
                    scope.value = new Date(moment(scope.dtValue).format('YYYY-MM-DD'));
                }
                scope.$watch('value', function(newVal, oldVal) {
                    if(oldVal != newVal){
                        scope.dtValue = new Date(moment(newVal).format('YYYY-MM-DD'));
                    }
                });                
            }
        };
    })
    .directive('ngStopClick', [function () {
        return {
            restrict: 'A',                
            link: function (scope, element, attrs, ngCtrl) {
                scope.menucode = attrs.menucode || '';
                scope.clickable = attrs.clickable || false;
                if(!scope.clickable){
                    element.bind('click', function (event) {
                        event.preventDefault();
                        //event.stopPropagation();
                    });
                }                    
            }
        };
    }]);
})();