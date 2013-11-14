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
			//template: '<h1>home</h1>'
			templateUrl: './partials/home.html'
		});

		$routeProvider.when('/about', {
			template: '<h1>about</h1>'
		});

		$routeProvider.when('/services', {
			template: '<h1>services</h1>'
		});

		$routeProvider.when('/products', {
			template: '<h1>products</h1>'
		});

		$routeProvider.when('/contact', {
			template: '<h1>contact</h1>'
		});

		$routeProvider.otherwise({redirectTo: '/'});
}]);

RhinoIn.run(['$rootScope', '$location', function($rootScope, $location){

}]);