function AboutCtrl($scope, $sce, SiteText) {
	$scope.activeItem = 'rhino';
	$scope.anchorPrefix = "about-";

	$scope.anchor = function(item) {
		$scope.activeItem = item;
	};

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

	var getOurServices = function() {
		return SiteText.getContent("about.label.our_services");
	};

	var getOurServicesText = function() {
		var head = SiteText.getContent("about.text.services.head"),
			body = SiteText.getContent("about.text.services.body");

		return $sce.trustAsHtml(head + body);
	};

	var getOurPluginsText = function() {
		var head = SiteText.getContent("about.text.plugins.head"),
			body = SiteText.getContent("about.text.plugins.body");

		return $sce.trustAsHtml(head + body);
	};

	var getOurPlugins = function() {
		return SiteText.getContent("about.label.our_plugins");
	};

	$scope.init = function() {
		$scope.contact = getContact();
		$scope.aboutRhino = getAboutRhino();
		$scope.aboutRhinoText = getAboutRhinoText();
		$scope.ourTeam = getOurTeam();
		$scope.ourTeamText = getOurTeamText();
		$scope.ourServices = getOurServices();
		$scope.ourServicesText = getOurServicesText();
		$scope.ourPlugins = getOurPlugins();
		$scope.ourPluginsText = getOurPluginsText();
	};

	$scope.init();

	$scope.$on("LANG_CHANGED", function(event, data) {
		$scope.init();
	});
}