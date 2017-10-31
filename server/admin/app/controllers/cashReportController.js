(function () {
	'use strict';
	app.controller('cashReportController', cashReportController);
	cashReportController.$inject = ['cashService'];
	function cashReportController(cashService) {
		// models
		var vm = this;
		vm.messageError = '';
		vm.messageSuccess = '';

		vm.currentDate = new Date();
		vm.query = {
			FromDate: new Date(vm.currentDate.getFullYear(), vm.currentDate.getMonth(), 1),
			ToDate: new Date(vm.currentDate.getFullYear(), vm.currentDate.getMonth() + 1, 0)
		}

		// functions
		var activate = function () {			
		};

		vm.queryReport = function(query){
			console.log(query);
		}
		
		/* start */
		activate();
	}
})();
