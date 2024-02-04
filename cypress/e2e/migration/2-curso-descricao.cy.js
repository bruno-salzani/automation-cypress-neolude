describe('Preenche descrição dos cursos', () => {
    const cursos = require('../../fixtures/course-import.json');

    beforeEach(() => {
        cy.visit(Cypress.env('URL') + '/Admin/Course');
        cy.loginComoAdmin();
    });

    cursos.slice(0, 49).forEach(curso => {
        it(`Descreve o curso: ${curso.Nome}`, () => {
            cy.acessaEdicaoCurso(curso);
            cy.descreveCurso(curso);
        });
    });

    cursos.slice(50, 99).forEach(curso => {
        it(`Descreve o curso: ${curso.Nome}`, () => {
            cy.acessaEdicaoCurso(curso);
            cy.descreveCurso(curso);
        });
    });

    cursos.slice(100, 149).forEach(curso => {
        it(`Descreve o curso: ${curso.Nome}`, () => {
            cy.acessaEdicaoCurso(curso);
            cy.descreveCurso(curso);
        });
    });

    cursos.slice(150, 199).forEach(curso => {
        it(`Descreve o curso: ${curso.Nome}`, () => {
            cy.acessaEdicaoCurso(curso);
            cy.descreveCurso(curso);
        });
    });

    cursos.slice(200, 249).forEach(curso => {
        it(`Descreve o curso: ${curso.Nome}`, () => {
            cy.acessaEdicaoCurso(curso);
            cy.descreveCurso(curso);
        });
    });

    cursos.slice(250, 300).forEach(curso => {
        it(`Descreve o curso: ${curso.Nome}`, () => {
            cy.acessaEdicaoCurso(curso);
            cy.descreveCurso(curso);
        });
    });

    cursos.slice(301, 350).forEach(curso => {
        it(`Descreve o curso: ${curso.Nome}`, () => {
            cy.acessaEdicaoCurso(curso);
            cy.descreveCurso(curso);
        });
    });
})