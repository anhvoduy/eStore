(function () {
	'use strict';
	app.controller('inventoryOutputEditController', inventoryOutputEditController);
	inventoryOutputEditController.$inject = ['$scope', '$q', '$state', '$stateParams', 'appCommon'];
	
	function inventoryOutputEditController($scope, $q, $state, $stateParams, appCommon) {
		/* models */
		$scope.stockKey = $stateParams.stockKey;
		$scope.formStatus = appCommon.isUndefined($scope.stockKey) 
			? appCommon.formStatus.isNew 
			: appCommon.formStatus.isEdit;
		$scope.formTitle = appCommon.setFormTitle($scope.formStatus, 'Output Goods');
		$scope.messageSuccess = [];
		$scope.messageError = [];
	
		/* functions */
		function activate() { 
		}
		
		$scope.cancel = function() {            
            $state.go($state.current.parentState);
        }
		
		/* start */
		activate();
	}
})();