import * as path from 'path';

describe('Testing Excel', () => {
    const xlsxPath = './cypress/downloads/course-import.xlsx'
    const jsonName = path.basename(xlsxPath).replace('.xlsx', '.json')

    before(() => {
        cy.task('convertXlsxToJson', xlsxPath)
    })

    it('Converte o arquivo Excel em JSON', () => {
        console.log(cy.fixture(jsonName))
    })
})