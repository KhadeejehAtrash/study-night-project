describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("goes to Card Sets", () => {
    cy.contains("Card Sets").click();
  });

  it("goes to About", () => {
    cy.contains("About").click();
  });

  it("goes to Home", () => {
    cy.contains("Home").click();
  });
});