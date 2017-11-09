(function (){
    'use strict';
	app.controller('inventoryInputEditController', inventoryInputEditController);
	inventoryInputEditController.$inject = ['$scope', '$q', '$state', '$stateParams', 'appCommon'];
	
	function inventoryInputEditController($scope, $q, $state, $stateParams, appCommon) {
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
		}		

		$scope.cancel = function() {
            $state.go($state.current.parentState);
        }
		
		/* start */
		activate();
	}
})();