const Form_URL = '/reputation'

describe('Forms', () => {
  before(() => {
    cy.visit(Form_URL)

    cy.url().should('eq', Cypress.config().baseUrl + Form_URL)
  })
  
  it('searches for Manchester City', () => {
    cy.get('.MuiInputBase-input').should('have.attr', 'placeholder', 'Search for a team')
	cy.get('.MuiInputBase-input').type('Manchester City')
	cy.get('.MuiInputBase-input').should('have.value', 'Manchester City')
  })
})
