const Form_URL = '/reputation#sign-in'

describe('Forms', () => {
  before(() => {
    cy.visit(Form_URL)
    cy.url().should('eq', Cypress.config().baseUrl + Form_URL)
  })
  
  it('able to select Manchester City and add it to favourites', () => {
	cy.get('.MuiInputBase-input').eq(1).type('zujutest+automation@gmail.com')
	cy.get('.MuiInputBase-input').eq(2).type('TestAuto123')
	cy.get('.MuiButton-root').eq(1).click()
	cy.get('.MuiInputBase-input').should('have.attr', 'placeholder', 'Search for a team')
	cy.get('.MuiInputBase-input').eq(0).type('Manchester City')
	cy.get('.MuiInputBase-input').should('have.value', 'Manchester City')
	cy.get('.MuiBox-root').contains('Manchester City').click()
	cy.get('.MuiButtonBase-root').then(($body) => {
		if ($body.text().includes('Favourite')) {
			cy.get('.MuiButtonBase-root').contains('Favourite').click()
		}
	})
  })
})