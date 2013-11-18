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
			expect(SearchForm.buttons).not.toBeUndefined();
			expect(SearchForm.buttons.search).not.toBeUndefined();

			expect(SearchForm.placeholders).not.toBeUndefined();
			expect(SearchForm.placeholders.search).not.toBeUndefined();
		}));
	});

	describe('sign in form', function() {
		it('should return sign in form settings', inject(function(SignInForm) {
			expect(SignInForm).not.toBeUndefined();
			expect(SignInForm.buttons).not.toBeUndefined();
			expect(SignInForm.buttons.signin).not.toBeUndefined();
			expect(SignInForm.buttons.register).not.toBeUndefined();

			expect(SignInForm.placeholders).not.toBeUndefined();
			expect(SignInForm.placeholders.email).not.toBeUndefined();
			expect(SignInForm.placeholders.password).not.toBeUndefined();

			expect(SignInForm.labels).not.toBeUndefined();
			expect(SignInForm.labels.divider).not.toBeUndefined();
			expect(SignInForm.labels.signin).not.toBeUndefined();
			expect(SignInForm.labels.remember).not.toBeUndefined();
			expect(SignInForm.labels.register).not.toBeUndefined();
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
