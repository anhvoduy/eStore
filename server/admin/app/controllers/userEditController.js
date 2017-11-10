(function () {
    'use strict';    
    app.controller('userEditController', userEditController);
    userEditController.$inject = ['$scope', '$state', '$stateParams', 'appCommon', 'userService'];    
	function userEditController($scope, $state, $stateParams, appCommon, userService) {
		/* models */
		$scope.userKey = $stateParams.userKey;
		$scope.formStatus = appCommon.isUndefined($scope.userKey) 
			? appCommon.formStatus.isNew 
			: appCommon.formStatus.isEdit;
		$scope.formTitle = appCommon.setFormTitle($scope.formStatus, 'User');
		$scope.messageSuccess = [];
		$scope.messageError = [];
		$scope.userTypes = [
			{ Key: 'ADMIN', Label: 'ADMIN' }, 
			{ Key: 'USER', Label: 'USER' }
		];
		
		
		/* functions */
		var activate = function () {
			userService.getUserByKey($scope.userKey).then(function (result) {
				vm.user = result;				
			}, function (error) {
				vm.messageError.push(error);
			});
		};
		
		
		/* start */
		activate();
	}
})();