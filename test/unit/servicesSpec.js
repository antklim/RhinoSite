'use strict';

/* jasmine specs for services go here */

describe('service', function() {
	beforeEach(module('RhinoIn'));


	describe('version', function() {
		it('should return current version', inject(function(version) {
			expect(version).toEqual('0.1');
		}));
	});

	describe('site map', function() {
		it('should return site map', inject(function(SiteMap){
			expect(SiteMap).not.toBeUndefined();
		}));
	});

	describe('language list', function() {
		it('should return language list', inject(function(SiteLangList) {
			expect(SiteLangList).not.toBeUndefined();
		}));
	});

	describe('current language', function() {
		it('current language should get/set language', inject(function(SiteLang) {
			expect(SiteLang).not.toBeUndefined();
			expect(SiteLang.getLanguage).not.toBeUndefined();
			expect(SiteLang.setLanguage).not.toBeUndefined();

			var lang = SiteLang.getLanguage();
			expect(lang).toEqual({key: 'ru', name: 'RU'});

			var lang = SiteLang.setLanguage({key: 'en', name: 'EN'});
			expect(lang).toEqual({key: 'en', name: 'EN'});
		}));
	});

	describe('nav form', function() {
		it('should return nav form settings', inject(function(NavForm) {
			expect(NavForm).not.toBeUndefined();
			expect(NavForm.label).not.toBeUndefined();
			expect(NavForm.label.home).not.toBeUndefined();
			expect(NavForm.label.about).not.toBeUndefined();
			expect(NavForm.label.news).not.toBeUndefined();
			expect(NavForm.label.services).not.toBeUndefined();
			expect(NavForm.label.products).not.toBeUndefined();
			expect(NavForm.label.contact).not.toBeUndefined();
			expect(NavForm.label.signup).not.toBeUndefined();
			expect(NavForm.label.signin).not.toBeUndefined();
		}));
	});

	describe('home form', function() {
		it('should return home form settings', inject(function(HomeForm) {

		}));
	});

	describe('search form', function() {
		it('should return search form settings', inject(function(SearchForm) {
			expect(SearchForm).not.toBeUndefined();
			expect(SearchForm.button).not.toBeUndefined();
			expect(SearchForm.button.search).not.toBeUndefined();

			expect(SearchForm.placeholder).not.toBeUndefined();
			expect(SearchForm.placeholder.search).not.toBeUndefined();
		}));
	});

	describe('sign in form', function() {
		it('should return sign in form settings', inject(function(SignInForm) {
			expect(SignInForm).not.toBeUndefined();
			expect(SignInForm.button).not.toBeUndefined();
			expect(SignInForm.button.signin).not.toBeUndefined();

			expect(SignInForm.placeholder).not.toBeUndefined();
			expect(SignInForm.placeholder.email).not.toBeUndefined();
			expect(SignInForm.placeholder.password).not.toBeUndefined();

			expect(SignInForm.label).not.toBeUndefined();
			expect(SignInForm.label.signin).not.toBeUndefined();
			expect(SignInForm.label.remember).not.toBeUndefined();
			expect(SignInForm.label.forgot).not.toBeUndefined();
		}));
	});

	describe('sign up form', function() {
		it('should return sign up form settings', inject(function(SignUpForm) {
			expect(SignUpForm).not.toBeUndefined();
			expect(SignUpForm.button).not.toBeUndefined();
			expect(SignUpForm.button.signup).not.toBeUndefined();

			expect(SignUpForm.placeholder).not.toBeUndefined();
			expect(SignUpForm.placeholder.email).not.toBeUndefined();
			expect(SignUpForm.placeholder.password).not.toBeUndefined();
			expect(SignUpForm.placeholder.confpswd).not.toBeUndefined();

			expect(SignUpForm.label).not.toBeUndefined();
			expect(SignUpForm.label.signup).not.toBeUndefined();
		}));
	});

	describe('about form', function() {
		it('should return about form settings', inject(function(AboutForm) {
			expect(AboutForm.label).not.toBeUndefined();
			expect(AboutForm.label.about_rhino).not.toBeUndefined();
			expect(AboutForm.label.our_team).not.toBeUndefined();
			expect(AboutForm.label.our_services).not.toBeUndefined();
			expect(AboutForm.label.our_plugins).not.toBeUndefined();

			expect(AboutForm.text).not.toBeUndefined();
			expect(AboutForm.text.about_rhino_head).not.toBeUndefined();
			expect(AboutForm.text.about_rhino_body).not.toBeUndefined();
			expect(AboutForm.text.our_team_head).not.toBeUndefined();
			expect(AboutForm.text.our_team_body).not.toBeUndefined();
			expect(AboutForm.text.our_team_members).not.toBeUndefined();
			expect(AboutForm.text.services_head).not.toBeUndefined();
			expect(AboutForm.text.services_body).not.toBeUndefined();
			expect(AboutForm.text.plugins_head).not.toBeUndefined();
			expect(AboutForm.text.plugins_body).not.toBeUndefined();
		}));
	});

	describe('news form', function() {
		it('should return news form settings', inject(function(NewsForm) {

		}));
	});

	describe('products form', function() {
		it('should return products form settings', inject(function(ProductsForm) {
			expect(ProductsForm.label).not.toBeUndefined();
			expect(ProductsForm.label.products).not.toBeUndefined();

			expect(ProductsForm.text).not.toBeUndefined();
			expect(ProductsForm.text.products_head).not.toBeUndefined();
			expect(ProductsForm.text.products_body).not.toBeUndefined();
		}));
	});

	describe('services form', function() {
		it('should return services form settings', inject(function(ServicesForm) {
			expect(ServicesForm.label).not.toBeUndefined();
			expect(ServicesForm.label.consulting).not.toBeUndefined();
			expect(ServicesForm.label.optimization).not.toBeUndefined();
			expect(ServicesForm.label.search).not.toBeUndefined();

			expect(ServicesForm.text).not.toBeUndefined();
			expect(ServicesForm.text.consulting_head).not.toBeUndefined();
			expect(ServicesForm.text.consulting_body).not.toBeUndefined();
			expect(ServicesForm.text.optimization_head).not.toBeUndefined();
			expect(ServicesForm.text.optimization_body).not.toBeUndefined();
			expect(ServicesForm.text.search_head).not.toBeUndefined();
			expect(ServicesForm.text.search_body).not.toBeUndefined();
		}));
	});

	describe('contact form', function() {
		it('should return contact form settings', inject(function(ContactForm) {
			expect(ContactForm.emails).not.toBeUndefined();
			expect(ContactForm.emails.info_email).not.toBeUndefined();
			expect(ContactForm.emails.support_email).not.toBeUndefined();

			expect(ContactForm.phones).not.toBeUndefined();
			expect(ContactForm.phones.mobile).not.toBeUndefined();

			expect(ContactForm.button).not.toBeUndefined();
			expect(ContactForm.button.send_email).not.toBeUndefined();

			expect(ContactForm.placeholder).not.toBeUndefined();
			expect(ContactForm.placeholder.enter_email).not.toBeUndefined();
			expect(ContactForm.placeholder.enter_subject).not.toBeUndefined();

			expect(ContactForm.label).not.toBeUndefined();
			expect(ContactForm.label.postal).not.toBeUndefined();
			expect(ContactForm.label.phones).not.toBeUndefined();
			expect(ContactForm.label.address1).not.toBeUndefined();
			expect(ContactForm.label.address2).not.toBeUndefined();
			expect(ContactForm.label.address3).not.toBeUndefined();
			expect(ContactForm.label.mobile).not.toBeUndefined();
			expect(ContactForm.label.info_email).not.toBeUndefined();
			expect(ContactForm.label.support_email).not.toBeUndefined();
			expect(ContactForm.label.enter_email).not.toBeUndefined();
			expect(ContactForm.label.enter_subject).not.toBeUndefined();
			expect(ContactForm.label.message).not.toBeUndefined();
		}));
	});
});
