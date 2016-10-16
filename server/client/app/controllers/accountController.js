(function () {
    'use strict';        
    app.controller('BrandController', BrandController);
    BrandController.$inject = ['brandService'];        
	function BrandController(brandService) {
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