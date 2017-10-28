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
		searchService.prototype.getRestaurants = function () {
			var url = String.format('{0}/restaurants', this.api);
			
			var q = $q.defer();
			this.getData(url).then(function (result) {
				// extend models
				var restaurants = [];
				angular.forEach(result, function(item){
					restaurants.push(item._source);
				});				
				q.resolve(restaurants);
			}, function (error) {
				q.reject(error);
			});
			return q.promise;
		}				
		
		return new searchService;
	};
})();