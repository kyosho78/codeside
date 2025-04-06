
    describe("Notes Page", () => {
    it("should allow user to add and edit a note", () => {
      cy.visit("http://localhost:5173/login");
  
      cy.get('input[name="email"]').type("teppo@gmail.com");
      cy.get('input[name="password"]').type("testaaja");
      cy.get('button').contains("Kirjaudu").should("be.visible").click();
  
      // 🕐 Odotetaan kunnes Logout-painike ilmestyy (eli käyttäjä on kirjautunut)
      cy.contains("Logout", { timeout: 10000 }).should("be.visible");
  
      // Nyt on turvallista klikata Muistiinpanot
      cy.contains("a", "Muistiinpanot").should("be.visible").click();
      cy.url().should("include", "/notes");
  
      // 🔹 Odotetaan että sivu on varmasti valmis
      cy.contains("Uusi muistiinpano", { timeout: 10000 }).should("be.visible").click();

      cy.get("#noteHeader").type("Testimuistiinpano");
      cy.get("#noteContent").type("Tämä on toinen testisisältö e2e-testistä.");
      cy.contains("💾 Tallenna")
      .should("be.visible")
      .click();
    
    // 🔄 Odotetaan varmasti että navigointi onnistui JA sisältö ladattu
    cy.url({ timeout: 10000 }).should("include", "/notes");
    cy.get("table").should("exist"); 
    cy.contains("Uusi muistiinpano", { timeout: 10000 }).should("be.visible");
    cy.get("input#searchInput", { timeout: 10000 }).should("exist");
    cy.contains("Testimuistiinpano", { timeout: 10000 }).should("be.visible");
    

  
      // 🔧 Suoraan muokkaamaan
      cy.contains("td", "Testimuistiinpano")
      .parent("tr")
      .within(() => {
        cy.contains("Muokkaa").should("be.visible").click(); // ✅ Odottaa että nappi on oikeasti näkyvissä
      });
  
      // 🕐 Odotetaan että navigointi ehtii tapahtua
      cy.url({ timeout: 10000 }).should("include", "/edit-note");
      cy.get("#editHeader", { timeout: 10000 }).should("be.visible");
      cy.get("#editHeader", { timeout: 8000 }).should("be.visible").clear().type("Muokattu muistiinpano");
      cy.get("#editContent").clear().type("Päivitetty sisältö e2e-testissä");
      cy.contains("💾 Tallenna")
      .should("be.visible") // ✅ Varmistaa että elementti on näkyvissä
      .click();              // 🔹 Klikkaa vasta sitten
        // 🔹 Lisätään lyhyt odotus ennen seuraavaa tarkistusta
      cy.wait(500);
      cy.url().should("include", "/notes");
      cy.contains("Muokattu muistiinpano").should("exist");
      cy.contains("Päivitetty sisältö e2e-testissä").should("exist");
    });
  });
  
  
  
  