(function () {
    'use strict';
    app.controller('loginController', loginController);
    loginController.$inject = ['$scope', '$rootScope', '$location', 'authService']; 

    function loginController($scope, $rootScope, $location, authService) {
        // reset login status
        $scope.dataLoading = false;
		authService.clearCredentials();

		$scope.login = function () {
			$scope.dataLoading = true;
			authService.authenticate($scope.username, $scope.password).then(function (result) {
                if (result.success) {
                    authService.setCredentials(result.user);
                    $location.path('/');
                } else {
                    $scope.error = result.message;
                    $scope.dataLoading = false;
                }
            }, function (result) {
                $scope.error = result.message;
                $scope.dataLoading = false;
            });
		};
	}
})();