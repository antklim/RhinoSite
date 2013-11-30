function SignInCtrl($scope, SiteText) {
	$scope.email = "";
	$scope.password = "";

	var getDivider = function() {
		return SiteText.getContent("signin.label.divider");
	};

	var getEmailPH = function() {
		return SiteText.getContent("signin.placeholder.email");
	};

	var getPasswordPH = function() {
		return SiteText.getContent("signin.placeholder.password");
	};

	var getSignInName = function() {
		return SiteText.getContent("signin.button.signin");
	};

	var getRegisterName = function() {
		return SiteText.getContent("signin.button.register");
	};

	var getSignInLabel = function() {
		return SiteText.getContent("signin.label.signin");
	};

	var getRememberMe = function() {
		return SiteText.getContent("signin.label.remember");
	};

	var getRegisterLabel = function() {
		return SiteText.getContent("signin.label.register");
	};

	$scope.init = function() {
		$scope.divider = getDivider();
		$scope.emailPH = getEmailPH();
		$scope.passwordPH = getPasswordPH();
		$scope.signInName = getSignInName();
		$scope.registerName = getRegisterName();
		$scope.signInLabel = getSignInLabel();
		$scope.rememberMe = getRememberMe();
		$scope.registerLabel = getRegisterLabel();
	};

	$scope.init();

	$scope.$on("LANG_CHANGED", function(event, data) {
		$scope.init();
	});

	$scope.signin = function() {
		console.log($scope.email, $scope.password);
	};
}