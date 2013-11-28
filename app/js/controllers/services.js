function ServicesCtrl($scope, $sce, SiteText) {
	$scope.activeItem = 'consulting';
	$scope.anchorPrefix = "services-";

	$scope.anchor = function(item) {
		$scope.activeItem = item;
	};

	$scope.getConsulting = function() {
		return SiteText.getContent("services.label.consulting");
	};

	$scope.getConsultingText = function() {
		var head = SiteText.getContent("services.text.consulting_head"),
			body = SiteText.getContent("services.text.consulting_body");
		var res = "";
		var tpl = "<p class='lead'>__HEAD__</p><p>__BODY__</p>";

		res += tpl.replace(/__HEAD__/g, head).replace(/__BODY__/g, body);

		return $sce.trustAsHtml(res);
	};

	$scope.getOptimization = function() {
		return SiteText.getContent("services.label.optimization");
	};

	$scope.getOptimizationText = function() {
		var head = SiteText.getContent("services.text.optimization_head"),
			body = SiteText.getContent("services.text.optimization_body");
		var res = "";
		var tpl = "<p class='lead'>__HEAD__</p><p>__BODY__</p>";

		res += tpl.replace(/__HEAD__/g, head).replace(/__BODY__/g, body);

		return $sce.trustAsHtml(res);
	};

	$scope.getSearch = function() {
		return SiteText.getContent("services.label.search");
	};

	$scope.getSearchText = function() {
		var head = SiteText.getContent("services.text.search_head"),
			body = SiteText.getContent("services.text.search_body");
		var res = "";
		var tpl = "<p class='lead'>__HEAD__</p><p>__BODY__</p>";

		res += tpl.replace(/__HEAD__/g, head).replace(/__BODY__/g, body);

		return $sce.trustAsHtml(res);
	};
}