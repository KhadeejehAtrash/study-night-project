describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('goes to Card Sets', () => {
    cy.get('#cardSetPage').click({ force: true });

    cy.contains(/card sets/i).should('exist');
  });

  it('goes to About', () => {
    cy.get('#aboutPage').click({ force: true });

    cy.contains(/about/i).should('exist');
  });

  it('goes to Home', () => {
    cy.get('#homePage').click({ force: true });

    cy.contains(/home/i).should('exist');
  });
});