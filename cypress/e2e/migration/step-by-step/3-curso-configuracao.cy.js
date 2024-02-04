// describe('Preenche a Configuração dos cursos', () => {
//     const cursos = require('../../../fixtures/course-import.json');

//     beforeEach(() => {
//         cy.visit(Cypress.env('URL') + '/Admin/Course');
//         cy.loginComoAdmin();
//     });

//     cursos.slice(0, 500).forEach((curso, index) => {
//         it(`(Iteração ${index}) Configura o curso: ${curso.Nome}`, () => {
//             cy.acessaEdicaoCurso(curso);
//             cy.configuraCurso(curso);
//         });
//     });
// })