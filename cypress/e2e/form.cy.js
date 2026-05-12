describe("Forms", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("tests forms", () => {
    cy.get("form").should("exist");
  });
});