describe('Create Set Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');

    cy.get('#cardSetPage').click({ force: true });
  });

  it('shows an error when submitting an empty set name', () => {
    cy.get('[data-cy="toggle_form"]').click({ force: true });

    cy.get('[data-cy="set_form"]').should('be.visible');

    cy.get('[data-cy="set_form"]').within(() => {
      cy.get('input[type="submit"]').click({ force: true });
    });

    cy.contains(/required|empty|enter/i)
      .should('be.visible');
  });
});