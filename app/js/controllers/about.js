function AboutCtrl($scope, $sce, $location, $anchorScroll, SiteText) {
	$scope.activeItem = 'rhino';
	$scope.anchorPrefix = "about-";

	$scope.anchor = function(item) {
		$scope.activeItem = item;
		//$location.hash($scope.anchorPrefix + hash);
		//$anchorScroll();
	};

	$scope.getAboutRhino = function() {
		return SiteText.getContent("about.label.about_rhino");
	};

	$scope.getAboutRhinoText = function() {
		var head = SiteText.getContent("about.text.about_rhino_head"),
			body = SiteText.getContent("about.text.about_rhino_body");
		var res = "";
		var tpl = "<p class='lead'>__HEAD__</p><p>__BODY__</p>";

		res += tpl.replace(/__HEAD__/g, head).replace(/__BODY__/g, body);

		return $sce.trustAsHtml(res);
	};

	$scope.getOurTeam = function() {
		return SiteText.getContent("about.label.our_team");
	};

	$scope.getOurTeamText = function() {
		var head = SiteText.getContent("about.text.our_team_head"),
			body = SiteText.getContent("about.text.our_team_body");
		var res = "";
		var tpl = "<p class='lead'>__HEAD__</p><p>__BODY__</p>";

		res += tpl.replace(/__HEAD__/g, head).replace(/__BODY__/g, body);

		return $sce.trustAsHtml(res);
	};

	$scope.getContact = function() {
		return SiteText.getContent("about.label.contact");
	};

	$scope.getPostal = function() {
		return SiteText.getContent("about.label.postal");
	};

	$scope.getPhones = function() {
		return SiteText.getContent("about.label.phones");
	};

	$scope.getCompanyAddress = function() {
		var a = SiteText.getContent("about.label.company_address");
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
		var a = SiteText.getContent("about.label.company_phones");
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
		var a = SiteText.getContent("about.label.company_emails");
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
		var label = SiteText.getContent("about.label.enter_email"),
			phldr = SiteText.getContent("about.placeholder.enter_email");
		var res = "";
		var tpl = "<div class='form-group'><label for='email'>__LABEL__</label><input type='email' class='form-control' id='email' placeholder='__PHLDR__'></div>";

		res += tpl.replace(/__LABEL__/g, label).replace(/__PHLDR__/g, phldr);

		return $sce.trustAsHtml(res);
	};

	$scope.getEnterSubject = function() {
		var label = SiteText.getContent("about.label.enter_subject"),
			phldr = SiteText.getContent("about.placeholder.enter_subject");
		var res = "";
		var tpl = "<div class='form-group'><label for='subject'>__LABEL__</label><input type='text' class='form-control' id='subject' placeholder='__PHLDR__'></div>";

		res += tpl.replace(/__LABEL__/g, label).replace(/__PHLDR__/g, phldr);

		return $sce.trustAsHtml(res);
	};

	$scope.getMessage = function() {
		var label = SiteText.getContent("about.label.message");
		var res = "";
		var tpl = "<div class='form-group'><label for='message'>__LABEL__</label><textarea class='form-control' rows='4'></textarea></div>";

		res += tpl.replace(/__LABEL__/g, label);

		return $sce.trustAsHtml(res);
	};

	$scope.getSendEmail = function() {
		return SiteText.getContent("about.button.send_email");
	};
}