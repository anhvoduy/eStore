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
			var params = {
			};
			return this.getData(url, params);
		}
		
		inventoryService.prototype.getItem = function (inventoryKey) {
			var url = String.format('{0}/item', this.api);
			var params = {
				InventoryKey: inventoryKey
			};
			return this.getData(url, params);
		}
		
		inventoryService.prototype.update = function (inventory) {
			var url = String.format('{0}/update', this.api);
			return this.postData(url, inventory);
		}
		
		inventoryService.prototype.delete = function (inventoryId) {
			var url = String.format('{0}/delete/{1}', this.api, inventoryId);			
			return true;
		}

		// TO DO: merge getStockIn() & getStockOut() => getStock()
		inventoryService.prototype.getStockIn = function () {
			var url = String.format('{0}/input/items', this.api);
			var params = {};
			
			var q = $q.defer();
			this.getData(url).then(function (result) {
				angular.forEach(result, function(item){
                    item.StockDate = moment(item.StockDate).format('DD/MM/YYYY');
                });
				q.resolve(result);
			}, function (error) {
				q.reject(error);
			});
			return q.promise;
		}

		// TO DO: merge getStockIn() & getStockOut()
		inventoryService.prototype.getStockOut = function () {			
			var url = String.format('{0}/output/items', this.api);
			var params = {};

			var q = $q.defer();
			this.getData(url).then(function (result) {
				angular.forEach(result, function(item){
                    item.StockDate = moment(item.StockDate).format('DD/MM/YYYY');
                });
				q.resolve(result);
			}, function (error) {
				q.reject(error);
			});
			return q.promise;
		}


		inventoryService.prototype.getStockItemById = function (stockId) {
			return true;
		}

		inventoryService.prototype.getStockItemByKey = function (stockKey) {
			var url = String.format('{0}/stock/item', this.api);
			var params = {
				StockKey: stockKey
			};
			return this.getData(url, params);
		}

		return new inventoryService;
	};
})();