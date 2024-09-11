describe('Sort Toggle', () => {
  it('should toggle between sorting by Name and ID', () => {
    // Visit the homepage
    cy.visit('http://localhost:5173/')

    // Wait for the worlds to load
    cy.get('.grid').should('exist')

    // Verify initial sorting by ID (assuming IDs are numeric and in ascending order)
    cy.get('.grid div')
      .first()
      .contains(/\bID\b/)

    // Toggle the sort button to sort by name
    cy.get('.sort-toggle span').contains('Sort by ID').click()

    // Verify the sorting changed to name
    cy.get('.sort-toggle span').should('contain', 'Sort by Name')

    // Check if the list now contains items sorted by name
    cy.get('.grid div')
      .first()
      .contains(/\bName\b/)
  })
})
