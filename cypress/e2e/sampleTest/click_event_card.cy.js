const Form_URL = '/predict#sign-in'

describe('Forms', () => {
  before(() => {
    cy.visit(Form_URL)
    cy.url().should('eq', Cypress.config().baseUrl + Form_URL)
  })
  
  it('able to clcik event cards in Predict page', () => {
	cy.get('.MuiInputBase-input').eq(0).type('zujutest+automation@gmail.com')
    cy.get('.MuiInputBase-input').eq(1).type('TestAuto123')
    cy.get('.MuiButton-root').eq(1).click()
	cy.url().should('eq', Cypress.config().baseUrl + '/predict')
	Cypress.on('uncaught:exception', (err, runnable) => {
	  return false
	})
	cy.get('[id="event-icon-card"]').eq(0).click()
  })
})