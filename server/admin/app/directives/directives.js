(function () {
    angular.module('cargo.directives', [])
    .directive('numbersOnly', function () {
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