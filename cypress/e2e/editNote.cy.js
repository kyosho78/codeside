describe("Muistiinpanon muokkaus", () => {
    it("should allow user to edit existing note", () => {
      cy.visit("https://blue-wave-09f686903.6.azurestaticapps.net/login");
  
      cy.get('input[name="email"]').type("teppo@gmail.com");
      cy.get('input[name="password"]').type("testaaja");
      cy.get('button').contains("Kirjaudu").should("be.visible").click();
  
      cy.contains("a", "Muistiinpanot").should("be.visible").click();
      cy.url({ timeout: 10000 }).should("include", "/notes");
  
      //  Etsi olemassa oleva muistiinpano
      cy.contains("td", "Testi create", { timeout: 10000 })
        .parent("tr")
        .within(() => {
          cy.contains("Muokkaa").should("be.visible").click();
        });
  
      cy.url().should("include", "/edit-note");
  
      //  Muokkaa kentät
      cy.get("#editHeader", { timeout: 10000 }).should("be.visible").clear().type("Muokattu muistiinpano");
      cy.get("#editContent", { timeout: 10000 }).should("be.visible").clear().type("Päivitetty sisältö");
  
      cy.contains("💾 Tallenna").should("be.visible").click();
  
      cy.url().should("include", "/notes");
      cy.contains("Muokattu muistiinpano").should("exist");
      cy.contains("Päivitetty sisältö").should("exist");
  
      // Logout
      cy.contains("Logout").should("exist").click({ force: true });
      cy.url().should("include", "/");
    });
  });
  