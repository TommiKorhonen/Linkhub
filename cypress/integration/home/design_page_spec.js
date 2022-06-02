/// <reference types="Cypress"/>
beforeEach(() => {
  cy.viewport(1920, 1080);
  cy.login();
  cy.visit("http://localhost:3000/design");
});
afterEach(() => {
  cy.logout();
});

describe("Design page", () => {
  it("should be able to change bio", () => {
    cy.contains(/bio/i).find("textarea").type("perkele");
    cy.get('[data-cy="submitProfile"]').click();
    cy.get('[data-cy="bio"]').should("contain", "perkele");
  });
  describe("Theme", () => {
    it("should be able to change bgColor", () => {
      cy.contains(/Background color:/i)
        .find("input")
        .click()
        .invoke("val", "#ff0000")
        .trigger("change")
        .blur();

      //   cy.get('[data-cy="themeSubmit"]').click();
    });
  });
});
