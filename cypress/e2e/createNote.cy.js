describe("Create Note Test", () => {
  it("kirjautuu sisään ja luo uuden muistiinpanon", () => {
    cy.visit("https://blue-wave-09f686903.6.azurestaticapps.net/login");

    cy.intercept("POST", "**/api/login/").as("loginRequest");
    // Kirjautuminen
    cy.get('input[name="email"]').type("teppo@gmail.com");
    cy.get('input[name="password"]').type("testaaja");
    cy.get("button").contains("Kirjaudu").should("be.visible").click();

    cy.wait("@loginRequest");

    
    cy.intercept("GET", "**/api/Notes/").as("getNotes");

    
    
    // Siirrytään muistiinpanoihin
    cy.contains("a", "Muistiinpanot").should("be.visible").click();
    cy.url({ timeout: 10000 }).should("include", "/notes");
    
    cy.wait("@getNotes");
 

    cy.intercept("POST", "**/api/Notes/").as("createNote");

    // Uuden muistiinpanon lisäys
    cy.contains("Uusi muistiinpano", { timeout: 10000 }).should("be.visible").click();

    cy.get("#noteHeader").type("Testi create");
    cy.get("#noteContent").type("Tämä on create-testi");

    // Tallennus
    cy.contains("💾 Tallenna").should("be.visible").click();

    cy.wait("@createNote");

    // Tarkistetaan että palattiin ja muistiinpano näkyy
    cy.url().should("include", "/notes");
    cy.contains("Testi create", { timeout: 10000 }).should("exist");
  
    // cy.contains("Logout").should("be.visible").click({ force: true });;
    // cy.url().should("include", "/");
  });
});


