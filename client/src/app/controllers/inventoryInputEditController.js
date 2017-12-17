(function (){
    'use strict';
	app.controller('inventoryInputEditController', inventoryInputEditController);
	inventoryInputEditController.$inject = ['$scope', '$q', '$state', '$stateParams', 
		'appCommon', 'inventoryService', 'customerService'];
	
	function inventoryInputEditController($scope, $q, $state, $stateParams, 
		appCommon, inventoryService, customerService) {
		
		/* models */
		$scope.stockKey = $stateParams.stockKey;
		$scope.formStatus = appCommon.isUndefined($scope.stockKey) 
			? appCommon.formStatus.isNew 
			: appCommon.formStatus.isEdit;
		$scope.formTitle = appCommon.setFormTitle($scope.formStatus, 'Input Goods');
		$scope.messageSuccess = [];
		$scope.messageError = [];
		
		
		/* functions */
		function activate() {
			inventoryService.getStockItemByKey($scope.stockKey).then(function(result){
				$scope.stock = result.Stock;
				$scope.stockDetail = result.StockDetail;
			}, function(error){
				$scope.messageError.push(error);
			});

			customerService.getList().then(function(result){
				$scope.customers = result.PageData;
			}, function(error){
				$scope.messageError.push(error);
			});
		}		


		/* buttons */
		$scope.submit = function(stock, stockDetail) {
			console.log(stock);
			console.log(stockDetail);
		}

		$scope.cancel = function() {
            $state.go($state.current.parentState);
        }
		
		/* start */
		activate();
	}
})();