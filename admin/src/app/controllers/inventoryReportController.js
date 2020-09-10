(function (){
    'use strict';
	app.controller('inventoryReportController', inventoryReportController);
    inventoryReportController.$inject = ['$filter', '$state', '$stateParams', 'inventoryService', 'reportService'];
	function inventoryReportController($filter, $state, $stateParams, inventoryService, reportService) {
		/* models */
		var vm = this;		
		vm.messageSuccess = [];
		vm.messageError = [];
		vm.currentDate = new Date();
		vm.query = {
			InventoryId: 0,
			InventoryName: '',
			FromDate: new Date(vm.currentDate.getFullYear(), vm.currentDate.getMonth(), 1),
			ToDate: new Date(vm.currentDate.getFullYear(), vm.currentDate.getMonth() + 1, 0)
		};
		
		
		/* functions */
		function activate() {
			inventoryService.getItems().then(function(data){
				vm.inventories = data;
				if(vm.inventories && vm.inventories.length > 0){
					vm.query.InventoryId = vm.inventories[0].InventoryId;
					vm.query.InventoryName = vm.inventories[0].InventoryName;
				}
			}, function(err){
				vm.messageError.push(err);
			});
		};

		vm.changeSelectedInventory = function(){
			var selectedInventory = $filter('filter')(vm.inventories, function (d) {
				return d.InventoryId === vm.query.InventoryId;
			})[0];
			vm.query.InventoryId = selectedInventory.InventoryId;
			vm.query.InventoryName = selectedInventory.InventoryName;
		}

		vm.queryReport = function(query){
			console.log(query);
			reportService.getCashReport(query.InventoryId, query.FromDate, query.ToDate).then(function(data){
				vm.transactions = data
			}, function(err){
				vm.messageError.push(err);
			});
		};
		
		/* start */
		activate();
	}
})();