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
                    $scope.messageError.push(String.format("The customer key: {0} not found.", $scope.customerKey));
				}
			}, function (error) {
				$scope.messageError.push(error);
			});			
		};
		
		// if update brand success/failed -> reset status after 3 seconds  
		function resetFormStatus(delay) {
			if(!delay) delay = 3000;
			$timeout(function () {
				$scope.messageSuccess = [];
				$scope.messageError = [];
				$scope.isSubmitted = false;
				$scope.isSubmitting = false;
			}, delay);
		};

		function validateMaster(master){
			if(!master){
				return false;
			}
			return true;
		};

		function updateCustomer(customer){
			return customerService.update(customer).then(function (result) {
				if(result && result.success === true){
					$scope.messageSuccess.push('update customer is success');
				} else {
					$scope.messageError.push('update customer is failed');
				}
				resetFormStatus();
			}, function (error) {
				$scope.messageError.push(error);
				resetFormStatus(1000);
			});
		};

		function createCustomer(customer){
			return customerService.create(customer).then(function (result) {
				if(result && result.success === true){
					$scope.messageSuccess.push('create customer is success');
					$scope.customer.CustomerId = result.CustomerId;
				} else {
					$scope.messageError.push('create customer is failed');
				}
				resetFormStatus();
			}, function (error) {
				$scope.messageError.push(error);
				resetFormStatus(1000);
			});
		};
		
		/* buttons */
        // https://docs.angularjs.org/guide/forms
		$scope.save = function (customer) {
			$scope.isSubmitted = true; // validate UI
			if(!customer || !validateMaster(customer)) // validate business rules
			{
				$scope.isSubmitted = false;
				return;
			}

			// start submit to server
			$scope.isSubmitting = true;
			if($scope.formStatus === appCommon.formStatus.isNew){
				return createCustomer(customer).then(function(){
					$timeout(function(){
						$state.go($state.current.parentState);
					}, 3000);
				});
			}
			else if($scope.formStatus === appCommon.formStatus.isEdit){
				return updateCustomer(customer);
			}
		};

		$scope.cancel = function() {            
            $state.go($state.current.parentState);
        }
		
		/* start */
		activate();
	}
})();