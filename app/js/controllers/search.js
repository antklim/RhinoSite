function SearchCtrl($scope, SiteLang, SearchForm) {
	$scope.searchFor = "";

	$scope.search = function() {
		console.log($scope.searchFor);
	};

	$scope.getPlaceholder = function() {
		var lang = SiteLang.getLanguage();
		return SearchForm.placeholder.name[ lang.key ];
	};

	$scope.getButtonName = function() {
		var lang = SiteLang.getLanguage();
		return SearchForm.buttons.search.name[ lang.key ];
	};
}