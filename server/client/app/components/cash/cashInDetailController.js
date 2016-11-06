(function () {
    'use strict';    
    app.controller('cashInDetailController', cashInDetailController);
    cashInDetailController.$inject = ['$stateParams', 'appContext', 'cashService'];    
	function cashInDetailController($stateParams, appContext, cashService) {
		// models		
		var vm = this;
				
		// functions
		var activate = function () {
			
		};
		
		/* start */
		activate();
	}
})();
