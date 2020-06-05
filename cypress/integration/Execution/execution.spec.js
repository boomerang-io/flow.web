describe("Execution", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000/local/activity/5eb2c4085a92d80001a16d87/execution/5ec51eca5a92d80001a2005d");
  });

  it("Redirects to activity view", function () {
    cy.get("section a").contains("Activity", { timeout: 5000 }).click();
    cy.url().should("include", "activity");
    cy.url().should("not.include", "execution");
  });

  it("Redirects to editor view", function () {
    cy.get("p").contains("Edit Workflow", { timeout: 5000 }).parent("button").click();
    cy.url().should("include", "editor");
  });

  it("View task properties", function () {
    cy.findAllByText("View Properties", { timeout: 5000 }).eq(0).click();
    cy.get(".bx--tabs__nav-link").contains("JSON").click();
    cy.get(".bx--tabs__nav-link").contains("Table").click();
  });
});
