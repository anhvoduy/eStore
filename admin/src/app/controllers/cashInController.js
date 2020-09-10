(function () {
    'use strict';    
    app.controller('cashInController', cashInController);
    cashInController.$inject = ['appCommon', 'cashService'];
    
	function cashInController(appCommon, cashService) {
		/* models */
        var vm = this;
        vm.pagination = appCommon.defaultPagination;
		vm.messageError = [];
		vm.messageSuccess = [];

		/* functions */
        function activate() {
            vm.getCashIn();
        };

        function cleanSuccessErrors(){
			vm.messageError = [];
            vm.messageSuccess = [];
        };
        
        vm.getCashIn = function(){
            cleanSuccessErrors();
            cashService.getCashIn(vm.pagination.pageCurrent, vm.pagination.pageSize)
            .then(function (data) {
                vm.transactions = data.PageData;
				vm.pagination.pageCurrent = data.PageCurrent;
				vm.pagination.pageSize = data.PageSize;
				vm.pagination.pageTotal = data.PageTotal;
				vm.pagination.hitsTotal = data.HitsTotal;
                vm.pagination.maxSize = Math.ceil(data.HitsTotal/data.PageSize);
                // message                
                vm.messageSuccess.push(String.format("Get Transactions is successful. Total: {0} rows", vm.transactions.length));
            }, function (error) {
                vm.messageError.push(error);
            });
        };
		
		/* start */
		activate();
	}
})();