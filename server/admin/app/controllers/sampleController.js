(function () {
	'use strict';
    app.controller('sampleController', sampleController);
	sampleController.$inject = ['$scope', '$rootScope'];
	
	function sampleController($scope, $rootScope) {
		$scope.today = function () {
			$scope.dt = new Date();
		};
		$scope.today();
		
		$scope.clear = function () {
			$scope.dt = null;
		};
		
		$scope.inlineOptions = {
			customClass: getDayClass,
			minDate: new Date(),
			showWeeks: true
		};
		
		$scope.dateOptions = {
			dateDisabled: disabled,
			formatYear: 'yy',
			maxDate: new Date(2020, 5, 22),
			minDate: new Date(),
			startingDay: 1
		};
		
		// Disable weekend selection
		function disabled(data) {
			var date = data.date,
				mode = data.mode;
			return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
		}
		
		$scope.toggleMin = function () {
			$scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
			$scope.dateOptions.minDate = $scope.inlineOptions.minDate;
		};
		
		$scope.toggleMin();
		
		$scope.open1 = function () {
			$scope.popup1.opened = true;
		};
		
		$scope.open2 = function () {
			$scope.popup2.opened = true;
		};
		
		$scope.setDate = function (year, month, day) {
			$scope.dt = new Date(year, month, day);
		};
		
		$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
		$scope.format = $scope.formats[0];
		$scope.altInputFormats = ['M!/d!/yyyy'];
		
		$scope.popup1 = {
			opened: false
		};
		
		$scope.popup2 = {
			opened: false
		};
		
		var tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate() + 1);
		var afterTomorrow = new Date();
		afterTomorrow.setDate(tomorrow.getDate() + 1);
		$scope.events = [
			{
				date: tomorrow,
				status: 'full'
			},
			{
				date: afterTomorrow,
				status: 'partially'
			}
		];
		
		function getDayClass(data) {
			var date = data.date, mode = data.mode;
			if (mode === 'day') {
				var dayToCheck = new Date(date).setHours(0, 0, 0, 0);				
				for (var i = 0; i < $scope.events.length; i++) {
					var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);					
					if (dayToCheck === currentDay) {
						return $scope.events[i].status;
					}
				}
			}			
			return '';
		};
	};


	app.controller('sampleUploadController', sampleUploadController);
	sampleUploadController.$inject = ['$scope', 'Upload',];
	function sampleUploadController($scope, Upload){
		var vm = this;
		vm.progress = 0;
		vm.user = {};

		vm.upload = function (dataUrl) {

			Upload.upload({
				url: '/api/product/upload',
				data: {
				  newProductImage: dataUrl
				}
			}).then(function (response) {
				$timeout(function () {
				  onSuccessItem(response.data);
				});
			}, function (response) {
				if (response.status > 0) onErrorItem(response.data);
			}, function (evt) {
				vm.progress = parseInt(100.0 * evt.loaded / evt.total, 10);
			});
		};

		// Called after the user has successfully uploaded a new picture
		function onSuccessItem(response) {
			// Show success message
			// Notification.success({ message: '<i class="glyphicon glyphicon-ok"></i> Successfully changed profile picture' });
	  
			// Populate user object
			//vm.user = Authentication.user = response;	  
			// Reset form
			vm.fileSelected = false;
			vm.progress = 0;
		};
	  
		// Called after the user has failed to upload a new picture
		function onErrorItem(response) {
			vm.fileSelected = false;
			vm.progress = 0;	  
			// Show error message
			// Notification.error({ message: response.message, title: '<i class="glyphicon glyphicon-remove"></i> Failed to change profile picture' });
		};
	};
})();