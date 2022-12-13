const Form_URL = '/'

describe('Forms', () => {
  before(() => {
    cy.visit(Form_URL)

    cy.url().should('eq', Cypress.config().baseUrl + Form_URL)
  })
  
   it('goes to the Zujufans page', () => {
    cy.get('.MuiTypography-h4').eq(3).should('contain', '#ZujuFans')
	cy.get('.MuiTypography-h4').eq(3).click()
	cy.url().should('eq', Cypress.config().baseUrl + '/zujufans')
  })
  
})