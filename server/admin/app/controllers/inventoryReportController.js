(function (){
    'use strict';
	app.controller('inventoryReportController', inventoryReportController);
    inventoryReportController.$inject = ['$scope', '$q', '$state', '$stateParams', 'inventoryService', 'reportService'];    
	function inventoryReportController($scope, $q, $state, $stateParams, inventoryService, reportService) {
		// models
		var vm = this;		
		vm.messageSuccess = [];
		vm.messageError = [];
		vm.currentDate = new Date();
		vm.query = {
			InventoryId: 0,
			FromDate: new Date(vm.currentDate.getFullYear(), vm.currentDate.getMonth(), 1),
			ToDate: new Date(vm.currentDate.getFullYear(), vm.currentDate.getMonth() + 1, 0)
		};
		
		// functions
		function activate() {
			inventoryService.getItems().then(function(data){
				vm.inventories = data;
			}, function(err){
				vm.messageError.push(err);
			});
		};

		vm.queryReport = function(query){
			reportService.getCashReport(query.FromDate, query.ToDate).then(function(data){
				vm.transactions = data
			}, function(err){
				vm.messageError.push(err);
			});
		};
		
		/* start */
		activate();
	}
})();