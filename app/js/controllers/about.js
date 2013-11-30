function AboutCtrl($scope, $sce, SiteText) {
	$scope.activeItem = 'rhino';
	$scope.anchorPrefix = "about-";

	$scope.anchor = function(item) {
		$scope.activeItem = item;
	};

	$scope.getAboutRhino = function() {
		return SiteText.getContent("about.label.about_rhino");
	};

	$scope.getAboutRhinoText = function() {
		var head = SiteText.getContent("about.text.about_rhino.head"),
			body = SiteText.getContent("about.text.about_rhino.body");

		return $sce.trustAsHtml(head + body);
	};

	$scope.getOurTeam = function() {
		return SiteText.getContent("about.label.our_team");
	};

	$scope.getOurTeamText = function() {
		var head = SiteText.getContent("about.text.our_team.head"),
			body = SiteText.getContent("about.text.our_team.body");

		return $sce.trustAsHtml(head + body);
	};

	$scope.getContact = function() {
		return SiteText.getContent("contact.label.contact");
	};

	$scope.getPostal = function() {
		return SiteText.getContent("contact.label.postal");
	};

	$scope.getPhones = function() {
		return SiteText.getContent("contact.label.phones");
	};

	$scope.getCompanyAddress = function() {
		var a = SiteText.getContent("contact.label.company_address");
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

	$scope.getCompanyPhones = function() {
		var a = SiteText.getContent("contact.label.company_phones");
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

	$scope.getCompanyEmails = function() {
		var a = SiteText.getContent("contact.label.company_emails");
		var res = "";
		var tpl = "<address><strong>__TITLE__</strong><br><a href='mailto:__EMAIL__'>__EMAIL__</a><br></address>";

		if (_.isString(a)) {
			res = a;
		} else if (_.isArray(a)) {
			_.each(a, function(value) {
				res += tpl.replace(/__TITLE__/g, value.title).replace(/__EMAIL__/g, value.email);
			});
		} else if (_.isObject(a)) {
			_.each(a, function(value, key) {
				res += tpl.replace(/__TITLE__/g, value.title).replace(/__EMAIL__/g, value.email);
			});
		}

		return $sce.trustAsHtml(res);
	};

	$scope.getEnterEmail = function() {
		var label = SiteText.getContent("contact.label.enter_email"),
			phldr = SiteText.getContent("contact.placeholder.enter_email");
		var res = "";
		var tpl = "<div class='form-group'><label for='email'>__LABEL__</label><input type='email' class='form-control' id='email' placeholder='__PHLDR__'></div>";

		res += tpl.replace(/__LABEL__/g, label).replace(/__PHLDR__/g, phldr);

		return $sce.trustAsHtml(res);
	};

	$scope.getEnterSubject = function() {
		var label = SiteText.getContent("contact.label.enter_subject"),
			phldr = SiteText.getContent("contact.placeholder.enter_subject");
		var res = "";
		var tpl = "<div class='form-group'><label for='subject'>__LABEL__</label><input type='text' class='form-control' id='subject' placeholder='__PHLDR__'></div>";

		res += tpl.replace(/__LABEL__/g, label).replace(/__PHLDR__/g, phldr);

		return $sce.trustAsHtml(res);
	};

	$scope.getMessage = function() {
		var label = SiteText.getContent("contact.label.message");
		var res = "";
		var tpl = "<div class='form-group'><label for='message'>__LABEL__</label><textarea class='form-control' rows='4'></textarea></div>";

		res += tpl.replace(/__LABEL__/g, label);

		return $sce.trustAsHtml(res);
	};

	$scope.getSendEmail = function() {
		return SiteText.getContent("contact.button.send_email");
	};
}