/*
  Written by: Valter Backström
*/
import React from "react";
import { Link } from "react-router-dom";

const JavaScriptCondition = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 pt-20 md:pt-32 lg:pt-20">
      <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">JavaScript Lausekkeet</h1>

        <p className="text-lg text-center md:text-left mb-6">
          JavaScriptin lausekkeet mahdollistavat ohjelman loogisen ohjauksen. Tässä on esimerkkejä if-lauseista, switch-case-
          rakenteesta ja try-catch-poikkeuskäsittelystä.
        </p>

        {/* If Statement */}
        <h2 className="text-2xl font-semibold mt-6">If-lause</h2>
        <p className="mt-2 mb-4">
          <strong>If-else</strong> lauseita käytetään, kun haluat tehdä päätöksiä ohjelmassasi käyttäjän antaman syötteen tai 
          muun muuttujan perusteella.
        </p>
        <pre className="bg-gray-900 p-4 rounded text-left text-sm overflow-x-auto">
          <code>
            {`// Pyydä käyttäjää syöttämään ikä

const ika = parseInt(prompt("Syötä ikäsi:"));

// Tarkista käyttäjän ikä ja tulosta vastaava luokitus

if (ika >= 1 && ika <= 12) {
    console.log("Olet lapsi.");
} else if (ika >= 13 && ika <= 17) {
    console.log("Olet nuori.");
} else if (ika >= 18 && ika <= 64) {
    console.log("Olet aikuinen.");
} else if (ika > 64) {
    console.log("Olet eläkeläinen.");
} else {
    console.log("Ikä ei voi olla nolla tai negatiivinen.");
}`}
          </code>
        </pre>

        {/* Switch-Case */}
        <h2 className="text-2xl font-semibold mt-6">Switch Case</h2>
        <p className="mt-2 mb-4">
          <strong>Switch-case</strong> on hyödyllinen vaihtoehto if-else-rakenteelle, erityisesti kun käsitellään monia eri
          vaihtoehtoja.
        </p>
        <pre className="bg-gray-900 p-4 rounded text-left text-sm overflow-x-auto">
          <code>
            {`// Pyydä käyttäjää syöttämään ikä

const ika = parseInt(prompt("Syötä ikäsi:"));

// Tarkista iän perusteella luokitus

switch (true) {
    case (ika >= 1 && ika <= 12):
        console.log("Olet lapsi.");
        break;
    case (ika >= 13 && ika <= 17):
        console.log("Olet nuori.");
        break;
    case (ika >= 18 && ika <= 64):
        console.log("Olet aikuinen.");
        break;
    case (ika > 64):
        console.log("Olet eläkeläinen.");
        break;
    default:
        console.log("Ikä ei voi olla nolla tai negatiivinen.");
        break;
}`}
          </code>
        </pre>

        {/* Try-Catch */}
        <h2 className="text-2xl font-semibold mt-6">Try Catch</h2>
        <p className="mt-2 mb-4">
          <strong>Try-Catch</strong> lauseita käytetään virheiden hallintaan. Tämä esimerkki estää virhetilanteita, 
          jos käyttäjä syöttää väärän arvon.
        </p>
        <pre className="bg-gray-900 p-4 rounded text-left text-sm overflow-x-auto">
          <code>
            {`try {

    // Pyydä käyttäjää syöttämään ikä

    const ika = parseInt(prompt("Syötä ikäsi:"));

    // Tarkista, onko syöte kelvollinen

    if (isNaN(ika)) {
        throw new Error("Virhe: Anna kelvollinen kokonaisluku.");
    }

    // Tarkista iän perusteella luokitus
    if (ika >= 1 && ika <= 12) {
        console.log("Olet lapsi.");
    } else if (ika >= 13 && ika <= 17) {
        console.log("Olet nuori.");
    } else if (ika >= 18 && ika <= 64) {
        console.log("Olet aikuinen.");
    } else if (ika > 64) {
        console.log("Olet eläkeläinen.");
    } else {
        console.log("Ikä ei voi olla nolla tai negatiivinen.");
    }
} catch (error) {
    console.error(error.message);
}`}
          </code>
        </pre>

          {/* Back to C# Page */}
          <div className="mt-6 text-center">
            <Link
              to="/javascript"
              className="text-blue-400 underline hover:text-blue-500 mr-4"
              onClick={scrollToTop}
            >
              ⬅ Takaisin JavaScript pääsivulle
            </Link>
  
            <Link
              to="/javascript-loop"
              className="text-blue-400 underline hover:text-blue-500 ml-4"
              onClick={scrollToTop}
            >
              Silmukat ➡
            </Link>
            </div>
      </div>
    </div>
  );
};

export default JavaScriptCondition;
