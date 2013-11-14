function NavCtrl($scope, $location, SiteMap, SiteLang, SiteLangList) {
	$scope.activeItem = 'home';
	$scope.nav = function(item) {
		if (_.has(SiteMap, item)) {			
			$location.path(SiteMap[ item ].location);
			$scope.activeItem = item;
		} else {
			$location.path(SiteMap[ 'default' ].location);
		}
	};
}