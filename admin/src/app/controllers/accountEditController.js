(function (){
    'use strict';
	app.controller('accountEditController', accountEditController);
    accountEditController.$inject = ['$scope', '$timeout', '$state', '$stateParams', 'appCommon', 'accountService'];
    function accountEditController($scope, $timeout, $state, $stateParams, appCommon, accountService) {
		/* models */
		$scope.accountKey = $stateParams.accountKey;
		$scope.formStatus = appCommon.isUndefined($scope.accountKey) 
			? appCommon.formStatus.isNew 
			: appCommon.formStatus.isEdit;
		$scope.formTitle = appCommon.setFormTitle($scope.formStatus, 'Account');
		$scope.accountTypeList = appCommon.accountTypeList;
		$scope.messageSuccess = [];
		$scope.messageError = [];
		
		
		/* functions */
		function activate() {
			if(appCommon.isUndefined($scope.accountKey)) return;

            accountService.getAccountByKey($scope.accountKey).then(function (result) {
                $scope.account = result;
				if (appCommon.isUndefined($scope.account)) {
                    $scope.messageError.push(String.format("The account key: {0} not found.", $scope.accountKey));
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
		
		function updateAccount(account){
			return accountService.update(account).then(function (result) {
				if(result && result.success === true){
					$scope.messageSuccess.push('update account is success');
				} else {
					$scope.messageError.push('update account is failed');
				}
				resetFormStatus();
			}, function (error) {
				$scope.messageError.push(error);
				resetFormStatus(1000);
			});
		};

		function createAccount(account){
			return accountService.create(account).then(function (result) {
				if(result && result.success === true){
					$scope.messageSuccess.push('create account is success');
					$scope.account.AccountId = result.AccountId;
				} else {
					$scope.messageError.push('create account is failed');
				}
				resetFormStatus();
			}, function (error) {
				$scope.messageError.push(error);
				resetFormStatus(1000);
			});
		};
		
		/* buttons */
        // https://docs.angularjs.org/guide/forms
		$scope.save = function (account) {
			$scope.isSubmitted = true; // validate UI
			if(!account || !validateMaster(account)) // validate business rules
			{
				$scope.isSubmitted = false;
				return;
			}

			// start submit to server
			$scope.isSubmitting = true;
			if($scope.formStatus === appCommon.formStatus.isNew){
				return createAccount(account).then(function(){
					$timeout(function(){
						$state.go($state.current.parentState);
					}, 3000);
				});
			}
			else if($scope.formStatus === appCommon.formStatus.isEdit){
				return updateAccount(account);
			}
		};

		$scope.cancel = function() {
            $state.go($state.current.parentState);
		};
		
		$scope.changeSelectedDebitOrCredit = function(item){
			console.log(item);
		};
		
		/* start */
		activate();
	}
})();