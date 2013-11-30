'use strict';

/* Directives */

RhinoIn.directive('appVersion', ['version', function(version) {
    return function(scope, elem, attrs) {
      elem.text(version);
    };
  }]);

RhinoIn.directive('a', function() {
	return {
		restrict: 'E',
		link: function(scope, elem, attrs) {
			if(attrs.ngClick || attrs.href === '' || attrs.href === '#'){
				elem.on('click', function(e){
					e.preventDefault();
				});
			}
		}
	};
});

// Contact form
RhinoIn.directive('contact', ['SiteText', 'ContactForm', function (SiteText, ContactForm) {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		scope: {},
		link: function(scope, elem, attrs) {
			scope.infoEmail = ContactForm.emails.info_email;
			scope.supportEmail = ContactForm.emails.support_email;
			scope.mobile = ContactForm.phones.mobile;

			scope.contact = SiteText.getContent("contact.label.contact");
			scope.sendEmail = SiteText.getContent("contact.button.send_email");
			scope.emailAddress = SiteText.getContent("contact.label.enter_email");
			scope.emailAddressPH = SiteText.getContent("contact.placeholder.enter_email");
			scope.subject = SiteText.getContent("contact.label.enter_subject");
			scope.subjectPH = SiteText.getContent("contact.placeholder.enter_subject");
			scope.message = SiteText.getContent("contact.label.message");
			scope.postAddress = SiteText.getContent("contact.label.postal");
			scope.phones = SiteText.getContent("contact.label.phones");
			scope.commonInfo = SiteText.getContent("contact.label.info_email");
			scope.techIssues = SiteText.getContent("contact.label.support_email");
			scope.address1 = SiteText.getContent("contact.label.address1");
			scope.address2 = SiteText.getContent("contact.label.address2");
			scope.address3 = SiteText.getContent("contact.label.address3");
			scope.mobileTitle = SiteText.getContent("contact.label.mobile");
		},
		controller: function($scope, $element, $attrs) {
			$scope.$on("LANG_CHANGED", function(event, data) {
				$scope.contact = SiteText.getContent("contact.label.contact");
				$scope.sendEmail = SiteText.getContent("contact.button.send_email");
				$scope.emailAddress = SiteText.getContent("contact.label.enter_email");
				$scope.emailAddressPH = SiteText.getContent("contact.placeholder.enter_email");
				$scope.subject = SiteText.getContent("contact.label.enter_subject");
				$scope.subjectPH = SiteText.getContent("contact.placeholder.enter_subject");
				$scope.message = SiteText.getContent("contact.label.message");
				$scope.postAddress = SiteText.getContent("contact.label.postal");
				$scope.phones = SiteText.getContent("contact.label.phones");
				$scope.commonInfo = SiteText.getContent("contact.label.info_email");
				$scope.techIssues = SiteText.getContent("contact.label.support_email");
				$scope.address1 = SiteText.getContent("contact.label.address1");
				$scope.address2 = SiteText.getContent("contact.label.address2");
				$scope.address3 = SiteText.getContent("contact.label.address3");
				$scope.mobileTitle = SiteText.getContent("contact.label.mobile");
			});
		},
		templateUrl: "templates/contact.html",
	};
}]);