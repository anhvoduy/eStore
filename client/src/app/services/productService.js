(function () {
    'use strict';
    app.factory('productService', productService);
    productService.$inject = ['$q', 'baseService', 'Upload'];
    function productService($q, baseService, Upload) {
        // constructor
        var productService = function () {            
        }
        productService.prototype = new baseService('api/product');
        productService.prototype.constructor = productService;
        
        // methods
        productService.prototype.upload = function (imageUrl, productId) {            
            return Upload.upload({
                url: String.format('{0}/upload', this.api),
                data: {
                    ProductId: productId,
                    ProductImage: imageUrl
                }
            });
        };

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
        
        productService.prototype.getProductByBrand = function (brandKey, pageCurrent, pageSize) {
            var url = String.format('{0}/brand/items', this.api);
            var params = {
                BrandKey: brandKey,
                PageCurrent: pageCurrent,
                PageSize: pageSize
            }
            
            var q = $q.defer();
            this.getData(url, params).then(function (result) {
				// extend model from JSON
				angular.forEach(result.PageData, function (item) {
                    item.Created = moment(item.Created).format('DD/MM/YYYY');
					// if (item.LatestReviewInfo != undefined) {
					// 	var review = JSON.parse(item.LatestReviewInfo);
					// 	item.Review = {
                    //         UserName: review.UserName,
                    //         Email: review.Email,
                    //         Rating: review.Rating,
                    //         Comment: review.Comment
                    //     };
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

        productService.prototype.delete = function (productId, productKey) {
            var url = String.format('{0}/delete', this.api);
            var params = {
                ProductId: productId,
                ProductKey: productKey
            }
            return this.postData(url, params);
        };
        
        return new productService;
    };
})();