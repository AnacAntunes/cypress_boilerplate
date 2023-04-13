const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  downloadsFolder: 'cypress/downloads',
  screenshotsFolder: 'cypress/evidence/screenshots',
  videosFolder: 'cypress/evidence/videos',
  fixturesFolder: 'cypress/fixtures',
  chromeWebSecurity: true,
  
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  
    baseUrl: 'https://example.cypress.io',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  },
  
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
})
