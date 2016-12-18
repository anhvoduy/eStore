(function () {
    'use strict';    
    app.controller('searchController', searchController);
    searchController.$inject = ['$scope','$timeout', '$state', '$stateParams', 'searchService'];    
	function searchController($scope, $timeout, $state, $stateParams, searchService) {
		// models
		$scope.searchOption = {
			fromDate: new Date(),
			toDate: new Date(),
			keyword: ''
		}
		
		// functions
		$scope.main = function() {			
			console.log('start main .....');
		};

		/* start */
		$scope.main();
	}
})();