function SearchCtrl($scope, SiteText) {
	$scope.searchFor = "";

	$scope.search = function() {
		console.log($scope.searchFor);
	};

	$scope.getPlaceholder = function() {
		return SiteText.getContent("search.placeholder.search");
	};

	$scope.getButtonName = function() {
		return SiteText.getContent("search.button.search");
	};
}