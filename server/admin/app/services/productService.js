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
        productService.prototype.getList = function (pageCurrent, pageSize) {
            var url = String.format('{0}/items', this.api);
            var params = {
                PageCurrent: pageCurrent,
                PageSize: pageSize
            };
            return this.getData(url, params);
        };
        
        productService.prototype.getProductById = function (productId) {
            var url = String.format('{0}/item', this.api);
            var params = {
                ProductId: productId
            };           
            return this.getData(url, params);
        };

        productService.prototype.getProductByKey = function (productKey) {
            var url = String.format('{0}/item', this.api);
            var params = {                
                ProductKey: productKey
            };
            return this.getData(url, params);
        };
        
        productService.prototype.getProductByBrand = function (brandKey) {
            var url = String.format('{0}/brand/items', this.api);
            var params = {
                BrandKey: brandKey
            }
            
            var q = $q.defer();
            this.getData(url, params).then(function (result) {
				// extend models
				angular.forEach(result, function (item) {
                    item.Created = moment(item.Created).format('DD/MM/YYYY');
					// if (item.LatestReviewInfo != undefined && item.LatestReviewInfo.length > 0) {
					// 	var reviewInfo = JSON.parse(item.LatestReviewInfo);
					// 	item.Review = {};
					// 	item.Review.UserName = reviewInfo.UserName;
					// 	item.Review.Email = reviewInfo.Email;
					// 	item.Review.Rating = reviewInfo.Rating;
					// 	item.Review.Comment = reviewInfo.Comment;
					// }
				});
				q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        };
        
        productService.prototype.create = function (product) {
            var url = String.format('{0}/create', this.api);
            return this.postData(url, product);
        };
        
        productService.prototype.update = function (product) {
            var url = String.format('{0}/update', this.api);            
            return this.postData(url, product);
        };
        
        return new productService;
    };
})();