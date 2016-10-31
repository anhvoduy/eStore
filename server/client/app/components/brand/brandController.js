(function () {
    'use strict';        
    app.controller('brandController', brandController);
    brandController.$inject = ['brandService'];        
	function brandController(brandService) {
		// models
		var vm = this;
		vm.lstBrands = [];
		vm.messageSuccess = '';
		vm.messageError = '';
		
		// functions
		function activate() {
			brandService.getBrands().then(function (result) {
				vm.lstBrands = result;
				vm.messageSuccess = String.format("Get Brands is successful. Total: {0} rows", vm.lstBrands.length);
			}, function (error) {
				vm.messageError = error.message;
			});
		}
		
		/* start */
		activate();
	}
})();