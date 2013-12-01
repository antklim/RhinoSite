function SignUpCtrl($scope, SiteText) {
	$scope.username = "";
	$scope.email = "";
	$scope.password = "";
	$scope.confpswd = "";

	var getUsernamePH = function() {
		return SiteText.getContent("signup.placeholder.username");
	};

	var getEmailPH = function() {
		return SiteText.getContent("signup.placeholder.email");
	};

	var getPasswordPH = function() {
		return SiteText.getContent("signup.placeholder.password");
	};

	var getConfpswdPH = function() {
		return SiteText.getContent("signup.placeholder.confpswd");
	};

	var getRegisterName = function() {
		return SiteText.getContent("signup.button.signup");
	};

	var getRegisterLabel = function() {
		return SiteText.getContent("signup.label.signup");
	};

	$scope.init = function() {
		$scope.usernamePH = getUsernamePH();
		$scope.emailPH = getEmailPH();
		$scope.passwordPH = getPasswordPH();
		$scope.confpswdPH = getConfpswdPH();
		$scope.registerName = getRegisterName();
		$scope.registerLabel = getRegisterLabel();
	};

	$scope.init();

	$scope.$on("LANG_CHANGED", function(event, data) {
		$scope.init();
	});

	$scope.register = function() {};
}