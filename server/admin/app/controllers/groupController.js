(function () {
    'use strict';
    app.controller('groupController', groupController);
	groupController.$inject = ['$scope', 'appCommon', 'groupService'];	
	function groupController($scope, appCommon, groupService) {
		/* models */
		$scope.paging = appCommon.defaultPagination;
		$scope.messageSuccess = [];
		$scope.messageError = [];
		
		
		/* functions */
		var activate = function () {
			groupService.getGroups().then(function (result) {
				$scope.groups = result;
				$scope.messageSuccess.push(String.format("Get Groups is success. Total: {0} rows", $scope.groups.length));
			}, function (error) {
				$scope.messageError.push(error);
			});
		};
		
		
		/* start */
		activate();
	}
})();