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
		$scope.messageSuccess = [];
		$scope.messageError = [];		
		
		
		/* functions */
		function activate() {
			if(appCommon.isUndefined($scope.accountKey)) return;

            accountService.getAccountByKey($scope.accountKey).then(function (result) {
                $scope.account = result;
				if (appCommon.isUndefined($scope.account)) {
                    $scope.messageError.push(String.format("The account: {0} not found.", $scope.accountKey));
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
            if (appCommon.isUndefined($scope.account)) return;

            $scope.disabledButton = true;
            accountService.updateAccount($scope.account).then(function (result) {
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