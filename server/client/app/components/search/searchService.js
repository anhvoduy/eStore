(function () {
	'use strict';
	app.factory('searchService', searchService);
	searchService.$inject = ['$q', 'baseService'];
	function searchService($q, baseService) {
		// constructor
		var searchService = function () {            
		}
		searchService.prototype = new baseService('api/search');
		searchService.prototype.constructor = searchService;
		
		// methods
		searchService.prototype.queryMatch = function () {
			var url = String.format('{0}/items', this.api);
			
			var q = $q.defer();
			this.getData(url).then(function (result) {
				q.resolve(result);
			}, function (error) {
				q.reject(error);
			})
			return q.promise;
		}
		
		searchService.prototype.queryFuzzy = function () {
			var url = String.format('{0}/items/{1}', this.api, inventoryId);
			
			var q = $q.defer();
			this.getData(url).then(function (result) {
				q.resolve(result);
			}, function (error) {
				q.reject(error);
			})
			return q.promise;
		}
		
		return new searchService;
	};
})();