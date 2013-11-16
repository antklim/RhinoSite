requirejs.config({
	baseUrl: 'js',
	paths: {
		lib: '../lib',
		hammer: '../lib/hammer/hammer.min',
		underscore: '../lib/underscore/underscore-min',
		angular: '../lib/angular/angular.min',
		angularRoute: '../lib/angular/angular-route',
		angularHammer: '../lib/angular/angular-hammer',
		uiBootstrap: '../lib/bootstrap/ui-bootstrap-tpls-0.6.0.min',
		rhinoin: 'modules/rhinoin'
	},

	shim: {
		'underscore': {
			exports: '_'
		},
		'angularHammer': {
			deps: ['angular', 'hammer']
		},
		'angularRoute': {
			deps: ['angular']
		},
		'uiBootstrap': {
			deps: ['angular']
		},
		'rhinoin': {
			deps: ['angularRoute', 'angularHammer', 'underscore', 'uiBootstrap']
		},
		'services/services': {
			deps: ['rhinoin']
		},
		'controllers/nav': {
			deps: ['services/services']
		},
		'controllers/search': {
			deps: ['services/services']
		},
		'bootstrap': {
			deps: ['rhinoin', 'controllers/nav', 'controllers/search']
		}
	}
});

requirejs([
	'bootstrap'
]);
