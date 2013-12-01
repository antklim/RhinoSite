function SignInCtrl($scope, SiteText) {
	$scope.email = "";
	$scope.password = "";

	var getEmailPH = function() {
		return SiteText.getContent("signin.placeholder.email");
	};

	var getPasswordPH = function() {
		return SiteText.getContent("signin.placeholder.password");
	};

	var getSignInName = function() {
		return SiteText.getContent("signin.button.signin");
	};

	var getSignInLabel = function() {
		return SiteText.getContent("signin.label.signin");
	};

	var getRememberMe = function() {
		return SiteText.getContent("signin.label.remember");
	};

	var getForgot = function() {
		return SiteText.getContent("signin.label.forgot");
	};

	$scope.init = function() {
		$scope.emailPH = getEmailPH();
		$scope.passwordPH = getPasswordPH();
		$scope.signInName = getSignInName();
		$scope.signInLabel = getSignInLabel();
		$scope.rememberMe = getRememberMe();
		$scope.forgot = getForgot();
	};

	$scope.init();

	$scope.$on("LANG_CHANGED", function(event, data) {
		$scope.init();
	});

	$scope.signin = function() {};
}