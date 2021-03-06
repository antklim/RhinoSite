function ProductsCtrl($scope, $sce, SiteText) {
	$scope.activeItem = 'products';
	$scope.anchorPrefix = "prod-";

	$scope.anchor = function(item) {
		$scope.activeItem = item;
	};

	var getProducts = function() {
		return SiteText.getContent("products.label.products");
	};

	var getProductsText = function() {
		var head = SiteText.getContent("products.text.products.head"),
			body = SiteText.getContent("products.text.products.body");

		return $sce.trustAsHtml(head + body);
	};

	$scope.init = function() {
		$scope.products = getProducts();
		$scope.productsText = getProductsText();
	};

	$scope.init();
	
	$scope.$on("LANG_CHANGED", function(event, data) {
		$scope.init();
	});
}