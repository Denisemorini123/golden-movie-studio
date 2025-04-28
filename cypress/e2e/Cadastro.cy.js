/// <reference types="cypress"/>

describe('US-012 - Funcionalidade: Cadastro de Membros', () => {
  beforeEach(() => {
    cy.visit('/') // Certificando-se que a página de cadastro está acessível
  })

  it('Deve cadastrar um novo membro preenchendo apenas os campos obrigatórios', () => {
    var email = `Denise${Date.now()}@teste.com`; // Gerando um email único para o cadastro

    // Chamando o comando customizado corretamente
    cy.preenchercadastro('Denise', 'Morini', email, '41992036927', 'Denise@059')
    
    it.only('Deve validar mensagem de erro com o campo nome invalido', ()=> {
      cy.preenchercadastro('Denise20', 'Morini', email, '41992036927', 'Denise@059')
    
    })
  })
})
