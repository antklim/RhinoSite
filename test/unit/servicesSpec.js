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

	describe('contact form', function() {
		it('should return contact form settings', inject(function(ContactForm) {
			expect(ContactForm.labels).not.toBeUndefined();
			expect(ContactForm.labels.companyName).not.toBeUndefined();
			expect(ContactForm.labels.companyContactName).not.toBeUndefined();
			expect(ContactForm.labels.companyAddress).not.toBeUndefined();
			expect(ContactForm.labels.companyPhone).not.toBeUndefined();
			expect(ContactForm.labels.companyEmail).not.toBeUndefined();
		}));
	});
});
