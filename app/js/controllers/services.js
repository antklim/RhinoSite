function ServicesCtrl($scope, SiteLang) {
	$scope.getLanguage = function() {
		var lang = SiteLang.getLanguage();
		return lang.key;
	};
}