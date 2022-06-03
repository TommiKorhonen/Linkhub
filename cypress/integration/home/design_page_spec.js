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
    // it("should be able to change bgColor", () => {
    //   cy.contains(/Background color:/i)
    //     .invoke("val", "#ff0000")
    //     .trigger("input");
    //   cy.get('[data-cy="themeSubmit"]').click();
    //   cy.get('[data-cy="previewBg"]').should(
    //     "have.css",
    //     "background-color",
    //     "rgb(73, 242, 118)"
    //   );
    // });
  });
  describe("Button style", () => {
    it("should be able to change buttonStyle", () => {
      cy.get('[data-cy="borderXl"]').click();
      cy.get('[data-cy="borderLg"]').click();
      cy.get('[data-cy="noBorder"]').click();
      cy.get('[data-cy="linkItem"]').should("have.css", "border-radius", "0px");
    });
  });
});
