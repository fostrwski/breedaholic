describe("Index page", () => {
  beforeEach(() => {
    cy.viewport("iphone-x");
    cy.visit("/");
  });

  it("Should search for 'border collie' and show only one preview card with Border Collie", () => {
    cy.get("[data-cy=breeds-search-by-name]").type("border collie");
    cy.get("[data-cy=border-collie-preview-card]").should("exist");
    cy.get("[data-cy=affenpinscher-preview-card]").should("not.exist");
  });

  it("Should select 'Toy' filtering category and search for 'border collie', results in displaying an error message because this breed does not exist on category 'Toy'", () => {
    cy.get("[data-cy=breeds-filter-popover-toggle]").click();
    cy.get("button").contains("Toy").click();
    cy.get("[data-cy=breeds-filter-popover-toggle]").click();

    cy.get("[data-cy=breeds-search-by-name]").type("border collie");

    cy.get("[data-cy=border-collie-preview-card]").should("not.exist");
  });

  it("Should search for 'xxx' and show an error message because it's not a valid breed's name", () => {
    cy.get("[data-cy=breeds-search-by-name]").type("xxx");
    cy.get("[data-cy=breeds-not-found-message]").should("exist");
  });
});

export {};
