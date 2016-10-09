(function () {
    'use strict';        
    app.controller('HomeController', HomeController);
    HomeController.$inject = ['$scope'];        
    function HomeController($scope) {
        // declare models
        var vm = this;
        vm.lstBrands = [];
        vm.messageSuccess = '';
        vm.messageError = '';
        vm.getBrands = getBrands;

        // activate
        activate();    

        // declare functions
        function activate() {
			//console.log('activate');
        }
    }
})();