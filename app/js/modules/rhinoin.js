'use strict';


// Declare app level module which depends on filters, and services
var RhinoIn = angular.module('RhinoIn', ['ngRoute','hmTouchEvents','ui.bootstrap']);

RhinoIn.config(['$routeProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$locationProvider' ,
	function( $routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $locationProvider ) {

		//$locationProvider.html5Mode(true);

		RhinoIn.controllerProvider = $controllerProvider;
		RhinoIn.compileProvider = $compileProvider;
		RhinoIn.routeProvider = $routeProvider;
		RhinoIn.filterProvider = $filterProvider;
		RhinoIn.provide = $provide;

		$routeProvider.when('/', {redirectTo: '/home'});

		$routeProvider.when('/home', {
			templateUrl: './partials/home.html',
			controller: 'HomeCtrl',
			resolve: {
			
				load: ['$q', '$rootScope', function($q, $rootScope) {

					var deferred = $q.defer();
					var deps = [
						'services/services',
						'controllers/home'
					];

					require(deps, function() {
						$rootScope.$apply(function() {
							deferred.resolve();
						});
					});

					return deferred.promise;
				}]
			}
		});

		$routeProvider.when('/about', {
			templateUrl: './partials/about.html',
			controller: 'AboutCtrl',
			resolve: {
			
				load: ['$q', '$rootScope', function($q, $rootScope) {

					var deferred = $q.defer();
					var deps = [
						'services/services',
						'controllers/about'
					];

					require(deps, function() {
						$rootScope.$apply(function() {
							deferred.resolve();
						});
					});

					return deferred.promise;
				}]
			}
		});

		$routeProvider.when('/news', {
			templateUrl: './partials/news.html',
			controller: 'NewsCtrl',
			resolve: {
			
				load: ['$q', '$rootScope', function($q, $rootScope) {

					var deferred = $q.defer();
					var deps = [
						'services/services',
						'controllers/news'
					];

					require(deps, function() {
						$rootScope.$apply(function() {
							deferred.resolve();
						});
					});

					return deferred.promise;
				}]
			}
		});

		$routeProvider.when('/services', {
			templateUrl: './partials/services.html',
			controller: 'ServicesCtrl',
			resolve: {
			
				load: ['$q', '$rootScope', function($q, $rootScope) {

					var deferred = $q.defer();
					var deps = [
						'services/services',
						'controllers/services'
					];

					require(deps, function() {
						$rootScope.$apply(function() {
							deferred.resolve();
						});
					});

					return deferred.promise;
				}]
			}
		});

		$routeProvider.when('/products', {
			templateUrl: './partials/products.html',
			controller: 'ProductsCtrl',
			resolve: {
			
				load: ['$q', '$rootScope', function($q, $rootScope) {

					var deferred = $q.defer();
					var deps = [
						'services/services',
						'controllers/products'
					];

					require(deps, function() {
						$rootScope.$apply(function() {
							deferred.resolve();
						});
					});

					return deferred.promise;
				}]
			}
		});

		$routeProvider.when('/contact', {
			templateUrl: './partials/contact.html',
			controller: 'ContactCtrl',
			resolve: {
			
				load: ['$q', '$rootScope', function($q, $rootScope) {

					var deferred = $q.defer();
					var deps = [
						'services/services',
						'controllers/contact'
					];

					require(deps, function() {
						$rootScope.$apply(function() {
							deferred.resolve();
						});
					});

					return deferred.promise;
				}]
			}
		});

		$routeProvider.when('/signin', {
			templateUrl: './partials/signin.html',
			controller: 'SignInCtrl',
			resolve: {
			
				load: ['$q', '$rootScope', function($q, $rootScope) {

					var deferred = $q.defer();
					var deps = [
						'services/services',
						'controllers/signin'
					];

					require(deps, function() {
						$rootScope.$apply(function() {
							deferred.resolve();
						});
					});

					return deferred.promise;
				}]
			}
		});

		$routeProvider.when('/signup', {
			templateUrl: './partials/signup.html',
			controller: 'SignUpCtrl',
			resolve: {
			
				load: ['$q', '$rootScope', function($q, $rootScope) {

					var deferred = $q.defer();
					var deps = [
						'services/services',
						'controllers/signup'
					];

					require(deps, function() {
						$rootScope.$apply(function() {
							deferred.resolve();
						});
					});

					return deferred.promise;
				}]
			}
		});

		$routeProvider.otherwise({redirectTo: '/'});
}]);

RhinoIn.run(['$rootScope', '$location', function($rootScope, $location){

}]);