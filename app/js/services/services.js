'use strict';

/* Services */

RhinoIn.value('version', '0.1');

RhinoIn.value('SiteLangList', [
	{ key: 'ru', name: 'RU' },
	{ key: 'en', name: 'EN' }
]);

RhinoIn.factory('SiteLang', [function(){
	var language = {key: 'ru', name: 'RU'};

	return {
		getLanguage: function() {
			return language;
		},
		setLanguage: function(lang) {
			language = lang;
			return lang;
		}
	};
}]);

RhinoIn.value('SiteMap', {
	'default': {
		location: '/home'
	},
	'home':
		{
			location: '/home',
			name: {
				'ru': '\u0413\u043b\u0430\u0432\u043d\u0430\u044f',
				'en': 'Home'
			}
		},

	'about':
		{
			location: '/about',
			name: {
				'ru': '\u041e\u0020\u043d\u0430\u0441',
				'en': 'About'
			}
		},

	'services':
		{
			location: '/services',
			name: {
				'ru': '\u0421\u0435\u0440\u0432\u0438\u0441\u044b',
				'en': 'Services'
			}
		},

	'products':
		{
			location: '/products',
			name: {
				'ru': '\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b',
				'en': 'Products'
			}
		},

	'contact':
		{
			location: '/contact',
			name: {
				'ru': '\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b',
				'en': 'Contact'
			}
		}
});

RhinoIn.value('SearchForm', {
	'buttons': {
		search: {
			name: {
				'ru': '\u041f\u043e\u0438\u0441\u043a',
				'en': 'Search'
			}
		}
	},
	'placeholder': {
		name: {
			'ru': "\u041f\u043e\u0438\u0441\u043a\u0020\u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u043e\u0432...",
			'en': "Search algorithms..."
		}
	},

});