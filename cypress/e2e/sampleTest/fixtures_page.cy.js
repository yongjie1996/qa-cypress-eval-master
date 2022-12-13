const Form_URL = '/'

describe('Forms', () => {
  before(() => {
    cy.visit(Form_URL)

    cy.url().should('eq', Cypress.config().baseUrl + Form_URL)
  })
  
   it('goes to the Fixtures page', () => {
    cy.get('.MuiTypography-h4').eq(4).should('contain', 'Fixtures')
	cy.get('.MuiTypography-h4').eq(4).click()
	cy.url().should('eq', Cypress.config().baseUrl + '/fixtures')
  })
  
})