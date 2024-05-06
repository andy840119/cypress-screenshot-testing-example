describe('Component screenshot', () => {
  it("test login page", () => {
    // visit the login page.
    cy.visit("");

    // hide the django panel.
    cy.get(".djdt-hidden").invoke('attr', 'style', 'display: none')

    // see https://github.com/simonsmith/cypress-image-snapshot how to change detect option.
    cy.matchImageSnapshot();
  });
});

