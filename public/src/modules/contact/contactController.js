(function () {
    'use strict';        
    angular.module('contact.controller', []).controller('contactController', contactController);
	contactController.$inject = ['$q'];
	function contactController($q) {
        /* view-model */
		var vm = this;		
		
		/* functions */
		function activate() {			
			console.log('activating() ... contactController ...');
		};
		
		/* start */
		activate();
	}
})();