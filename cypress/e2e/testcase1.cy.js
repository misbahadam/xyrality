describe('World List Page', () => {
  it('should load the homepage and display the world list', () => {
    // Visit the homepage
    cy.visit('http://localhost:5173/')

    // Check if the loading text is initially visible
    cy.contains('Loading...').should('be.visible')

    // Wait for the worlds to load and check if the list is visible
    cy.get('.grid').should('exist')

    // Check if there are world items displayed in the grid
    cy.get('.grid div').should('have.length.greaterThan', 0)

    // Check if each world item has a name and flag
    cy.get('.grid div')
      .first()
      .within(() => {
        cy.get('img').should('exist')
        cy.get('h3').should('exist').and('not.be.empty')
      })
  })
})
