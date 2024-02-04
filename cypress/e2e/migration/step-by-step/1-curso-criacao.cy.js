// describe('Registro de curso em massa', () => {
//     const cursos = require('../../../fixtures/course-import.json');

//     beforeEach(() => {
//         cy.visit(Cypress.env('URL') + '/Course/New');
//         cy.loginComoAdmin();
//     });

//     cursos.slice(0, 500).forEach((curso, index) => {
//         it(`(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
//           cy.criaCurso(curso);
//         });
//       });
// })