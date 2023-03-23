const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  screenshotOnRunFailure: true,
  downloadsFolder: 'cypress/downloads',
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  fixturesFolder: 'cypress/fixtures',
  chromeWebSecurity: true,
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  
  baseUrl: 'https://example.cypress.io',
  specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  },
});
