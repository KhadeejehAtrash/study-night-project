it('adds a flashcard successfully', () => {
  cy.visit('http://localhost:1234');

  cy.get('#cardSetPage').click();

  cy.get('[data-cy="toggle_form"]').click();

  cy.get('[data-cy="set_form"]').within(() => {
    cy.get('input').first().type('Biology Set');
    cy.get('input[type="submit"]').click();
  });

  cy.contains('Biology Set').click();

  cy.get('#termInput').type('DNA');
  cy.get('#definitionInput').type('Genetic material');

  cy.get('form').last().submit();

  cy.contains('DNA');
});