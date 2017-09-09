(function () {
	'use strict';
	app.controller('stockOutController', stockOutController);
	stockOutController.$inject = ['$scope', '$q', '$state', '$stateParams', 'stockService'];
	function stockOutController($scope, $q, $state, $stateParams, stockService) {
		// models		
		$scope.messageSuccess = '';
		$scope.messageError = '';		
		
		// functions
		$scope.activate = function() { 
			stockService.getStockOut().then(function(result){
				$scope.stocks = result;
			}, function (error) {
                $scope.messageError = error.message;
            });
		}
		
		$scope.save = function() {
		}
		
		/* start */
		$scope.activate();
	}
})();