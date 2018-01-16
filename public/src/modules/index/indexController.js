(function () {
    'use strict';        
    angular.module('index.controller', []).controller('indexController', indexController);
	indexController.$inject = ['$q'];	
	function indexController($q) {
        /* view-model */
        var vm = this;		
		
		/* functions */
		function activate() {
			console.log('activating() ... indexController ...');
		};
		
		/* start */
		activate();
	}
})();