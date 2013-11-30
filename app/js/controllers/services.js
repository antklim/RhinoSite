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
		var head = SiteText.getContent("services.text.consulting.head"),
			body = SiteText.getContent("services.text.consulting.body");

		return $sce.trustAsHtml(head + body);
	};

	$scope.getOptimization = function() {
		return SiteText.getContent("services.label.optimization");
	};

	$scope.getOptimizationText = function() {
		var head = SiteText.getContent("services.text.optimization.head"),
			body = SiteText.getContent("services.text.optimization.body");

		return $sce.trustAsHtml(head + body);
	};

	$scope.getSearch = function() {
		return SiteText.getContent("services.label.search");
	};

	$scope.getSearchText = function() {
		var head = SiteText.getContent("services.text.search.head"),
			body = SiteText.getContent("services.text.search.body");

		return $sce.trustAsHtml(head + body);
	};
}