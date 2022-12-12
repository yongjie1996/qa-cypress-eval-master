const Form_URL = '/'

describe('Forms', () => {
  before(() => {
    cy.visit(Form_URL)

    cy.url().should('eq', Cypress.config().baseUrl + Form_URL)
  })
  
  it('goes to the Predict page', () => {
    cy.get('.MuiTypography-h4').eq(1).should('contain', 'Predict')
	cy.get('.MuiTypography-h4').eq(1).click()
	cy.url().should('eq', Cypress.config().baseUrl + '/predict')
  })
  
})
