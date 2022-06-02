/// <reference types="Cypress"/>
beforeEach(() => {
  cy.viewport(1920, 1080);
  cy.login();
});

describe("Login page", () => {
  it("should be able to login", () => {
    cy.visit("http://localhost:3000/dashboard");
  });
  //   afterEach(() => {
  //     cy.logout();
  //   });
});
