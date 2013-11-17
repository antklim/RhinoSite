function SearchCtrl($scope, SiteLang, SearchForm) {
	$scope.searchFor = "";

	$scope.search = function() {
		console.log($scope.searchFor);
	};

	$scope.getPlaceholder = function() {
		var lang = SiteLang.getLanguage();
		return SearchForm.placeholders.search[ lang.key ];
	};

	$scope.getButtonName = function() {
		var lang = SiteLang.getLanguage();
		return SearchForm.buttons.search[ lang.key ];
	};
}