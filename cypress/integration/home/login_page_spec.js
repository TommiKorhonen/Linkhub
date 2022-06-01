/// <reference types="Cypress"/>
const { cleanup } = require("@testing-library/react");
const authUser = require("../../fixtures/example.json");
beforeEach(() => {
  cy.viewport(1920, 1080);
  cy.login();
});

describe("Login page", () => {
  it("should be able to login", () => {
    cy.visit("http://localhost:3000/login");
    cy.contains(/logout/i);
  });
  afterEach(() => {
    cy.logout();
  });
});
