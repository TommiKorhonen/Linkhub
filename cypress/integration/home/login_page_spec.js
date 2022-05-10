/// <reference types="Cypress"/>
const { cleanup } = require("@testing-library/react");
const authUser = require("../../fixtures/example.json");
beforeEach(() => {
  cy.viewport(1920, 1080);
});

describe("The Home Page", () => {
  it("should be able to login", () => {
    const { email, password } = authUser;
    cy.visit("http://localhost:3000/login");
    // cy.login(email, password);
    // cy.contains("Links");
    // cy.logout();
    // cy.contains("Links").should("not.exist");
  });
});
