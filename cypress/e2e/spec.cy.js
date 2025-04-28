/// <reference types="cypress" />

describe('US-012 - Funcionalidade: Cadastro de Membros', () => {
  it('Deve cadastrar um novo membro preenchendo apenas os campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')

    // Preencher o nome
    cy.get('#signup-firstname')
      .should('be.visible')
      .type('Denise');

    // Preencher o sobrenome
    cy.get('#signup-lastname')
      .should('be.visible')
      .type('Morini');

    // Preencher o e-mail
    cy.get('#signup-email')
      .should('be.visible')
      .type('Denise@teste.com');

    // Preencher o telefone
    cy.get('#signup-phone')
      .should('be.visible')
      .type('41992036927');

    // Preencher a senha
    cy.get('#signup-password')
      .should('be.visible')
      .type('Denise@059');

    // Clicar no botão cadastrar
    cy.get('#signup-button')
      .should('be.enabled')
      .click();

    // Validação pós-cadastro (exemplo: sucesso)
    cy.contains('Cadastro realizado com sucesso').should('be.visible');
    // ou valide uma URL de redirecionamento, se existir
    // cy.url().should('include', '/pagina-de-confirmacao')
  })
})
