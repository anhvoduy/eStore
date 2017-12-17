(function () {
	'use strict';
	app.controller('cashReportController', cashReportController);
	cashReportController.$inject = ['appCommon', 'reportService'];
	function cashReportController(appCommon, reportService) {
		// models
		var vm = this;
		vm.pagination = appCommon.defaultPagination;		
		vm.messageSuccess = [];
		vm.messageError = [];
		vm.currentDate = new Date();
		vm.query = {
			FromDate: new Date(vm.currentDate.getFullYear(), vm.currentDate.getMonth(), 1),
			ToDate: new Date(vm.currentDate.getFullYear(), vm.currentDate.getMonth() + 1, 0)
		}

		// functions
		function activate() {
			vm.queryReport(vm.query);
		};

		function validateQuery(query){
			console.log(query);
			return true;
		}

		vm.queryReport = function(query){
			if(!validateQuery(query)) return;

			var fromDate = moment(query.FromDate).format('YYYY-MM-DD');
			var toDate = moment(query.ToDate).format('YYYY-MM-DD');
			var pageCurrent = vm.pagination.pageCurrent; 
			var pageSize = vm.pagination.pageSize;

			reportService.getCashReport(pageCurrent, pageSize, fromDate, toDate)
			.then(function(data){
				vm.transactions = data.PageData;
				vm.pagination.pageCurrent = data.PageCurrent;
				vm.pagination.pageSize = data.PageSize;
				vm.pagination.pageTotal = data.PageTotal;
				vm.pagination.hitsTotal = data.HitsTotal;
				vm.pagination.maxSize = Math.ceil(data.HitsTotal/data.PageSize);
				// message
				vm.messageSuccess.push(String.format("Get Transactions is successful. Total: {0} rows", vm.transactions.length));
			}, function(err){
				vm.messageError.push(err);
			});
		};
		
		/* start */
		activate();
	}
})();
