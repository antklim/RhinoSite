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
		},
	'signin':
		{
			location: '/signin',
			name: {
				'ru': '\u0412\u0445\u043e\u0434',
				'en': 'Sign In'
			}
		},
});

RhinoIn.value('SearchForm', {
	'buttons': {
		search: {
			'ru': '\u041f\u043e\u0438\u0441\u043a',
			'en': 'Search'
		}
	},
	'placeholders': {
		search: {
			'ru': "\u041f\u043e\u0438\u0441\u043a\u0020\u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u043e\u0432...",
			'en': "Search algorithms..."
		}
	},

});

RhinoIn.value('SignInForm', {

	'buttons': {
		signin: {
			'ru': '\u0412\u043e\u0439\u0442\u0438',
			'en': 'Sign In'
		},
		register: {
			'ru': 'Zaregistririvatsa',
			'en': 'Register'
		}
	},
	'placeholders': {
		email: {
			'ru': "Email\u0020\u0430\u0434\u0440\u0435\u0441",
			'en': "Email address"
		},
		password: {
			'ru': "\u041f\u0430\u0440\u043e\u043b\u044c",
			'en': "Password"
		}
	},

	'labels': {
		divider: {
			'ru': "\u0418\u041b\u0418",
			'en': "OR"
		},
		signin: {
			'ru': "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430\u002c\u0020\u0432\u043e\u0439\u0434\u0438\u0442\u0435",
			'en': "Please sign in"
		},
		remember: {
			'ru': "\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c\u0020\u043c\u0435\u043d\u044f",
			'en': "Remember me"
		},
		register: {
			'ru': "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c",
			'en': "Please register"
		}
	}

});
