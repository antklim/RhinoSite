function HomeCtrl($scope, SiteLang) {
	$scope.currentLang = angular.copy(SiteLang);

	$scope.$watch(SiteLang, function(value) {
		$scope.currentLang = angular.copy(SiteLang);
	});
}