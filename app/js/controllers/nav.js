function NavCtrl($scope, $location, SiteMap, SiteLang, SiteLangList, $timeout) {
	$scope.activeItem = 'home';
	$scope.currentLang = angular.copy( SiteLang );
	$scope.langList = angular.copy( SiteLangList );

	$scope.nav = function(item) {
		if (_.has(SiteMap, item)) {
			$location.path(SiteMap[ item ].location);
			$scope.activeItem = item;
		} else {
			$location.path(SiteMap[ 'default' ].location);
		}
	};

	$scope.lang = function(lng) {
		$scope.currentLang = lng;
		SiteLang = lng;
	};


}