describe("Delete Note Test", () => {
    it("should find and delete an edited note", () => {
      cy.visit("https://blue-wave-09f686903.6.azurestaticapps.net/login");
  
      cy.get('input[name="email"]').type("teppo@gmail.com");
      cy.get('input[name="password"]').type("testaaja");
      cy.get('button').contains("Kirjaudu").should("be.visible").click();
  
      cy.contains("a", "Muistiinpanot").should("be.visible").click();
      cy.url({ timeout: 10000 }).should("include", "/notes");
  
      cy.get("table", { timeout: 10000 }).should("exist");
      cy.get("input#searchInput", { timeout: 10000 }).should("exist");
  
      cy.contains("Muokattu muistiinpano", { timeout: 10000 }).should("exist");
  
      //  Poistetaan muistiinpano
      cy.contains("td", "Muokattu muistiinpano")
        .parent("tr")
        .within(() => {
          cy.contains("Poista").should("be.visible").click();
        });
  
      // Vahvista alert (poisto)
      cy.on("window:confirm", () => true);
  
      // Varmista että muistiinpano on poistunut
      cy.contains("Muokattu muistiinpano").should("not.exist");
  
      
      cy.contains("Logout").should("exist").click({ force: true });
      cy.url().should("include", "/");
    });
  });
  