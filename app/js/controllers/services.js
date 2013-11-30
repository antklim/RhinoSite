function ServicesCtrl($scope, $sce, SiteText) {
	$scope.activeItem = 'consulting';
	$scope.anchorPrefix = "services-";

	$scope.anchor = function(item) {
		$scope.activeItem = item;
	};

	var getConsulting = function() {
		return SiteText.getContent("services.label.consulting");
	};

	var getConsultingText = function() {
		var head = SiteText.getContent("services.text.consulting.head"),
			body = SiteText.getContent("services.text.consulting.body");

		return $sce.trustAsHtml(head + body);
	};

	var getOptimization = function() {
		return SiteText.getContent("services.label.optimization");
	};

	var getOptimizationText = function() {
		var head = SiteText.getContent("services.text.optimization.head"),
			body = SiteText.getContent("services.text.optimization.body");

		return $sce.trustAsHtml(head + body);
	};

	var getSearch = function() {
		return SiteText.getContent("services.label.search");
	};

	var getSearchText = function() {
		var head = SiteText.getContent("services.text.search.head"),
			body = SiteText.getContent("services.text.search.body");

		return $sce.trustAsHtml(head + body);
	};

	$scope.init = function() {
		$scope.consulting = getConsulting();
		$scope.consultingText = getConsultingText();
		$scope.optimization = getOptimization();
		$scope.optimizationText = getOptimizationText();
		$scope.search = getSearch();
		$scope.searchText = getSearchText();
	};

	$scope.init();

	$scope.$on("LANG_CHANGED", function(event, data) {
		$scope.init();
	});
}