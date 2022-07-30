describe("My First Test", () => {
  it("click first box", () => {
    cy.visit("/");

    cy.contains("click box one").click();

    cy.contains("first box");
  });

  it("click second box", () => {
    cy.visit("/");

    cy.contains("click box two").click();

    cy.contains("second box");
  });
});
