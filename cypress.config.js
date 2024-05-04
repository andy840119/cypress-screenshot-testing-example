const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  projectId: 'hcwi3o',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://host.docker.internal:8000/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
