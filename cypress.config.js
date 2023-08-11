const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "9nvwa8",
  e2e: {
    baseUrl:'https://automationpratice.com.br/',
    defaultCommandTimeout:10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
