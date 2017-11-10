(function (){
    'use strict';
	app.controller('customerEditController', customerEditController);
    customerEditController.$inject = ['$scope', '$timeout', '$state', '$stateParams', 'appCommon', 'customerService'];
    function customerEditController($scope, $timeout, $state, $stateParams, appCommon, customerService) {
		/* models */		
		$scope.customerKey = $stateParams.customerKey;
		$scope.formStatus = appCommon.isUndefined($scope.customerKey) 
			? appCommon.formStatus.isNew 
			: appCommon.formStatus.isEdit;		
		$scope.formTitle = appCommon.setFormTitle($scope.formStatus, 'Customer');
		$scope.messageSuccess = [];
		$scope.messageError = [];		
		
		/* functions */
		function activate() {
			if(appCommon.isUndefined($scope.customerKey)) return;

            customerService.getCustomerByKey($scope.customerKey).then(function (result) {
                $scope.customer = result;
				if (appCommon.isUndefined($scope.customer)) {
                    $scope.messageError.push(String.format("The customer: {0} not found.", $scope.customerKey));
				}
			}, function (error) {
				$scope.messageError.push(error);
			});			
		}
		
		// if update brand success/failed -> reset status after 3 seconds  
		function resetFormStatus() {
			$timeout(function () {
				$scope.disabledButton = false;
				$scope.messageSuccess = [];
				$scope.messageError = [];
			}, 3000);
		}
		
		/* buttons */
        $scope.save = function() {
            if (appCommon.isUndefined($scope.customer)) return;

            $scope.disabledButton = true;
            customerService.updateCustomer($scope.customer).then(function (result) {
                $scope.messageSuccess.push(result.message);
                resetFormStatus();
            }, function (error) {
                $scope.messageError.push(error);
                resetFormStatus();
            });
        }

		$scope.cancel = function() {            
            $state.go($state.current.parentState);
        }
		
		/* start */
		activate();
	}
})();