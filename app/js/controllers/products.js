function ProductsCtrl($scope,  $sce, $location, SiteMap, SiteText) {
	$scope.activeItem = 'products';
	$scope.anchorPrefix = "prod-";

	$scope.anchor = function(item) {
		$scope.activeItem = item;
	};

	$scope.getProducts = function() {
		return SiteText.getContent("products.label.products");
	};

	$scope.getProductsText = function() {
		var head = SiteText.getContent("products.text.products_head"),
			body = SiteText.getContent("products.text.products_body");
		var res = "";
		var tpl = "<p class='lead'>__HEAD__</p>";

		res += tpl.replace(/__HEAD__/g, head);

		tpl = "<p>__BODY__</p>";
		for(var i=0, len=body.length; i<len; i++) {
			res += tpl.replace(/__BODY__/g, body[ i ]);
		}

		return $sce.trustAsHtml(res);
	};

	$scope.getOurPlugins = function() {
		return SiteText.getContent("products.label.plugins");
	};

	$scope.getOurPluginsText = function() {
		var head = SiteText.getContent("products.text.plugins_head"),
			body = SiteText.getContent("products.text.plugins_body");
		var res = "";
		var tpl = "<p class='lead'>__HEAD__</p><p>__BODY__</p>";

		res += tpl.replace(/__HEAD__/g, head).replace(/__BODY__/g, body);

		return $sce.trustAsHtml(res);
	};

	$scope.contact = function() {
		console.log('contact');
		$location.path(SiteMap[ 'contact' ].location);
	};
}