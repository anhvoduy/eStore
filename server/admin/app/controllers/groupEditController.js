(function () {
    'use strict';    
    app.controller('groupEditController', groupEditController);
    groupEditController.$inject = ['$scope', '$state', '$stateParams', 'appCommon', 'groupService'];    
	function groupEditController($scope, $state, $stateParams, appCommon, groupService) {
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