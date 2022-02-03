describe("Home page", () => {
  beforeEach(() => {
    cy.viewport("iphone-x");
    cy.visit("/");
  });

  it("Should search for Border Collie and show a single result", () => {
    cy.get("#search-breed").type("Border Collie");
    cy.get("[data-cy=border-collie-preview-card]").contains("Border Collie");
  });

  it("Should search for 'xxx' and show an error message because it's not a valid dog breed", () => {
    cy.get("#search-breed").type("xxx");
    cy.get("[data-cy=breeds-not-found-message]").should("be.visible");
  });
});
