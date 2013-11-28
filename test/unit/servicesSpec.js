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
			expect(SignInForm.button.register).not.toBeUndefined();

			expect(SignInForm.placeholder).not.toBeUndefined();
			expect(SignInForm.placeholder.email).not.toBeUndefined();
			expect(SignInForm.placeholder.password).not.toBeUndefined();

			expect(SignInForm.label).not.toBeUndefined();
			expect(SignInForm.label.divider).not.toBeUndefined();
			expect(SignInForm.label.signin).not.toBeUndefined();
			expect(SignInForm.label.remember).not.toBeUndefined();
			expect(SignInForm.label.register).not.toBeUndefined();
		}));
	});

	describe('about form', function() {
		it('should return about form settings', inject(function(AboutForm) {
			expect(AboutForm.button).not.toBeUndefined();
			expect(AboutForm.button.send_email).not.toBeUndefined();

			expect(AboutForm.placeholder).not.toBeUndefined();
			expect(AboutForm.placeholder.enter_email).not.toBeUndefined();
			expect(AboutForm.placeholder.enter_subject).not.toBeUndefined();

			expect(AboutForm.label).not.toBeUndefined();
			expect(AboutForm.label.postal).not.toBeUndefined();
			expect(AboutForm.label.phones).not.toBeUndefined();
			expect(AboutForm.label.company_address).not.toBeUndefined();
			expect(AboutForm.label.company_phones).not.toBeUndefined();
			expect(AboutForm.label.company_emails).not.toBeUndefined();
			expect(AboutForm.label.enter_email).not.toBeUndefined();
			expect(AboutForm.label.enter_subject).not.toBeUndefined();
			expect(AboutForm.label.message).not.toBeUndefined();

			expect(AboutForm.text).not.toBeUndefined();
			expect(AboutForm.text.about_rhino_head).not.toBeUndefined();
			expect(AboutForm.text.about_rhino_body).not.toBeUndefined();
			expect(AboutForm.text.our_team_head).not.toBeUndefined();
			expect(AboutForm.text.our_team_body).not.toBeUndefined();
			expect(AboutForm.text.our_team_members).not.toBeUndefined();
		}));
	});

	describe('products form', function() {
		it('should return products form settings', inject(function(ProductsForm) {
			expect(ProductsForm.label).not.toBeUndefined();
			expect(ProductsForm.label.products).not.toBeUndefined();
			expect(ProductsForm.label.plugins).not.toBeUndefined();

			expect(ProductsForm.text).not.toBeUndefined();
			expect(ProductsForm.text.products_head).not.toBeUndefined();
			expect(ProductsForm.text.products_body).not.toBeUndefined();
			expect(ProductsForm.text.plugins_head).not.toBeUndefined();
			expect(ProductsForm.text.plugins_body).not.toBeUndefined();
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
});
