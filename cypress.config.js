const { defineConfig } = require("cypress");
const cypressSplit = require('cypress-split')
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  projectId: 'o8bzrb',
  "defaultCommandTimeout": 6000,
  "video":true,
  "screenshotOnRunFailure":true,
  retries: 2,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      quite: true,
      overwrite: false,
      html: false,
      json: true,
    },
  },

  e2e: {
    fixturesFolder:'cypress/fixtures' ,
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      cypressSplit(on, config)

      on('file:preprocessor', cucumber())
      // IMPORTANT: return the config object
      return config
    },
    "env": {
      "ApiBaseUrl": "https://api.openweathermap.org",
      "YOUR_API_KEY":"eb8a70f875f4e4baabc1399cec36e4b6"
    },
    baseUrl: 'http://localhost:3000/weather',
    specPattern:'cypress/e2e/cucumber/weather/Features/**/*.feature',
  },
});
