function NewsCtrl($scope, $sce, SiteText) {
	$scope.activeItem = 'qqq';
	$scope.anchorPrefix = "news-";

	$scope.anchor = function(item) {
		$scope.activeItem = item;
	};
/*
	var getContact = function() {
		return SiteText.getContent("contact.label.contact");
	};

	var getAboutRhino = function() {
		return SiteText.getContent("about.label.about_rhino");
	};

	var getAboutRhinoText = function() {
		var head = SiteText.getContent("about.text.about_rhino.head"),
			body = SiteText.getContent("about.text.about_rhino.body");

		return $sce.trustAsHtml(head + body);
	};

	var getOurTeam = function() {
		return SiteText.getContent("about.label.our_team");
	};

	var getOurTeamText = function() {
		var head = SiteText.getContent("about.text.our_team.head"),
			body = SiteText.getContent("about.text.our_team.body");

		return $sce.trustAsHtml(head + body);
	};
*/
	$scope.init = function() {
		/*
		$scope.contact = getContact();
		$scope.aboutRhino = getAboutRhino();
		$scope.aboutRhinoText = getAboutRhinoText();
		$scope.ourTeam = getOurTeam();
		$scope.ourTeamText = getOurTeamText();
		*/
	};

	$scope.init();

	$scope.$on("LANG_CHANGED", function(event, data) {
		$scope.init();
	});
}