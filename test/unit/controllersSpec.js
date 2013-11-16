'use strict';

/* jasmine specs for controllers go here */
describe('NavCtrl', function(){
	var $scope;

	beforeEach(module('RhinoIn'));

	beforeEach(inject(function($rootScope, $controller, $location, SiteMap, SiteLang, SiteLangList) {
		$scope = $rootScope.$new();
		$controller('NavCtrl',
		{
			$scope: $scope,
			$location: $location,
			SiteMap: SiteMap,
			SiteLang: SiteLang,
			SiteLangList: SiteLangList
		});
	}));

	it('should have options', inject(function(SiteMap, SiteLang, SiteLangList) {
		var currentLang = SiteLang.getLanguage();
		expect($scope.activeItem).toBe('home');
		expect($scope.langList).toEqual(SiteLangList);
		expect($scope.currentLang).toEqual(currentLang);
		expect($scope.siteMap).toEqual(SiteMap);

		expect($scope.nav).not.toBeUndefined();
		expect($scope.lang).not.toBeUndefined();
	}));

	it('should change Navigation', inject(function(SiteMap) {
		expect($scope.activeItem).toBe('home');
		
		$scope.nav("contact");
		expect($scope.activeItem).toBe('contact');

		$scope.nav("hehehe");
		expect($scope.activeItem).toBe('home');
	}));

	it('should change SiteLang', inject(function(SiteLang) {
		var currentLang = SiteLang.getLanguage();
		expect($scope.currentLang).toEqual(currentLang);

		$scope.lang({key: 'zz', name: 'ZZ'});
		currentLang = SiteLang.getLanguage();
		expect(currentLang).toEqual({key: 'zz', name: 'ZZ'});
	}));
});