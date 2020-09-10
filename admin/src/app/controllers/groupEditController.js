(function () {
    'use strict';    
    app.controller('groupEditController', groupEditController);
    groupEditController.$inject = ['$scope', '$timeout', '$state', '$stateParams', 'appCommon', 'groupService'];    
	function groupEditController($scope, $timeout, $state, $stateParams, appCommon, groupService) {
		/* models */
		$scope.groupKey = $stateParams.groupKey;
		$scope.formStatus = appCommon.isUndefined($scope.groupKey) 
			? appCommon.formStatus.isNew 
			: appCommon.formStatus.isEdit;
		$scope.formTitle = appCommon.setFormTitle($scope.formStatus, 'Group');
		$scope.messageSuccess = [];
		$scope.messageError = [];
		
		/* functions */
		var activate = function () {
			if(appCommon.isUndefined($scope.groupKey)) return;

			groupService.getGroupByKey($scope.groupKey).then(function (result) {
				$scope.group = result;
				if (appCommon.isUndefined($scope.group)) {
					$scope.messageError.push(String.format('The group is not found'));
				}
			}, function (error) {
				$scope.messageError.push(error);
			});
		};

		// if update group success/failed -> reset status after 3 seconds
		function resetFormStatus(delay) {
			if(!delay) delay = 3000;
			$timeout(function () {
				$scope.messageSuccess = [];
				$scope.messageError = [];
				$scope.messageProductSuccess = [];
				$scope.messageProductError = [];
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

		function updateGroup(group){
			return groupService.update(group).then(function (result) {
				if(result && result.success === true){
					$scope.messageSuccess.push('update group is success');
				} else {
					$scope.messageError.push('update group is failed');
				}
				resetFormStatus();
			}, function (error) {
				$scope.messageError.push(error);
				resetFormStatus(1000);
			});
		};

		function createGroup(group){
			return true;
		};


		/* buttons */
		// https://docs.angularjs.org/guide/forms
		$scope.save = function (group) {
			$scope.isSubmitted = true; // validate UI
			if(!group || !validateMaster(group)) // validate business rules
			{
				$scope.isSubmitted = false;
				return;
			}

			// start submit to server
			$scope.isSubmitting = true;
			if($scope.formStatus === appCommon.formStatus.isNew){
			 	return createGroup(group).then(function(){
			 		$timeout(function(){
			 			$state.go($state.current.parentState);
			 		}, 3000);
			 	});
			}
			else if($scope.formStatus === appCommon.formStatus.isEdit){
			 	return updateGroup(group);
			}
		};

		$scope.cancel = function() {
            $state.go($state.current.parentState);
        };
		
		
		/* start */
		activate();
	}
})();