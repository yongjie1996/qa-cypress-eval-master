const Form_URL = '/'

describe('Forms', () => {
  before(() => {
    cy.visit(Form_URL)

    cy.url().should('eq', Cypress.config().baseUrl + Form_URL)
  })
  
  it('goes to the Teams page', () => {
    cy.get('.MuiTypography-h4').eq(2).should('contain', 'Teams')
	cy.get('.MuiTypography-h4').eq(2).click()
	cy.url().should('eq', Cypress.config().baseUrl + '/reputation')
  })
  
})
