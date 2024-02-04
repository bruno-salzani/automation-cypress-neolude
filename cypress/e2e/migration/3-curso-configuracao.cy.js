describe('Preenche a Configuração dos cursos', () => {
    const cursos = require('../../fixtures/course-import.json');

    beforeEach(() => {
        cy.visit(Cypress.env('URL') + '/Admin/Course');
        cy.loginComoAdmin();
    });

    cursos.slice(0, 49).forEach(curso => {
        it(`Configura o curso: ${curso.Nome}`, () => {
            cy.acessaEdicaoCurso(curso);
            cy.configuraCurso(curso);
        });
    });

    cursos.slice(50, 99).forEach(curso => {
        it(`Configura o curso: ${curso.Nome}`, () => {
            cy.acessaEdicaoCurso(curso);
            cy.configuraCurso(curso);
        });
    });

    cursos.slice(100, 149).forEach(curso => {
        it(`Configura o curso: ${curso.Nome}`, () => {
            cy.acessaEdicaoCurso(curso);
            cy.configuraCurso(curso);
        });
    });

    cursos.slice(150, 199).forEach(curso => {
        it(`Configura o curso: ${curso.Nome}`, () => {
            cy.acessaEdicaoCurso(curso);
            cy.configuraCurso(curso);
        });
    });

    cursos.slice(200, 249).forEach(curso => {
        it(`Configura o curso: ${curso.Nome}`, () => {
            cy.acessaEdicaoCurso(curso);
            cy.configuraCurso(curso);
        });
    });

    cursos.slice(250, 299).forEach(curso => {
        it(`Configura o curso: ${curso.Nome}`, () => {
            cy.acessaEdicaoCurso(curso);
            cy.configuraCurso(curso);
        });
    });

    cursos.slice(300, 349).forEach(curso => {
        it(`Configura o curso: ${curso.Nome}`, () => {
            cy.acessaEdicaoCurso(curso);
            cy.configuraCurso(curso);
        });
    });
})