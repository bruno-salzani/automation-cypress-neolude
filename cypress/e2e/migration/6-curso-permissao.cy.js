describe('Preenche descrição dos cursos', () => {
    const cursos = require('../../fixtures/course-import.json');

    beforeEach(() => {
        cy.visit(Cypress.env('URL') + '/Admin/Course');
        cy.loginComoAdmin();
    });

    cursos.slice(0, 1).forEach(curso => {
        it(`Permissiona o curso: ${curso.Nome}`, () => {
            cy.acessaEdicaoCurso(curso);
        });
    });
})