describe("Create Note Test", () => {
  it("kirjautuu sisään ja luo uuden muistiinpanon", () => {
    cy.visit("https://blue-wave-09f686903.6.azurestaticapps.net/login");

    // Kirjautuminen
    cy.get('input[name="email"]').type("teppo@gmail.com");
    cy.get('input[name="password"]').type("testaaja");
    cy.get('button').contains("Kirjaudu").click();

    // Odotetaan että ollaan sisällä
    //cy.contains("Logout", { timeout: 10000 }).should("be.visible");

    // Siirrytään muistiinpanoihin
    cy.contains("Muistiinpanot").click();
    cy.url().should("include", "/notes");

    // Uuden muistiinpanon lisäys
    cy.contains("Uusi muistiinpano").click();
    cy.get("#noteHeader").type("Testi create");
    cy.get("#noteContent").type("Tämä on create-testi");

    // Tallennus
    cy.contains("💾 Tallenna").click();

    // Tarkistetaan että palattiin ja muistiinpano näkyy
    cy.url().should("include", "/notes");
    cy.contains("Testi create", { timeout: 10000 }).should("exist");
  
    //cy.contains("Logout").should("be.visible").click({ force: true });;
    cy.url().should("include", "/");
  });
});


