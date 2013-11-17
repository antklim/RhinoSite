function SignInCtrl($scope, SiteLang, SignInForm) {
	$scope.email = "";
	$scope.password = "";

	$scope.getDivider = function() {
		var lang = SiteLang.getLanguage();
		return SignInForm.labels.divider[ lang.key ];
	};

	$scope.getEmailPH = function() {
		var lang = SiteLang.getLanguage();
		return SignInForm.placeholders.email[ lang.key ];
	};

	$scope.getPasswordPH = function() {
		var lang = SiteLang.getLanguage();
		return SignInForm.placeholders.password[ lang.key ];
	};

	$scope.getSignInName = function() {
		var lang = SiteLang.getLanguage();
		return SignInForm.buttons.signin[ lang.key ];
	};

	$scope.getRegisterName = function() {
		var lang = SiteLang.getLanguage();
		return SignInForm.buttons.register[ lang.key ];
	};

	$scope.getSignInLabel = function() {
		var lang = SiteLang.getLanguage();
		return SignInForm.labels.signin[ lang.key ];
	};

	$scope.getRememberMe = function() {
		var lang = SiteLang.getLanguage();
		return SignInForm.labels.remember[ lang.key ];
	};

	$scope.getRegisterLabel = function() {
		var lang = SiteLang.getLanguage();
		return SignInForm.labels.register[ lang.key ];
	};

	$scope.signin = function() {
		console.log($scope.email, $scope.password);
	};
}