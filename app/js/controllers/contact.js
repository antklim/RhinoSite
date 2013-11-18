function ContactCtrl($scope, $sce, SiteLang, ContactForm) {
	$scope.getCompanyName = function() {
		var lang = SiteLang.getLanguage();
		return $sce.trustAsHtml(ContactForm.labels.companyName[ lang.key ]);
	};

	$scope.getCompanyContactName = function() {
		var lang = SiteLang.getLanguage();
		return $sce.trustAsHtml(ContactForm.labels.companyContactName[ lang.key ]);
	};

	$scope.getCompanyAddress = function() {
		var lang = SiteLang.getLanguage();
		var a = ContactForm.labels.companyAddress[ lang.key ];
		var res = "";
		var tpl = "__ADDRESS__<br>";

		if (_.isString(a)) {
			res = a;
		} else if (_.isArray(a)) {
			_.each(a, function(value) {
				res += tpl.replace(/__ADDRESS__/g, value);
			});
		} else if (_.isObject(a)) {
			_.each(a, function(value, key) {
				res += tpl.replace(/__ADDRESS__/g, value);
			});
		}

		return $sce.trustAsHtml(res);
	};

	$scope.getCompanyPhone = function() {
		var lang = SiteLang.getLanguage();
		var a = ContactForm.labels.companyPhone[ lang.key ];
		var res = "";
		var tpl = "<abbr title='__TITLE__'>__TYPE__:</abbr>__PHONE__<br>";

		if (_.isString(a)) {
			res = a;
		} else if (_.isArray(a)) {
			_.each(a, function(value) {
				res += tpl.replace(/__TITLE__/g, value.title).
					replace(/__TYPE__/g, value.type).
					replace(/__PHONE__/g, value.phone);
			});
		} else if (_.isObject(a)) {
			_.each(a, function(value, key) {
				res += tpl.replace(/__TITLE__/g, value.title).
					replace(/__TYPE__/g, value.type).
					replace(/__PHONE__/g, value.phone);
			});
		}

		return $sce.trustAsHtml(res);
	};

	$scope.getCompanyEmail = function() {
		var lang = SiteLang.getLanguage();
		var a = ContactForm.labels.companyEmail[ lang.key ];
		var res = "";
		var tpl = "<a href='mailto:#'>__EMAIL__</a><br>";

		if (_.isString(a)) {
			res = a;
		} else if (_.isArray(a)) {
			_.each(a, function(value) {
				res += tpl.replace(/__EMAIL__/g, value);
			});
		} else if (_.isObject(a)) {
			_.each(a, function(value, key) {
				res += tpl.replace(/__EMAIL__/g, value);
			});
		}

		return $sce.trustAsHtml(res);
	};
}