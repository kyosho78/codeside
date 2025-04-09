describe("Delete Note Test", () => {
    it("should find and delete an edited note", () => {
      cy.visit("https://blue-wave-09f686903.6.azurestaticapps.net/login");

      cy.intercept("POST", "**/api/login/").as("loginRequest");
  
      cy.get('input[name="email"]').type("teppo@gmail.com");
      cy.get('input[name="password"]').type("testaaja");
      cy.get('button').contains("Kirjaudu").should("be.visible").click();

      cy.wait("@loginRequest");
  
      cy.intercept("GET", "**/api/Notes/").as("getNotes");

      cy.contains("a", "Muistiinpanot").should("be.visible").click();
      cy.url({ timeout: 10000 }).should("include", "/notes");
  
      cy.wait("@getNotes");

      cy.contains("Muokattu muistiinpano", { timeout: 10000 }).should("exist");
  
      //  Poistetaan muistiinpano
      cy.contains("td", "Muokattu muistiinpano")
        .parent("tr")
        .within(() => {
          cy.intercept("DELETE", "**/api/Notes/*").as("deleteNote");
          cy.contains("Poista").should("be.visible").click();
        });

        cy.wait("@deleteNote");
   
      // Varmista että muistiinpano on poistunut
      cy.contains("Muokattu muistiinpano").should("not.exist");
  
    });
  });
  