// npx cypress run --record --key 9905ae1b-ed10-414c-a8c3-d3f879de54ce

const { defineConfig } = require("cypress")
const { writeFileSync } = require('fs');
const path = require('path');
const XLSX = require('xlsx')

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: "mochawesome",
  reporterOptions: {
  reportDir: "cypress/report/mochawesome-report",
  overwrite: true,
  html: true,
  json: false,
  timestamp: "mmddyyyy_HHMMss"},
  projectId: '7duj17',
  video: true,
  numTestsKeptInMemory: 0,
  screenshotOnRunFailure: true,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        convertXlsxToJson(filePath) {
          const workbook = XLSX.readFile(filePath)
          const worksheet = workbook.Sheets[workbook.SheetNames[0]]
          const jsonData = XLSX.utils.sheet_to_json(worksheet)

          const fileName = path.basename(filePath, '.xlsx')
          const jsonFilePath = `./cypress/fixtures/${fileName}.json`
          writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2))
          return null
        }
      })
    },
  },
});
