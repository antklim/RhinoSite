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

/*
 * Returns any text for language and element
 * element name: page.type.name
 *	- page - page name of the element
 *	- type - type of the element (buttons, labels, ...)
 *	- name - element's name
 */
RhinoIn.factory('SiteText', ['SiteLang', 'SearchForm', 'SignInForm', function(SiteLang, SearchForm, SignInForm) {	
	var forms = {'search': SearchForm, 'signin': SignInForm};
	var types = ['button', 'label', 'placeholder'];

	return {
		getContent: function(element) {
			if (!_.isString(element)) {
				return null;
			}

			var arr = element.toLowerCase().split(".");
			if (_.isUndefined(arr[0]) || _.isUndefined(arr[1]) || _.isUndefined(arr[2])) {
				return null;
			}

			if (!_.has(forms, arr[0]) || _.indexOf(types, arr[1]) === -1) {
				return null;
			} else {
				if (!_.has(forms[ arr[0] ][ arr[1] ], arr[2]) ) {
					return null;
				} else {
					var lang = SiteLang.getLanguage();					
					var content = forms[ arr[0] ][ arr[1] ][ arr[2] ][ lang.key ];

					return (!_.isUndefined(content)) ? content :null;
				}
			}
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
	'button': {
		search: {
			'ru': '\u041f\u043e\u0438\u0441\u043a',
			'en': 'Search'
		}
	},
	'placeholder': {
		search: {
			'ru': "\u041f\u043e\u0438\u0441\u043a\u0020\u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u043e\u0432...",
			'en': "Search algorithms..."
		}
	},

});

RhinoIn.value('SignInForm', {

	'button': {
		signin: {
			'ru': '\u0412\u043e\u0439\u0442\u0438',
			'en': 'Sign In'
		},
		register: {
			'ru': 'Zaregistririvatsa',
			'en': 'Register'
		}
	},
	'placeholder': {
		email: {
			'ru': "Email\u0020\u0430\u0434\u0440\u0435\u0441",
			'en': "Email address"
		},
		password: {
			'ru': "\u041f\u0430\u0440\u043e\u043b\u044c",
			'en': "Password"
		}
	},

	'label': {
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

RhinoIn.value('ContactForm', {

	'labels': {
		companyName: {
			'ru': "Rhino-in-Russia",
			'en': "Rhino-in-Russia"
		},
		companyContactName: {
			'ru': "\u041a\u043e\u043c\u0430\u043d\u0434\u0430\u0020RhinoIn",
			'en': "RhinoIn Team"
		},
		companyAddress: {
			'ru': ["\u0443\u043b\u002e\u0020\u0032\u002d\u044f\u0020\u041b\u0443\u0433\u043e\u0432\u0430\u044f\u002c\u0020\u0032\u0038",
					"\u0420\u043e\u0441\u0442\u043e\u0432\u002d\u043d\u0430\u002d\u0414\u043e\u043d\u0443", "\u0420\u043e\u0441\u0441\u0438\u044f"],
			'en': ["28, 2nd Lugovaya Street", "Rostov on Don", "Russia"]
		},
		companyPhone: {
			'ru': [{type: "M", phone: "+7(960)450-04-05", title: "Mobile"}],
			'en': [{type: "M", phone: "+7(960)450-0405", title: "Mobile"}]
		},
		companyEmail: {
			'ru': ["info@rhino-in.com"],
			'en': ["info@rhino-in.com"]
		}
	}

});
