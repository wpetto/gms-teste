/// <reference types="cypress"/>

describe('US-012 Funcionalidade: Cadastro de novos membros', () => {
  it('Deve fazer o cadastro com os campos obrigatório', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname') .type('Weverton')
    cy.get('#signup-lastname') .type('Santos')
    cy.get('#signup-email') .type('wpetto2@gmail.com')
    cy.get('#signup-password') .type('@Teste2809')
    cy.get('#signup-button') .click()
    cy.get('#signup-response').should('contain','Cadastro realizado com sucesso!') 
  })
})