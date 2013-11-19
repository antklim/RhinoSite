function NavCtrl($scope, $location, SiteMap, SiteLang, SiteLangList) {
	$scope.activeItem = 'home';
	$scope.langList = angular.copy( SiteLangList );
	$scope.currentLang = angular.copy( SiteLang.getLanguage() );
	$scope.siteMap = angular.copy( SiteMap );

	$scope.nav = function(item) {
		if (_.has(SiteMap, item)) {
			if (_.isUndefined(SiteMap[ item ].hash)) {
				$location.hash("");
			} else {
				$location.hash(SiteMap[ item ].hash);
			}
			
			$location.path(SiteMap[ item ].location);
			$scope.activeItem = item;
		} else {
			$location.hash("");
			$location.path(SiteMap[ 'default' ].location);
			$scope.activeItem = 'home';
		}
	};

	$scope.lang = function(lng) {
		$scope.currentLang = lng;
		SiteLang.setLanguage(lng);
	};
}