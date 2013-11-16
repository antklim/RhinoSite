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
			templateUrl: './partials/home.html'
		});

		$routeProvider.when('/about', {
			templateUrl: './partials/about.html'
		});

		$routeProvider.when('/services', {
			templateUrl: './partials/services.html'
		});

		$routeProvider.when('/products', {
			templateUrl: './partials/products.html'
		});

		$routeProvider.when('/contact', {
			templateUrl: './partials/contact.html'
		});

		$routeProvider.otherwise({redirectTo: '/'});
}]);

RhinoIn.run(['$rootScope', '$location', function($rootScope, $location){

}]);