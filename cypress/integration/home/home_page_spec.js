/// <reference types="Cypress"/>
const { cleanup } = require("@testing-library/react");

beforeEach(() => {
  cy.visit("http://localhost:3000");
  cy.viewport(1920, 1080);
});
afterEach(() => {
  cleanup();
});

describe("The Home Page", () => {
  it("should be able to navigate to login", () => {
    cy.contains(/login/i).click();
    cy.url().should("include", "/login");
  });
  it("should be able to navigate to signup", () => {
    cy.contains(/sign up/i).click();
    cy.url().should("include", "/signup");
  });
});
