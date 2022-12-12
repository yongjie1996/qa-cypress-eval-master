const Form_URL = '/predict#sign-in'

describe('Forms', () => {
  before(() => {
    cy.visit(Form_URL)
    cy.url().should('eq', Cypress.config().baseUrl + Form_URL)
  })
  
  it('able to add teams to favorites in Predict page', () => {
    cy.get('.MuiInputBase-input').eq(0).type('zujutest+automation@gmail.com')
    cy.get('.MuiInputBase-input').eq(1).type('TestAuto123')
    cy.get('.MuiButton-root').eq(1).click()
	cy.url().should('eq', Cypress.config().baseUrl + '/predict')
	cy.get('.MuiTypography-body2').click()
	cy.get('.MuiInputBase-root').type('Viet FC HN')
	cy.wait(1000)
	cy.get('[alt="Viet FC HN"]').click()
	cy.get('.MuiButtonBase-root').contains('Finish').click()
	cy.get('[alt="Viet FC HN"]').should('be.visible')
  })
  
})