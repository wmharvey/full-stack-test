exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    'test-e2e/**/*.js'
  ],

  seleniumAddress: 'http://localhost:4444/wd/hub',

  baseUrl: 'http://localhost:8080',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
