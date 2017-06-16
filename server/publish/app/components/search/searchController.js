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
		$scope.searchResult = {}
		
		// functions
		$scope.main = function() {						
			searchService.getRestaurants().then(function(result){
				$scope.searchResult = result;
			},function(error){
				console.log(error);
			})
		};

		/* start */
		$scope.main();
	}
})();