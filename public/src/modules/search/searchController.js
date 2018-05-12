(function () {
    'use strict';        
    angular.module('search.controller', ['search.service']).controller('searchController', searchController);
	searchController.$inject = ['$q', '$location', 'searchService'];
	function searchController($q, $location, searchService) {
        /* view-model */
		var vm = this;
		var searchService = new searchService();
		
		/* functions */
		function activate() {
			
		};

		function getRootLocation(location) {
			return $location.$$protocol + ':' + '//' + $location.$$host + ':' + $location.$$port;
		};

		/* start */
		activate();
	}
})();