describe("Login Test", () => {
  it("kirjautuu sisään ja ohjautuu etusivulle", () => {
    cy.visit("https://blue-wave-09f686903.6.azurestaticapps.net/login");

    cy.intercept("POST", "**/api/login/").as("loginRequest");

    cy.get('input[name="email"]').type("teppo@gmail.com");
    cy.get('input[name="password"]').type("testaaja");

    cy.get("button").contains("Kirjaudu").click();

    cy.wait("@loginRequest");

    cy.url({ timeout: 10000 }).should("include", "/");

    cy.contains("Logout", { timeout: 10000 }).should("be.visible").click({ force: true });
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
 