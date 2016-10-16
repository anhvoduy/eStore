(function (){
    'use strict';
	app.controller('BrandDetailController', BrandDetailController);
    BrandDetailController.$inject = ['$timeout', 'brandService', 'productService', '$state', '$stateParams'];    
	function BrandDetailController($timeout, brandService, productService, $state, $stateParams) {
		// models
		var vm = this;
		vm.brandId = $stateParams.brandID;
		vm.brand = {};
		vm.lstProducts = [];
		vm.disabledButton = false;
		vm.messageSuccess = '';
		vm.messageError = '';
		vm.messageSuccessProduct = '';
		vm.messageErrorProduct = '';
		vm.save = save;
		
		// functions
		function activate() {
			brandService.getBrandById(vm.brandId).then(function (result) {
				vm.brand = result;
				if (vm.brand === undefined) {
					vm.messageError = String.format("The brand id: {0} not found.", vm.brandId);
					vm.disabledButton = true;
				} else {
					vm.disabledButton = false;
				}
			}, function (error) {
				vm.messageError = error.message;
				vm.disabledButton = true;
			});
			
			productService.getProductByBrand(vm.brandId).then(function (result) {
				vm.lstProducts = result;
				if (vm.lstProducts === undefined || vm.lstProducts.length === 0) {
					vm.messageErrorProduct = String.format("The list of products belongs to brand id: {0} not found.", vm.brandId);
				} else {
					vm.messageSuccessProduct = String.format("Get Products is successful. Total: {0} rows", vm.lstProducts.length);
				}
			}, function (error) {
				vm.messageErrorProduct = error.message;
				vm.disabledButton = true;
			});
		}
		
		// if update brand success/failed -> reset status after 5s  
		function resetFormStatus() {
			$timeout(function () {
				vm.disabledButton = false;
				vm.messageSuccess = '';
				vm.messageError = '';
			}, 5000);
		}
		
		// buttons
		function save() {
			if (vm.brand === undefined) return;
			
			vm.disabledButton = true;
			brandService.updateBrand(vm.brand).then(function (result) {				
                vm.messageSuccess = result.message;
				resetFormStatus();
			}, function (error) {
				vm.messageError = error.message;
				resetFormStatus();
			});
		}
		
		/* start */
		activate();
	}
})();