function SignInCtrl($scope, SiteText) {
	$scope.email = "";
	$scope.password = "";

	$scope.getDivider = function() {
		return SiteText.getContent("signin.label.divider");
	};

	$scope.getEmailPH = function() {
		return SiteText.getContent("signin.placeholder.email");
	};

	$scope.getPasswordPH = function() {
		return SiteText.getContent("signin.placeholder.password");
	};

	$scope.getSignInName = function() {
		return SiteText.getContent("signin.button.signin");
	};

	$scope.getRegisterName = function() {
		return SiteText.getContent("signin.button.register");
	};

	$scope.getSignInLabel = function() {
		return SiteText.getContent("signin.label.signin");
	};

	$scope.getRememberMe = function() {
		return SiteText.getContent("signin.label.remember");
	};

	$scope.getRegisterLabel = function() {
		return SiteText.getContent("signin.label.register");
	};

	$scope.signin = function() {
		console.log($scope.email, $scope.password);

	};
}