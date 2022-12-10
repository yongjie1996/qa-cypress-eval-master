const Form_URL = '/reputation'

describe('Forms', () => {
  before(() => {
    cy.visit(Form_URL)

    cy.url().should('eq', Cypress.config().baseUrl + Form_URL)
  })
  
  it('should have the appropriate header', () => {
    cy.get('h2').should('contain', 'All Teams')
	cy.get('h3').should('contain', 'View your loyalty points across each team')
  })
})
