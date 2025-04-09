describe("Muistiinpanon muokkaus", () => {
    it("should allow user to edit existing note", () => {
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

      
      //  Etsi olemassa oleva muistiinpano
      cy.contains("td", "Testi create", { timeout: 10000 })
      .parent("tr")
      .within(() => {
        cy.contains("Muokkaa").should("be.visible").click();
      });
      
      cy.url().should("include", "/edit-note");

      cy.intercept("PUT", "**/api/Notes/*").as("editNote");
  
      //  Muokkaa kentät
      cy.get("#editHeader", { timeout: 10000 }).should("be.visible").clear().type("Muokattu muistiinpano");
      cy.get("#editContent", { timeout: 10000 }).should("be.visible").clear().type("Päivitetty sisältö");
  
      cy.contains("💾 Tallenna").should("be.visible").click();

      cy.wait("@editNote");
  
      cy.url().should("include", "/notes");
  
    });
  });
  