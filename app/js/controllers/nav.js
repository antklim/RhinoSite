function NavCtrl($scope, $rootScope, $location, SiteMap, SiteLang, SiteLangList, SiteText) {
	$scope.activeItem = 'home';
	$scope.langList = angular.copy( SiteLangList );
	$scope.currentLang = angular.copy( SiteLang.getLanguage() );

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
		$scope.init();
	};

	var getHome = function() {
		return SiteText.getContent("nav.label.home");
	};

	var getAbout = function() {
		return SiteText.getContent("nav.label.about");
	};

	var getServices = function() {
		return SiteText.getContent("nav.label.services");
	};

	var getProducts = function() {
		return SiteText.getContent("nav.label.products");
	};

	var getContact = function() {
		return SiteText.getContent("nav.label.contact");
	};

	var getSignUp = function() {
		return SiteText.getContent("nav.label.signup");
	};

	var getSignIn = function() {
		return SiteText.getContent("nav.label.signin");
	};

	$scope.init = function() {
		$scope.home = getHome();
		$scope.about = getAbout();
		$scope.services = getServices();
		$scope.products = getProducts();
		$scope.contact = getContact();
		$scope.signUp = getSignUp();
		$scope.signIn = getSignIn();
	};

	$scope.init();
}