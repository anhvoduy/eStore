(function () {
    'use strict';
    app.controller('userController', userController);
	userController.$inject = ['$scope', 'appCommon', 'userService'];	
	function userController($scope, appCommon, userService) {
		/* models */
		$scope.pagination = appCommon.defaultPagination;
		$scope.messageSuccess = [];
		$scope.messageError = [];
		
		
		/* functions */
		var activate = function () {
			$scope.getUsers();			
		};

		$scope.getUsers = function(){
			userService.getUsers().then(function (data) {
				$scope.users = data;
				// $scope.pagination.pageCurrent = data.PageCurrent;
				// $scope.pagination.pageSize = data.PageSize;
				// $scope.pagination.pageTotal = data.PageTotal;
				// $scope.pagination.hitsTotal = data.HitsTotal;
				// $scope.pagination.maxSize = Math.ceil(data.HitsTotal/data.PageSize);
				// message
				$scope.messageSuccess.push(String.format("Get Users is success. Total: {0} rows", $scope.users.length));
			}, function (error) {
				$scope.messageError.push(error);
			});
		};
		
		
		/* start */
		activate();
	}
})();