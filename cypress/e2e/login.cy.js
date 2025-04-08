// describe("Login Page", () => {
//     it("should render login form", () => {
//       cy.visit("https://blue-wave-09f686903.6.azurestaticapps.net/login");

//       cy.intercept("POST", "**/api/login/").as("loginRequest");

//       cy.get("input[name='email']").should("exist");
//       cy.get("input[name='password']").should("exist");
//       cy.contains("Kirjaudu sisään").should("exist");
//     });

//     it("should log in with valid credentials", () => {
//         cy.visit("https://blue-wave-09f686903.6.azurestaticapps.net/login");
    
//         // Täytetään lomake
//         cy.get("input[name='email']").type("teppo@gmail.com");
//         cy.get("input[name='password']").type("testaaja");
    
//         // Klikataan Kirjaudu
//         cy.get("button").contains("Kirjaudu").click();
    
//         // Tarkistetaan että login onnistuu (esim. näkyy ilmoitus tai ohjataan etusivulle)
//         cy.contains("Kirjautuminen onnistui").should("exist");

//         // Odotetaan siirtymistä etusivulle
//            cy.url().should("include", "/");

//         // Klikataan logout (säädä tämä valitsimen mukaan)
//            cy.contains("Logout").click(); // 

//            //Tarkistetaan että käyttäjä ohjataan etusivulle
//            cy.url().should("include", "/");
    
//         // Vai vaihtoehtoisesti tarkista, että ohjataan etusivulle
//         // cy.url().should("eq", "http://localhost:5173/");
//       });

//       it("should show error on invalid credentials", () => {
//         cy.visit("https://blue-wave-09f686903.6.azurestaticapps.net/login");
      
//         cy.get("input[name='email']").type("teppo@gmail.com");
//         cy.get("input[name='password']").type("vääräsalasana");
      
//         cy.get("button").contains("Kirjaudu").click();
//          // Lisätään pieni viive virheilmoituksen odottamiseen

//         cy.wait(500); // odota 1 sekunti
//         // Odotetaan virheilmoitusta
//         cy.contains("Kirjautuminen epäonnistui. Tarkista sähköposti ja salasana.").should("exist");
//       });
//   });

describe("Login Test", () => {
  it("kirjautuu sisään ja ohjautuu etusivulle", () => {
    cy.visit("https://blue-wave-09f686903.6.azurestaticapps.net/login");

    cy.intercept("POST", "**/api/login/").as("loginRequest");

    cy.get('input[name="email"]').type("teppo@gmail.com");
    cy.get('input[name="password"]').type("testaaja");

    cy.get("button").contains("Kirjaudu").click();

    cy.wait("@loginRequest");

    cy.url({ timeout: 10000 }).should("include", "/");

    cy.contains("Logout").should("be.visible").click({ force: true });
    cy.url().should("include", "/");
  });

  it("näyttää virheilmoituksen virheellisillä tunnuksilla", () => {
    cy.visit("https://blue-wave-09f686903.6.azurestaticapps.net/login");

    cy.intercept("POST", "**/api/login/").as("loginRequest");

    cy.get('input[name="email"]').type("teppo@gmail.com");
    cy.get('input[name="password"]').type("vääräsalasana");

    cy.get("button").contains("Kirjaudu").click();

    cy.wait("@loginRequest");

    cy.contains("Kirjautuminen epäonnistui").should("exist");
  });
});
 