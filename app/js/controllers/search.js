function SearchCtrl($scope, SiteText) {
	$scope.searchFor = "";

	$scope.search = function() {
		console.log($scope.searchFor);
	};

	var getSearchPH = function() {
		return SiteText.getContent("search.placeholder.search");
	};

	var getSearchButton = function() {
		return SiteText.getContent("search.button.search");
	};

	$scope.init = function() {
		$scope.searchPH = getSearchPH();
		$scope.searchButton = getSearchButton();
	};

	$scope.init();

	$scope.$on("LANG_CHANGED", function(event, data) {
		$scope.init();
	});
}