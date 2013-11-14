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
  	it('current language should be russian', inject(function(SiteLang) {
  		expect(SiteLang).toEqual('ru');
  	}));
  });
});
