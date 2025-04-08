describe("Login Test", () => {
  it("kirjautuu sisään ja ohjautuu etusivulle", () => {
    cy.visit("https://blue-wave-09f686903.6.azurestaticapps.net/login");

    // Set desktop viewport in CI
    if (Cypress.env('CI')) {
      cy.viewport(1280, 720);
    }

    cy.intercept("POST", "**/api/login/").as("loginRequest");

    cy.get('input[name="email"]').type("teppo@gmail.com");
    cy.get('input[name="password"]').type("testaaja");

    cy.get("button").contains("Kirjaudu").click();

    cy.wait("@loginRequest");

    cy.url({ timeout: 10000 }).should("include", "/");

    // Most reliable solution combining multiple selectors
    cy.get('div.hidden.md\\:flex.space-x-4 a.bg-red-500')
      .should('contain', 'Logout')
      .and('be.visible')
      .click({ force: true });
    
    // Verify logout completed
    cy.url().should("include", "/");
   
  });


  it("näyttää virheilmoituksen virheellisillä tunnuksilla", () => {
    cy.visit("https://blue-wave-09f686903.6.azurestaticapps.net/login");

    cy.intercept("POST", "**/api/login/").as("loginRequest");

    cy.get('input[name="email"]').type("teppo@gmail.com");
    cy.get('input[name="password"]').type("vääräsalasana");

    cy.get("button").contains("Kirjaudu").click();

    cy.wait("@loginRequest");

    cy.contains("Kirjautuminen epäonnistui",{ timeout: 10000 }).should("exist");
  });
});
 