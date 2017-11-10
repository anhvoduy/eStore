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
			}, function (error) {
				$scope.messageError.push(error);
			});
		};


		/* buttons */
		$scope.cancel = function() {
            $state.go($state.current.parentState);
        };
		
		
		/* start */
		activate();
	}
})();