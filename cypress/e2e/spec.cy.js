describe('NY Times Most Popular Articles', () => {
  afterEach(() => {
    cy.wait(5000); // Add a delay of 5 seconds after each test to avoid rate limiting
  });

  it('loads and displays articles', () => {
    cy.visit('/');
    cy.contains('NY Times Most Popular Articles');
    cy.get('.list-group-item').should('have.length.gt', 1);
  });

  it('clicks on a couple of articles and checks details', () => {
    cy.visit('/');

    // Click on the first article
    cy.get('.list-group-item').first().click();
    cy.wait(5000);
    cy.get('.card-title').should('exist');
    
  });
});
