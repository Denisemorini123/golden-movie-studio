// <reference types="cypress" />

describe('US-00: funcionalidade de busca de filme', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Deve buscar filmes com sucesso', () => {
        // Digitar o nome de um filme no campo de busca
        cy.get('input[placeholder="Digite o nome do filme..."]').type('Inception');

        // Clicar no botão de buscar
        cy.contains('Buscar').click();

        // Verificar se o filme buscado aparece na tela
        cy.contains('Inception').should('be.visible');
    });
});



