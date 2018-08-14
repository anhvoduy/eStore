(function () {
    'use strict';    
    app.controller('productController', productController);
    productController.$inject = ['FileSaver', 'Blob', '$scope', 'appCommon', 'productService'];    
	function productController(FileSaver, Blob, $scope, appCommon, productService) {
		/* view-model */
		$scope.pagination = appCommon.defaultPagination;
		$scope.messageSuccess = [];
		$scope.messageError = [];

		
		/* functions */
		var activate = function () {
			$scope.getProducts();
			cleanSuccessErrors();
		};

		function cleanSuccessErrors() {
			$scope.messageSuccess = [];
			$scope.messageError = [];
		};

		$scope.getProducts = function(){
			productService.getList($scope.pagination.pageCurrent, $scope.pagination.pageSize)
			.then(function (data) {
				$scope.products = data.PageData;
				$scope.pagination.pageCurrent = data.PageCurrent;
				$scope.pagination.pageSize = data.PageSize;
				$scope.pagination.pageTotal = data.PageTotal;
				$scope.pagination.hitsTotal = data.HitsTotal;
				$scope.pagination.maxSize = Math.ceil(data.HitsTotal/data.PageSize);
				// message
				$scope.messageSuccess.push(String.format("Get Products is successful. Total: {0} rows", $scope.products.length));
			}, function (error) {
				$scope.messageError.push(error);
			});
		};

		$scope.exportFile = function(){
			productService.exportFile()
			.then(function(result) {
				var blob = new Blob([result], {
					type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
				});
				FileSaver.saveAs(blob, 'export_file' + moment(new Date()).format('YYYYMMDDHHmmss') + '.xlsx');
			}, function(error){
				$scope.messageError.push(error);
			})
		}
		
		/* start */
		activate();
	}
})();