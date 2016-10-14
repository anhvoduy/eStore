(function () {
    'use strict';
    app.factory('productService', productService);
    productService.$inject = ['$q', 'baseService'];
    function productService($q, baseService) {
        // constructor
        var productService = function () {            
        }
        productService.prototype = new baseService('api/product');
        productService.prototype.constructor = productService;
        
        // methods                
        productService.prototype.getProductsPaging = function (pageIndex) {
            var url = String.format('{0}/itemspaging/{1}', this.api, pageIndex);
            
            var q = $q.defer();
            this.getData(url).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }
        
        productService.prototype.getProductById = function (productId) {
            var url = String.format('{0}/items/{1}', this.api, productId);
            
            var q = $q.defer();
            this.getData(url).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }
        
        productService.prototype.getProductByBrand = function (brandId) {
            var url = String.format('{0}/itemsbrand/{1}', this.api, brandId);
            
            var q = $q.defer();
            this.getData(url).then(function (result) {
				// extend models
				angular.forEach(result, function (item) {
					if (item.LatestReviewInfo != undefined && item.LatestReviewInfo.length > 0) {
						var reviewInfo = JSON.parse(item.LatestReviewInfo);
						item.Review = {};
						item.Review.UserName = reviewInfo.UserName;
						item.Review.Email = reviewInfo.Email;
						item.Review.Rating = reviewInfo.Rating;
						item.Review.Comment = reviewInfo.Comment;
					}
				});
				q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }        
        
        return new productService;
    };
})();