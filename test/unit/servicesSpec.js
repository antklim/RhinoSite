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
    it('current language should get/set language', inject(function(SearchForm) {
      expect(SearchForm).not.toBeUndefined();
      expect(SearchForm.buttons).not.toBeUndefined();
      expect(SearchForm.buttons.search).not.toBeUndefined();

      expect(SearchForm.placeholders).not.toBeUndefined();
      expect(SearchForm.placeholders.search).not.toBeUndefined();
    }));
  });  
});
