module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
      'app/lib/angular/angular.js',
      'app/lib/angular/angular-*.js',
      'app/lib/require/require.js',
      'test/lib/angular/angular-mocks.js',
      'app/js/modules/*.js',
      'app/js/services/*.js',
      'test/unit/**/*.js'
    ],

    exclude: [
      'app/lib/angular/angular-loader.js',
      'app/lib/angular/angular-loader.min.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'       
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})}
