(function () {
    'use strict';        
    app.controller('HomeController', HomeController);
    HomeController.$inject = ['$scope'];        
    function HomeController($scope) {
        // declare models
        var vm = this;        
        vm.messageSuccess = '';
        vm.messageError = '';        

        // activate
        activate();    

        // declare functions
        function activate() {
			//console.log('activate');
        }
    }
})();