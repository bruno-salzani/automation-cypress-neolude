describe('Registro de curso em massa', () => {
    const cursos = require('../../fixtures/course-import.json');

    beforeEach(() => {
        cy.visit(Cypress.env('URL') + '/Course/New');
        cy.loginComoAdmin();
    });

    cursos.slice(0, 49).forEach(curso => {
        it(`Registra o curso: ${curso.Nome}`, () => {
           cy.criaCurso(curso);
        });
    });

    cursos.slice(50, 99).forEach(curso => {
        it(`Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
        });
    });

    cursos.slice(100, 149).forEach(curso => {
        it(`Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
        });
    });

    cursos.slice(150, 199).forEach(curso => {
        it(`Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
        });
    });

    cursos.slice(200, 249).forEach(curso => {
        it(`Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
        });
    });

    cursos.slice(289, 300).forEach(curso => {
        it(`Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
        });
    });
    cursos.slice(301, 350).forEach(curso => {
        it(`Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
        });
    });
})