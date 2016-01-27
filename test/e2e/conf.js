exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ['githubProfileFeature.js'],

  onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.TerminalReporter({
      verbosity: 3,
      color: true,
      showStack: true
    }));
  }
};
