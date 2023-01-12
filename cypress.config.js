const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.tlcpay.ph/dtipcims/pcimsfev2/MainPage/Home',
    viewportWidth: 1500,
    viewportHeight: 720,

    reporter: "mochawesome",
    reporterOptions: {
      charts: true,
      overwrite: false,
      html: false,
      json: true,
      reportDir: "cypress/report/mochawesome-report"
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
