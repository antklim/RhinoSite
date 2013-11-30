function ProductsCtrl($scope, $sce, SiteText) {
	$scope.activeItem = 'products';
	$scope.anchorPrefix = "prod-";

	$scope.anchor = function(item) {
		$scope.activeItem = item;
	};

	$scope.getProducts = function() {
		return SiteText.getContent("products.label.products");
	};

	$scope.getProductsText = function() {
		var head = SiteText.getContent("products.text.products.head"),
			body = SiteText.getContent("products.text.products.body");

		return $sce.trustAsHtml(head + body);
	};

	$scope.getOurPlugins = function() {
		return SiteText.getContent("products.label.plugins");
	};

	$scope.getOurPluginsText = function() {
		var head = SiteText.getContent("products.text.plugins.head"),
			body = SiteText.getContent("products.text.plugins.body");

		return $sce.trustAsHtml(head + body);
	};
}