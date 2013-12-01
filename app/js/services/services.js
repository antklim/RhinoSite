'use strict';

/* Services */

RhinoIn.value('version', '0.1');

RhinoIn.value('SiteLangList', [
	{ key: 'ru', name: 'RU' },
	{ key: 'en', name: 'EN' }
]);

RhinoIn.factory('SiteLang', ['$rootScope', function($rootScope){
	var language = {key: 'ru', name: 'RU'};

	return {
		getLanguage: function() {
			return language;
		},
		setLanguage: function(lang) {
			language = lang;
			$rootScope.$broadcast("LANG_CHANGED", lang);
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
RhinoIn.factory('SiteText', ['SiteLang', 'SiteTmpl', 'SearchForm', 'SignInForm', 'SignUpForm', 
				'AboutForm', 'ProductsForm', 'ServicesForm', 'ContactForm', 'NavForm',
		function(SiteLang, SiteTmpl, SearchForm, SignInForm, SignUpForm,
				AboutForm, ProductsForm, ServicesForm, ContactForm, NavForm) {
	var forms = {'search': SearchForm, 'signin': SignInForm, 'signup': SignUpForm,
					'about': AboutForm, 'products': ProductsForm, 'services': ServicesForm, 'contact': ContactForm, 'nav': NavForm};
	var types = ['button', 'label', 'placeholder', 'text'];

	return {
		getContent: function(element) {
			if (!_.isString(element)) {
				return null;
			}

			var arr = element.toLowerCase().split(".");
			if (_.isUndefined(arr[0]) || _.isUndefined(arr[1]) || _.isUndefined(arr[2])) {
				return null;
			}

			// Need it to find templated content
			if (!_.isUndefined(arr[3])) {
				arr[2] += "_" + arr[3];
			}

			if (!_.has(forms, arr[0]) || _.indexOf(types, arr[1]) === -1) {
				return null;
			} else {
				if (!_.has(forms[ arr[0] ][ arr[1] ], arr[2]) ) {
					return null;
				} else {
					var lang = SiteLang.getLanguage();		
					var content = forms[ arr[0] ][ arr[1] ][ arr[2] ][ lang.key ];

					if (_.isUndefined(content)) {
						return null;
					} 

					if (_.has(SiteTmpl, arr[1]) && !_.isUndefined(arr[3]) && _.has(SiteTmpl[ arr[1] ], arr[3])) {
						var tmpl = SiteTmpl[ arr[1] ][ arr[3] ];

						if (_.isString(content)) {
							return tmpl.replace(/__TMPL__/g, content);
						} else if (_.isArray(content)) {
							var res = "";

							for (var i=0, len=content.length; i<len; i++) {
								res += tmpl.replace(/__TMPL__/g, content[i]);
							}
							return res;
						} else {
							return content;
						}
					} else {
						return content;
					}
				}
			}
		}
	};
}]);

RhinoIn.value('SiteTmpl', {
	'text': {
		'head': "<p class='lead'>__TMPL__</p>",
		'body': "<p>__TMPL__</p>"
	},
});

RhinoIn.value('SiteMap', {
	'default': {
		location: '/home'
	},
	'home':	{
		location: '/home',
	},
	'about': {
		location: '/about',
	},
	'services': {
		location: '/services',
	},
	'products': {
		location: '/products',
	},
	'contact': {
		location: '/contact',
	},
	'signup': {
		location: '/signup',
	},
	'signin': {
		location: '/signin',
	}
});

RhinoIn.value('NavForm', {
	'label': {
		home:	{
			'ru': '\u0413\u043b\u0430\u0432\u043d\u0430\u044f',
			'en': 'Home'
		},
		about: {
			'ru': '\u041e\u0020\u043d\u0430\u0441',
			'en': 'About'
		},
		services: {
			'ru': '\u0421\u0435\u0440\u0432\u0438\u0441\u044b',
			'en': 'Services'
		},
		products: {
			'ru': '\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b',
			'en': 'Products'
		},
		contact: {
			'ru': '\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b',
			'en': 'Contact'
		},
		signup: {
			'ru': '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F',
			'en': 'Sign Up'
		},		
		signin: {
			'ru': '\u0412\u0445\u043e\u0434',
			'en': 'Sign In'
		}
	}
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
	},
	'placeholder': {
		email: {
			'ru': "\u0418\u043C\u044F\u0020\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u0020\u0438\u043B\u0438\u0020Email\u0020\u0430\u0434\u0440\u0435\u0441",
			'en': "Username or Email address"
		},
		password: {
			'ru': "\u041f\u0430\u0440\u043e\u043b\u044c",
			'en': "Password"
		}
	},

	'label': {
		signin: {
			'ru': "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430\u002c\u0020\u0432\u043e\u0439\u0434\u0438\u0442\u0435",
			'en': "Please sign in"
		},
		remember: {
			'ru': "\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c\u0020\u043c\u0435\u043d\u044f",
			'en': "Remember me"
		},
		forgot: {
			'ru': "\u0417\u0430\u0431\u044B\u043B\u0438\u0020\u043F\u0430\u0440\u043E\u043B\u044C\u003F",
			'en': "Forgot password?"
		}
	}
});

RhinoIn.value('SignUpForm', {

	'button': {
		signup: {
			'ru': '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F',
			'en': 'Sign Up'
		}
	},
	'placeholder': {
		username: {
			'ru': "\u0418\u043C\u044F\u0020\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",
			'en': "Username"
		},
		email: {
			'ru': "Email\u0020\u0430\u0434\u0440\u0435\u0441",
			'en': "Email address"
		},
		password: {
			'ru': "\u041f\u0430\u0440\u043e\u043b\u044c",
			'en': "Password"
		},
		confpswd: {
			'ru': "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435\u0020\u043f\u0430\u0440\u043e\u043b\u044c",
			'en': "Confirm password"
		}
	},

	'label': {
		signup: {
			'ru': "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c",
			'en': "Please sign up"
		}
	}

});

RhinoIn.value('AboutForm', {
	'label': {
		about_rhino: {
			'ru': "\u041e\u0020Rhino",
			'en': "About Rhino"
		},
		our_team: {
			'ru': "\u041d\u0430\u0448\u0430\u0020\u043a\u043e\u043c\u0430\u043d\u0434\u0430",
			'en': "Our team"
		}
	},
	'text': {
		about_rhino_head: {
				'ru': "Rhino\u0020\u2014\u0020\u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439\u0020\u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0020\u0434\u043B\u044F\u0020\u0434\u0438\u0437\u0430\u0439\u043D\u0430\u002C\u0020\u043A\u043E\u0442\u043E\u0440\u044B\u0439\u0020\u0443\u043F\u0440\u043E\u0449\u0430\u0435\u0442\u0020\u0438\u0020\u0443\u0441\u043A\u043E\u0440\u044F\u0435\u0442\u0020\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0020\u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F\u002C\u0020\u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u0443\u044F\u0020\u0438\u0020\u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0438\u0440\u0443\u044F\u0020\u0435\u0433\u043E\u0020\u043D\u0430\u0020\u043A\u0430\u0436\u0434\u043E\u0439\u0020\u0441\u0442\u0430\u0434\u0438\u0438\u002E",
				'en': "Rhino\u0020\u2014\u0020is a professional instrument for design. It makes designing process simpler and faster by optimizing it at every step."
		},
		about_rhino_body: {
				'ru': "Rhino\u0020\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F\u0020\u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u044B\u043C\u0020\u0440\u0435\u0448\u0435\u043D\u0438\u0435\u043C\u002C\u0020\u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0438\u0432\u0448\u0438\u043C\u0020\u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435\u0020\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B\u0020\u0432\u0020\u043E\u0434\u0438\u043D\u002E\u0020\u0411\u043E\u0433\u0430\u0442\u044B\u0439\u0020\u043A\u043B\u0430\u0441\u0441 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432\u002C\u0020\u0440\u0430\u0441\u0448\u0438\u0440\u044F\u0435\u043C\u044B\u0439\u0020\u0441\u0020\u043F\u043E\u043C\u043E\u0449\u044C\u044E\u0020\u043E\u0431\u0448\u0438\u0440\u043D\u043E\u0433\u043E\u0020\u0447\u0438\u0441\u043B\u0430\u0020\u043F\u043B\u0430\u0433\u0438\u043D\u043E\u0432\u002C\u0020\u043E\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u0435\u0442\u0020\u0442\u0430\u043A\u0438\u0435\u0020\u0441\u0444\u0435\u0440\u044B\u002C\u0020\u043A\u0430\u043A\u0020\u0410\u0440\u0445\u0435\u043E\u043B\u043E\u0433\u0438\u044F\u002C\u0020\u0410\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430\u002C\u0020\u042E\u0432\u0435\u043B\u0438\u0440\u043D\u043E\u0435\u0020\u0434\u0435\u043B\u043E\u002C\u0020\u0422\u044F\u0436\u0435\u043B\u0430\u044F\u0020\u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u044F\u002C\u0020\u0421\u0443\u0434\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435\u002C\u0020\u041C\u0435\u0445\u0430\u043D\u0438\u043A\u0430\u002C\u0020\u0418\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u002C\u0020\u041B\u0430\u043D\u0434\u0448\u0430\u0444\u0442\u043D\u044B\u0439\u0020\u0434\u0438\u0437\u0430\u0439\u043D\u002C\u0020\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F\u002C\u0020\u0414\u0438\u0437\u0430\u0439\u043D\u0020\u0432\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u0020\u0438\u0020\u043C\u043D\u043E\u0433\u043E\u0435\u0020\u0434\u0440\u0443\u0433\u043E\u0435\u002E",
				'en': "Rhino is a comprehansive solution which joined different products in one. An extensive set of tools could be extended by the wide range of plug-ins. It covers Archeology, Architecture, Jewellery, Heavy Industry, Shipbuilding Industry, Mechanics, Interior, Landscaping, Animation, Computer game Design and many other spheres."
		},
		our_team_head: {
			'ru': "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u0020Rhino-in-Russia\u0020\u0431\u044B\u043B\u0430\u0020\u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0430\u0020\u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u043E\u0440\u043E\u043C\u0020\u0414\u043C\u0438\u0442\u0440\u0438\u0435\u043C\u0020\u0414\u0435\u043C\u0438\u043D\u044B\u043C\u002E\u0020\u0421\u0020\u0441\u0430\u043C\u043E\u0433\u043E\u0020\u043D\u0430\u0447\u0430\u043B\u0430\u0020\u043C\u044B\u0020\u0442\u0435\u0441\u043D\u043E\u0020\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0430\u043B\u0438\u0020\u0441\u0020\u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u043E\u0440\u0430\u043C\u0438\u002C\u0020\u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0430\u043C\u0438\u002C\u0020\u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430\u043C\u0438\u0020\u0438\u0020\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u0430\u043C\u0438\u002C\u0020\u0447\u0442\u043E\u0431\u044B\u0020\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438\u0020\u043F\u0435\u0440\u0432\u043E\u043A\u043B\u0430\u0441\u0441\u043D\u044B\u0435\u0020\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B\u002E",
			'en': "Rhino-in-Russia is a dedicated company founded by architect Dimitry Demin in 2011. Since our start we have been collaborating with architects, designers, mathematicians and software developers to provide first-class products."
		},
		our_team_body: {
			'ru': "\u041D\u0430\u0448\u0438\u0020\u0446\u0435\u043B\u0438\u0020\u002D\u0020\u0443\u043F\u0440\u043E\u0449\u0435\u043D\u0438\u0435\u0020\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430\u0020\u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u0438\u044F\u0020\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0439\u0020\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B\u0020Rhino\u002C\u0020\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430\u0020\u043F\u043B\u0430\u0433\u0438\u043D\u043E\u0432\u0020\u0438\u0020\u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u0020\u043F\u043E\u0020Rhino\u002E",
			'en': "Our goals are to make Rhino purchasing easier, developing plug-ins for Rhino and consulting."
		},
		our_team_members: {
			'ru': "",
			'en': ""
		}
	}
});

RhinoIn.value('ProductsForm', {
	'label': {
		products: {
			'ru': "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B",
			'en': "Products",
		},
		plugins: {
			'ru': "\u041d\u0430\u0448\u0438\u0020plug-ins",
			'en': "Our plug-ins",
		}
	},
	'text': {
		products_head: {
			'ru': "\u041D\u0430\u0448\u0430\u0020\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F\u0020\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F\u0020\u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u043C\u0020\u0440\u0435\u0441\u0435\u0439\u043B\u0435\u0440\u043E\u043C\u0020\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B\u0020\u0052\u0068\u0069\u006E\u006F\u0020\u0432\u0020\u0420\u043E\u0441\u0441\u0438\u0438\u002E",
			'en': "Our company is the official reseller specialising in Rhino products in Russian Federation.",
		},
		products_body: {
			'ru': ["\u041A\u0440\u043E\u043C\u0435\u0020\u0441\u0430\u043C\u043E\u0439\u0020\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B\u0020\u043C\u044B\u0020\u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C\u0020\u0442\u0430\u043A\u0436\u0435\u0020\u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435\u0020\u043F\u043B\u0430\u0433\u0438\u043D\u044B\u0020\u043A\u0020\u044D\u0442\u043E\u0439\u0020\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435\u002E",
					"\u0412\u044B\u0020\u043C\u043E\u0436\u0435\u0442\u0435\u0020\u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0441\u0442\u0438\u0020\u0052\u0068\u0069\u006E\u006F\u0020\u0438\u0020\u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C\u0020\u043F\u043B\u0430\u0433\u0438\u043D\u044B\u002C\u0020<a href='#contact' hm-tap='contact()'>\u0441\u0432\u044F\u0437\u0430\u0432\u0448\u0438\u0441\u044C</a>\u0020\u0441\u0020\u043D\u0430\u043C\u0438\u002E"],
			'en': ["Besides Rhino products we also offer you a wide variety of plug-ins for Rhino.",
					"You can buy Rhino or order plug-in just <a href='#contact' hm-tap='contact()'>contact us</a>."],
		},
		plugins_head: {
			'ru': "\u0414\u0430\u043B\u0435\u0435\u0020\u0432\u044B\u0020\u043C\u043E\u0436\u0435\u0442\u0435\u0020\u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C\u0020\u0438\u0020\u0441\u043A\u0430\u0447\u0430\u0442\u044C\u0020\u043D\u0430\u0448\u0438\u0020plug-ins\u002E",
			'en': "Further you can find and download our plug-ins.",
		},
		plugins_body: {
			'ru': "\u0417\u0434\u0435\u0441\u044C\u0020\u0431\u0443\u0434\u0435\u0442\u0020\u0441\u043F\u0438\u0441\u043E\u043A\u0020plug-ins",
			'en': "The list of plug-ins will be here",
		}
	}
});

RhinoIn.value('ServicesForm', {
	'label': {
		consulting: {
			'ru': "\u041a\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438",
			'en': "Consulting",
		},
		optimization: {
			'ru': "\u041E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u044F",
			'en': "Optimization",
		},
		search: {
			'ru': "\u041F\u043E\u0438\u0441\u043A",
			'en': "Search"
		}
	},
	'text': {
		consulting_head: {
			'ru': "\u041C\u044B\u0020\u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C\u0020\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438\u0020\u0444\u0438\u0440\u043C\u0020\u043D\u0430\u0020\u0435\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u0438\u0445\u0020\u0438\u0020\u0440\u0443\u0441\u0441\u043A\u0438\u0445\u0020\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u002D\u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445\u0020\u0440\u044B\u043D\u043A\u0430\u0445\u002E",
			'en': "We provide consultations for companies from Russian and European markets."
		},
		consulting_body: {
			'ru': "",
			'en': "",
		},
		optimization_head: {
			'ru': "\u041D\u0430\u0448\u0438\u0020\u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B\u0020\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0438\u0440\u0443\u044E\u0442\u0020\u043F\u043E\u0020\u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u0438\u0020\u0441\u0442\u0430\u0434\u0438\u0439\u0020\u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F\u002C\u0020\u0430\u0020\u0442\u0430\u043A\u0436\u0435\u0020\u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442\u0020\u0443\u0441\u043B\u0443\u0433\u0438\u0020\u043F\u043E\u0020\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E\u0020\u0028\u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u044E\u0020\u043F\u043B\u0430\u0433\u0438\u043D\u043E\u0432\u0029\u002E",
			'en': "Our specialists provide consultations on optimising of planning steps. Also we are happy to offer you plug-in development service.",
		},
		optimization_body: {
			'ru': "",
			'en': "",
		},
		search_head: {
			'ru': "\u041D\u0430\u0020\u0441\u0430\u0439\u0442\u0435\u0020\u0438\u043C\u0435\u0435\u0442\u0441\u044F\u0020\u0444\u0443\u043D\u043A\u0446\u0438\u044F\u0020\u043F\u043E\u0438\u0441\u043A\u0430\u002C\u0020\u043A\u043E\u0442\u043E\u0440\u044B\u0439\u0020\u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F\u0020\u043F\u043E\u0020\u0441\u0430\u0439\u0442\u0430\u043C\u002C\u0020\u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445\u0020\u0441\u0020\u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0020\u0434\u0438\u0437\u0430\u0439\u043D\u043E\u043C\u002E",
			'en': "We have a search service on the site which is seeking for the information on the sites refered to Parametric Design.",
		},
		search_body: {
			'ru': "",
			'en': "",
		}
	}
});

RhinoIn.value('ContactForm', {
	emails: {
		info_email: "info@rhino-in.com",
		support_email: "support@rhino-in.com"
	},
	phones: {
		mobile: "+7(960)450-04-05"
	},
	'button': {
		send_email: {
			'ru': "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C\u0020email",
			'en': "Send email"
		},
	},
	'placeholder': {
		enter_email: {
			'ru': "\u0412\u0432\u0435\u0434\u0438\u0442\u0435\u0020\u0432\u0430\u0448\u0020email",
			'en': "Enter your email"
		},
		enter_subject: {
			'ru': "\u0412\u0432\u0435\u0434\u0438\u0442\u0435\u0020\u0442\u0435\u043C\u0443\u0020\u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F\u0020",
			'en': "Enter subject"
		}
	},
	'label': {
		contact: {
			'ru': "\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",
			'en': "Contact"
		},
		postal: {
			'ru': "\u041f\u043e\u0447\u0442\u043e\u0432\u044b\u0439\u0020\u0430\u0434\u0440\u0435\u0441",
			'en': "Postal Address"
		},
		phones: {
			'ru': "\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u044b",
			'en': "Phones"
		},
		address1: {
			'ru': "\u0443\u043b\u002e\u0020\u0032\u002d\u044f\u0020\u041b\u0443\u0433\u043e\u0432\u0430\u044f\u002c\u0020\u0032\u0038",
			'en': "28, 2nd Lugovaya Street"
		},
		address2: {
			'ru': "\u0420\u043e\u0441\u0442\u043e\u0432\u002d\u043d\u0430\u002d\u0414\u043e\u043d\u0443",
			'en': "Rostov on Don"
		},
		address3: {
			'ru': "\u0420\u043e\u0441\u0441\u0438\u044f",
			'en': "Russia"
		},
		mobile: {
			'ru': "\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439",
			'en': "Mobile"
		},
		info_email: {
			'ru': "\u041e\u0431\u0449\u0430\u044f\u0020\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",
			'en': "General info"
		},
		support_email: {
			'ru': "\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435\u0020\u0432\u043e\u043f\u0440\u043e\u0441\u044b",
			'en': "Technical issues"
		},
		enter_email: {
			'ru': "Email\u0020\u0430\u0434\u0440\u0435\u0441",
			'en': "Email address"
		},
		enter_subject: {
			'ru': "\u0422\u0435\u043C\u0430\u0020\u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F",
			'en': "Subject"
		},
		message: {
			'ru': "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
			'en': "Message"
		},
	}
});