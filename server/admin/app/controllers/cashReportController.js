(function () {
	'use strict';
	app.controller('cashReportController', cashReportController);
	cashReportController.$inject = ['reportService'];
	function cashReportController(reportService) {
		// models
		var vm = this;
		vm.messageSuccess = [];
		vm.messageError = [];
		vm.currentDate = new Date();
		vm.query = {
			FromDate: new Date(vm.currentDate.getFullYear(), vm.currentDate.getMonth(), 1),
			ToDate: new Date(vm.currentDate.getFullYear(), vm.currentDate.getMonth() + 1, 0)
		}

		// functions
		var activate = function () {			
		};

		vm.queryReport = function(query){			
			reportService.getCashReport(query.FromDate, query.ToDate)
			.then(function(data){
				vm.stocks = data
			}, function(err){
				vm.messageError.push(err);
			});
		};
		
		/* start */
		activate();
	}
})();
