(function () {
    'use strict';
    app.factory('reviewService', reviewService);
    reviewService.$inject = ['$q', 'baseService'];
    function reviewService($q, baseService) {                        
        // constructor
        var reviewService = function () {            
        }
        reviewService.prototype = new baseService('api/review');
        reviewService.prototype.constructor = reviewService;
        
        // methods        
        reviewService.prototype.createReview = function (review) {
            var url = String.format('{0}/add', this.api);
            
            var q = $q.defer();
            this.add(url, review).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }                
        
        return new reviewService;
    };
})();