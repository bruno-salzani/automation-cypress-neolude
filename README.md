# Automação de Criação de Cursos - LMS Neolude

Este projeto foi desenvolvido para automatizar a criação de conteúdos na plataforma LMS **Neolude**, reduzindo o tempo e o esforço do time de implantação. Utilizando o framework **Cypress**, a automação substitui o processo manual de criação de cursos, aumentando a eficiência e eliminando possíveis erros humanos.

## 🛠️ Funcionalidades

- **Importação de dados**: Converte planilhas Excel com as informações dos cursos para JSON.
- **Login automatizado**: Acesso seguro à plataforma como administrador.
- **Criação de cursos**: Realiza a criação dos cursos, incluindo:
  - Adição de descrições detalhadas.
  - Configuração de parâmetros e permissões.
  - Classificação dos cursos por categorias.
  - Registro de turmas associadas aos cursos.

## 🚀 Fluxo de Automação

1. O time de implantação recebe uma planilha Excel com os dados necessários.
2. A planilha é convertida para JSON automaticamente.
3. A automação realiza o login na plataforma e executa:
   - Criação do curso.
   - Configuração de parâmetros e permissões.
   - Adição de categorias e registro de turmas.
4. O processo é repetido para todos os cursos da planilha.

## 📂 Estrutura do Projeto

- **Scripts de automação**: Localizados na pasta `cypress/e2e`.
- **Fixtures**: Dados simulados para os testes, armazenados em `cypress/fixtures`.
- **Conversão de planilha**: Script `converte-excel-em-json.cy.js`.
- **Automação principal**: Script `curso-criacao.cy.js` dividido em etapas específicas.

## 🧪 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/): Framework para automação de testes end-to-end.
- [Node.js](https://nodejs.org/): Ambiente de execução JavaScript.
- **Mochawesome**: Geração de relatórios detalhados dos testes.

## 📦 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/bruno-salzani/neolude-automation.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure o ambiente no arquivo `cypress.config.js`.
4. Execute os testes:
   ```bash
   npx cypress open
   ```

## 🔗 Link do Repositório

[Repositório no GitHub](https://github.com/bruno-salzani/neolude-automation)
