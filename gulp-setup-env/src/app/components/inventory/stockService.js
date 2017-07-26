(function () {
	'use strict';
	app.factory('stockService', stockService);
	stockService.$inject = ['$q', 'baseService'];
	function stockService($q, baseService) {
		// constructor
		var stockService = function () {            
		}
		stockService.prototype = new baseService('api/inventory');
		stockService.prototype.constructor = stockService;
		
		// methods
		stockService.prototype.getInventories = function () {
			var url = String.format('{0}/items', this.api);
			
			var q = $q.defer();
			this.getData(url).then(function (result) {
				q.resolve(result);
			}, function (error) {
				q.reject(error);
			})
			return q.promise;
		}
		
		stockService.prototype.getInventoryById = function (inventoryId) {
			var url = String.format('{0}/items/{1}', this.api, inventoryId);
			
			var q = $q.defer();
			this.getData(url).then(function (result) {
				q.resolve(result);
			}, function (error) {
				q.reject(error);
			})
			return q.promise;
		}
		
		stockService.prototype.updateInventory = function (inventory) {
			var url = String.format('{0}/update', this.api);
			
			var q = $q.defer();
			this.update(url, inventory).then(function (result) {
				q.resolve(result);
			}, function (error) {
				q.reject(error);
			})
			return q.promise;
		}
		
		stockService.prototype.deleteInventory = function (inventoryId) {
			var url = String.format('{0}/delete/{1}', this.api, inventoryId);
			
			var q = $q.defer();
			this.delete(url).then(function (result) {
				q.resolve(result);
			}, function (error) {
				q.reject(error);
			})
			return q.promise;
		}

		stockService.prototype.getStockIn = function () {
			var url = String.format('{0}/stockin', this.api);
			
			var q = $q.defer();
			this.getData(url).then(function (result) {				
				q.resolve(result);
			}, function (error) {
				q.reject(error);
			})
			return q.promise;
		}

		stockService.prototype.getStockOut = function () {			
			var url = String.format('{0}/stockout', this.api);
			
			var q = $q.defer();
			this.getData(url).then(function (result) {				
				q.resolve(result);
			}, function (error) {
				q.reject(error);
			})
			return q.promise;
		}
		
		return new stockService;
	};
})();