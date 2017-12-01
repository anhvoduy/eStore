(function () {
    'use strict';    
    app.controller('userEditController', userEditController);
    userEditController.$inject = ['$scope', '$state', '$stateParams', 'appCommon', 'userService'];    
	function userEditController($scope, $state, $stateParams, appCommon, userService) {
		/* models */
		$scope.userKey = $stateParams.userKey;
		$scope.userTypes = appCommon.userTypes;
		$scope.formStatus = appCommon.isUndefined($scope.userKey) 
			? appCommon.formStatus.isNew 
			: appCommon.formStatus.isEdit;
		$scope.formTitle = appCommon.setFormTitle($scope.formStatus, 'User');
		$scope.messageSuccess = [];
		$scope.messageError = [];

		
		/* functions */
		var activate = function () {
			if(appCommon.isUndefined($scope.userKey)) return;

			userService.getUserByKey($scope.userKey).then(function (result) {
				$scope.user = result;
				if (appCommon.isUndefined($scope.user)) {
                    $scope.messageError.push(String.format("The user key: {0} not found.", $scope.userKey));
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

		function updateUser(user){
			return userService.update(user).then(function (result) {
				if(result && result.success === true){
					$scope.messageSuccess.push('update user is success');
				} else {
					$scope.messageError.push('update user is failed');
				}
				resetFormStatus();
			}, function (error) {
				$scope.messageError.push(error);
				resetFormStatus(1000);
			});
		};

		function createUser(user){
			return userService.create(user).then(function (result) {
				if(result && result.success === true){
					$scope.messageSuccess.push('create user is success');
					$scope.user.UserId = result.UserId;
				} else {
					$scope.messageError.push('create user is failed');
				}
				resetFormStatus();
			}, function (error) {
				$scope.messageError.push(error);
				resetFormStatus(1000);
			});
		};


		/* buttons */
        // https://docs.angularjs.org/guide/forms
		$scope.save = function (user) {
			$scope.isSubmitted = true; // validate UI
			if(!user || !validateMaster(user)) // validate business rules
			{
				$scope.isSubmitted = false;
				return;
			}

			// start submit to server
			$scope.isSubmitting = true;
			if($scope.formStatus === appCommon.formStatus.isNew){
				return createUser(user).then(function(){
					$timeout(function(){
						$state.go($state.current.parentState);
					}, 3000);
				});
			}
			else if($scope.formStatus === appCommon.formStatus.isEdit){
				return updateUser(user);
			}
		};

		$scope.cancel = function() {
            $state.go($state.current.parentState);
        };
		
		
		/* start */
		activate();
	}
})();