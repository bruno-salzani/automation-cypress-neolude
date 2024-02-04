// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('elementExists', (selector) => {
    return cy.window().then($window => $window.document.querySelector(selector));
});

// Converte XLSX em JSON
Cypress.Commands.add("parseXlsx", (inputFile) => {
    return cy.task('parseXlsx', { filePath: inputFile })
});

// Realiza login na plataforma
Cypress.Commands.add('loginComoAdmin', () => {
    // Clica na opção para entrar como fornecedor
    if(Cypress.env('ISLOGIN_AD')) {
        cy.get('#account-neolude-login').click();
    }    
    // Digita o login
    cy.get('#Login').type(Cypress.env('ADMIN_LOGIN'));
    // Digita a senha
    cy.get('#Password').type(Cypress.env('ADMIN_PASSWORD'));
    // Faz login
    cy.get('#btnLogin').click();
    // Verifica se o usuário logou
    cy.get('#navbarUser').should('exist');
});

// Abre menu lateral
Cypress.Commands.add('abreSidebar', () => {
    cy.get('.open-dashboard > .mdi').click();
    cy.get('#user-dashboard').should('be.visible');
});

// Abre menu do usuário no header
Cypress.Commands.add('abreMenuDoUsuario', () => {
    cy.get('#navbarUser').click();
    cy.wait(Cypress.env('CLIENT_WAIT'));
    cy.get('#navbarUser').should('have.class', 'open');
});

// Acessa a edição do curso através da listagem de curso
Cypress.Commands.add('acessaEdicaoCurso', (curso) => {

    // Verifica se o usuário está na página de LISTAGEM de curso
    cy.contains('h1', 'Cursos');
    cy.wait(Cypress.env('CLIENT_WAIT'));

    // Preenche o título do curso no campo de busca
    cy.get('#Name').type(curso.Nome);
    cy.wait(Cypress.env('CLIENT_WAIT'));

    // Busca pelo nome do curso
    cy.get('#btnSearch').click();
    cy.wait(Cypress.env('SERVER_WAIT'));

    // Verifica se o primeiro curso exibido é o que deve ser editado
    if (cy.get(':nth-child(1) > .ordered-content > header > h4').contains(course.Nome)) {
        cy.get(':nth-child(1) > .ordered-content > .actions > .btn-edit > .mdi').click();
        cy.wait(Cypress.env('SERVER_WAIT'));
    } else if (cy.get(':nth-child(2) > .ordered-content > header > h4').contains(course.Nome)) {
        cy.get(':nth-child(2) > .ordered-content > .actions > .btn-edit > .mdi').click();
    } else {
        cy.get(':nth-child(3) > .ordered-content > .actions > .btn-edit > .mdi').click();
    }

    // Verifica se está na página de edição do curso correto
    cy.contains('h1', curso.Nome);
});

Cypress.Commands.add('criaCurso', (curso) => {
    // Verifica se o usuário está na página de criação de curso
    cy.wait(Cypress.env('CLIENT_WAIT'));
    cy.contains('h1', 'Novo curso');

    // Preenche o título do curso
    cy.get('#CourseName').type(curso.Nome);
    cy.wait(Cypress.env('CLIENT_WAIT'));
    
    // Seleciona o tipo do curso
    cy.get('#CourseModeID').select(curso.Tipo);
    cy.wait(Cypress.env('CLIENT_WAIT'));

    // Preenche as tags do curso (OPCIONAL)
    if(curso.Tag != null) {
        cy.get('.selectize-input').type(curso.Tag +'{enter}');
        cy.wait(Cypress.env('CLIENT_WAIT'));
    }

    // Cria o curso
    cy.get('#btn_save').click();
    cy.wait(Cypress.env('SERVER_WAIT'));

    // Verifica se o curso foi criado
    cy.contains('h1', curso.Nome.toString());

    // Muda o status do curso para em andamento
    cy.get('#ComponentStatusIdentifier').select(curso.Status);
    cy.wait(Cypress.env('CLIENT_WAIT'));

    // Salva o status do curso
    cy.get('#btn_save').click();
    cy.wait(Cypress.env('SERVER_WAIT'));
});

Cypress.Commands.add('configuraCurso', (curso) => {

    // Clica na aba de configurações
    cy.get('.crud > .nav > :nth-child(2) > a').click();
    cy.wait(Cypress.env('SERVER_WAIT'));
    // Preenche a carga horaria
    if(curso.Duracao != null) {
        // Horas
        cy.get('#EstimatedDurationHours').clear().type(curso.Duracao.split(':')[0]);
        cy.wait(Cypress.env('CLIENT_WAIT'));
        // Minutos
        cy.get('#EstimatedDurationMinutes').clear().type(curso.Duracao.split(':')[1]);
        cy.wait(Cypress.env('CLIENT_WAIT'));
    }

    // Seleciona o template do curso
    if(curso.Template != null) {
        cy.get('#classRoomTemplateID').select(curso.Template);
        cy.wait(Cypress.env('CLIENT_WAIT'));
    }
    
    // Seleciona rematricula
    if(curso.Rematricula != null) {
        cy.get('#AllowReEnrollment').select('1');
        cy.wait(Cypress.env('CLIENT_WAIT'));
    }

    // Habilita equivalencia de curso
    if(curso.Equivalencia == "Sim") {
        cy.get('#AllowConclusionByEquivalence').click();
    }   

    // Seleciona tipo de nota
    if(curso.Media != null) {
        cy.get('#GradeTypeID').select("2021");
    }

    // Salva as configurações
    cy.get('#btnSaveConfiguration').click();
    cy.wait(Cypress.env('SERVER_WAIT'));
    cy.wait(Cypress.env('SERVER_WAIT'));
})


Cypress.Commands.add('descreveCurso', (curso) => {

    // Clica na aba de descrição do curso
    cy.get('#openAutomatically').click();
    cy.wait(Cypress.env('CLIENT_WAIT'));

    // Preenche a descrição
    cy.get('#cke_2_contents > .cke_wysiwyg_div').clear().type(curso.Descricao);

    // Salva a descrição
    cy.get('#btnSaveTextualDescriptions').click();
    cy.wait(Cypress.env('SERVER_WAIT'));
})


Cypress.Commands.add('categorizaCurso', (curso) => {
    // Clica na aba de categorias
    cy.get('.crud > .nav > :nth-child(3) > a').click();
    cy.wait(Cypress.env('CLIENT_WAIT'));

    // Preenche o campo com o nome da categoria
    cy.get('.form-group > .selectize-control > .selectize-input').type(curso.Categoria)
    cy.wait(Cypress.env('SERVER_WAIT'));

    // Seleciona a categoria
    cy.get('.media-heading').click();

    // Adiciona a categoria ao curso
    cy.get('.input-group-btn > .btn').click();
    cy.wait(Cypress.env('SERVER_WAIT'));

    // Verifica se a categoria foi criada
});


Cypress.Commands.add('criaTurma', (curso) => {
    
    // Clica na aba de turmas
    cy.get('.crud > .nav > :nth-child(9) > a').click();
    cy.wait(Cypress.env('SERVER_WAIT'));

    // Clica para incluir turma
    cy.get('.col-md-offset-0 > .btn').click();
    cy.wait(Cypress.env('SERVER_WAIT'));

    // Preenche nome da turma
    cy.get('#Name').type(curso.Turma);
    cy.wait(Cypress.env('CLIENT_WAIT'));

    // Seleciona o status da turma
    cy.get('#id-component-status-identfier').select("EINPR");
    cy.wait(Cypress.env('CLIENT_WAIT'));

    // Preenche duração da turma
    cy.get('.radio > :nth-child(1)').click();
    cy.get('#Beginning').type(curso.Inicio + '{enter}');
    cy.wait(Cypress.env('CLIENT_WAIT'));

    // Cria a turma
    cy.get('.modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(Cypress.env('SERVER_WAIT'));

    // Verifica se a turma foi criada

})

Cypress.Commands.add('permissionaCurso', (curso) => {
    // Clica na aba de permissões
    cy.get('.crud > .nav > :nth-child(4) > a').click();
    cy.wait(Cypress.env('SERVER_WAIT'));

    // Clica no botão de nova permissão
    cy.get('#permission-list > :nth-child(1) > .col-sm-12 > :nth-child(1)').click();
    cy.wait(Cypress.env('SERVER_WAIT'));

    // Clica no campo de perfil
    cy.get('form > :nth-child(1) > :nth-child(1) > .form-group').click();
    cy.wait(Cypress.env('CLIENT_WAIT'));

    // Preenche perfil
    cy.get('.select2-search__field').type('teste{enter}');
    cy.wait(Cypress.env('CLIENT_WAIT'));

    // Clica no campo de departamento
    cy.get('form > :nth-child(1) > :nth-child(2) > .form-group').click();
    cy.wait(Cypress.env('CLIENT_WAIT'));

    // Preenche departamento
    cy.get('.select2-search__field').type('teste{enter}');
    cy.wait(Cypress.env('CLIENT_WAIT'));

    // Clica no campo de Marcador
    cy.get(':nth-child(2) > .col-sm-12 > .form-group').click();
    cy.wait(Cypress.env('CLIENT_WAIT'));

    // Preenche marcador
    cy.get('.select2-search__field').type('teste{enter}');
    cy.wait(Cypress.env('CLIENT_WAIT'));

    // Clica para salvar
    cy.get('#btn-save-permission').click();
    cy.wait(Cypress.env('SERVER_WAIT'));
})