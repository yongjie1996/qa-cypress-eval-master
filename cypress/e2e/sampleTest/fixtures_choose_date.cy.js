const Form_URL = '/fixtures'

describe('Forms', () => {
  before(() => {
    cy.visit(Form_URL)

    cy.url().should('eq', Cypress.config().baseUrl + Form_URL)
  })
  
  it('able to click for date menu', () => {
	cy.wait(3000)
    cy.get('[data-testid="KeyboardArrowDownIcon"]').eq(0).click()
  })
  
  it('able to click for different month', () => {
	cy.get('[data-testid="ArrowLeftIcon"]').eq(0).click()
	cy.wait(1000)
	cy.get('[data-testid="ArrowRightIcon"]').eq(0).click()
  })
  
  it('able to click for different day on the month', () => {
	cy.get('.MuiButtonBase-root').contains('1').click()
  })
  
})