(function () {
    'use strict';        
    app.controller('stockInController', stockInController);
	stockInController.$inject = ['$scope', '$q', '$state', '$stateParams', 'stockService'];        
	function stockInController($scope, $q, $state, $stateParams, stockService) {
		// models		
		$scope.messageSuccess = '';
		$scope.messageError = '';
		
		// functions
		$scope.activate = function() {
			stockService.getStockIn().then(function(result){
				$scope.stocks = result;
			}, function (error) {
                $scope.messageError = error.message;
            });
		}
		
		/* start */
		$scope.activate();
	}
})();