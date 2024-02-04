describe('Registro de curso em massa', () => {
    const cursos = require('../../fixtures/course-import.json');

    beforeEach(() => {
        cy.visit(Cypress.env('URL') + '/Course/New');
        cy.loginComoAdmin();
    });

    cursos.slice(0, 9).forEach((curso, index) => {
        it(`(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
           cy.criaCurso(curso);
           cy.descreveCurso(curso);
           cy.configuraCurso(curso);
           cy.categorizaCurso(curso);
           cy.criaTurma(curso);
        });
    });

    cursos.slice(10, 19).forEach((curso, index) => {
        it(`(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

    cursos.slice(20, 29).forEach((curso, index) => {
        it(`(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

    cursos.slice(30, 39).forEach((curso, index) => {
        it(`(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

    cursos.slice(40, 49).forEach((curso, index) => {
        it(`(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

    cursos.slice(50, 59).forEach((curso, index) => {
        it(`(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

    cursos.slice(60, 69).forEach((curso, index) => {
        it(`(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

    cursos.slice(70, 79).forEach((curso, index) => {
        it(`(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

    cursos.slice(80, 89).forEach((curso, index) => {
        it(`(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

    cursos.slice(90, 99).forEach((curso, index) => {
        it(`(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

    cursos.slice(100, 109).forEach((curso, index) => {
        it(`(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

    cursos.slice(110, 119).forEach((curso, index) => {
        it(`(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

    cursos.slice(120, 129).forEach((curso, index) => {
        it(`(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

    cursos.slice(130, 139).forEach((curso, index) => {
        it(`(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

    cursos.slice(140, 149).forEach((curso, index) => {
        it(`(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

    cursos.slice(150, 159).forEach((curso, index) => {
        it(`(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

    cursos.slice(160, 169).forEach((curso, index) => {
        it(`(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

    cursos.slice(170, 179).forEach((curso, index) => {
        it(`(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

    cursos.slice(180, 189).forEach((curso, index) => {
        it(`(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

    cursos.slice(190, 199).forEach((curso, index) => {
        it(`(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

    cursos.slice(200, 209).forEach((curso, index) => {
        it(`(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

    cursos.slice(210, 219).forEach((curso, index) => {
        it(`(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

    cursos.slice(220, 229).forEach((curso, index) => {
        it(`(Iteração ${index})(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

    cursos.slice(230, 239).forEach((curso, index) => {
        it(`(Iteração ${index})(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

    cursos.slice(240, 249).forEach((curso, index) => {
        it(`(Iteração ${index})(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

    cursos.slice(250, 259).forEach((curso, index) => {
        it(`(Iteração ${index})(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

    cursos.slice(260, 269).forEach((curso, index) => {
        it(`(Iteração ${index})(Iteração ${index}) Registra o curso: ${curso.Nome}`, () => {
            cy.criaCurso(curso);
            cy.descreveCurso(curso);
            cy.configuraCurso(curso);
            cy.categorizaCurso(curso);
            cy.criaTurma(curso);
        });
    });

})