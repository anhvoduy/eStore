(function () {
	'use strict';
	app.factory('inventoryService', inventoryService);
	inventoryService.$inject = ['$q', 'baseService'];
	function inventoryService($q, baseService) {
		// constructor
		var inventoryService = function () {            
		}
		inventoryService.prototype = new baseService('api/inventory');
		inventoryService.prototype.constructor = inventoryService;
		
		// methods
		inventoryService.prototype.getItems = function () {
			var url = String.format('{0}/items', this.api);
			
			var q = $q.defer();
			this.getData(url).then(function (result) {
				q.resolve(result);
			}, function (error) {
				q.reject(error);
			})
			return q.promise;
		}
		
		inventoryService.prototype.getInventoryById = function (inventoryId) {
			var url = String.format('{0}/items/{1}', this.api, inventoryId);
			
			var q = $q.defer();
			this.getData(url).then(function (result) {
				q.resolve(result);
			}, function (error) {
				q.reject(error);
			})
			return q.promise;
		}
		
		inventoryService.prototype.updateInventory = function (inventory) {
			var url = String.format('{0}/update', this.api);
			
			var q = $q.defer();
			this.update(url, inventory).then(function (result) {
				q.resolve(result);
			}, function (error) {
				q.reject(error);
			})
			return q.promise;
		}
		
		inventoryService.prototype.deleteInventory = function (inventoryId) {
			var url = String.format('{0}/delete/{1}', this.api, inventoryId);
			
			var q = $q.defer();
			this.delete(url).then(function (result) {
				q.resolve(result);
			}, function (error) {
				q.reject(error);
			})
			return q.promise;
		}

		inventoryService.prototype.getStockIn = function () {
			var url = String.format('{0}/stockin', this.api);
			
			var q = $q.defer();
			this.getData(url).then(function (result) {				
				q.resolve(result);
			}, function (error) {
				q.reject(error);
			})
			return q.promise;
		}

		inventoryService.prototype.getStockOut = function () {			
			var url = String.format('{0}/stockout', this.api);
			
			var q = $q.defer();
			this.getData(url).then(function (result) {				
				q.resolve(result);
			}, function (error) {
				q.reject(error);
			})
			return q.promise;
		}
		
		return new inventoryService;
	};
})();