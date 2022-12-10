const Form_URL = '/#sign-in'

describe('Forms', () => {
  before(() => {
    cy.visit(Form_URL)

    cy.url()
      .should('eq', Cypress.config().baseUrl + Form_URL)
  })

  it('should display the Autocomplete title', () => {
    cy.get('.MuiTypography-h2').should('contain', 'Welcome to ZUJU KICKOFF')
  })
  
  it('should display proper labels for input fields', () => {
	cy.get('.MuiInputLabel-root').eq(0).should('contain', 'Email Address')
	cy.get('.MuiInputLabel-root').eq(1).should('contain', 'Password')
  })
  
  it('should allow input of email address and password and login', () => {
	cy.get('.MuiInputBase-input').eq(0).type('zujutest+automation@gmail.com')
	cy.get('.MuiInputBase-input').eq(0).should('have.value', 'zujutest+automation@gmail.com')
	cy.get('.MuiInputBase-input').eq(1).type('TestAuto123')
	cy.get('.MuiInputBase-input').eq(1).should('have.value', 'TestAuto123')
	cy.get('.MuiButton-root').eq(1).should('contain', 'Log In')
	cy.get('.MuiButton-root').eq(1).click()
  })
})
