import React from "react";

const Css = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 pt-20 md:pt-32 lg:pt-20">
      <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">
        <h1 className="text-3xl text-center font-bold mb-4">CSS</h1>

        <p className="text-lg leading-loose">
        CSS (Cascading Style Sheets) on tyylikieli, jolla määritetään verkkosivujen ulkoasu ja layout. 
        Se täydentää HTML:ää erottamalla sisällön rakenteen ja visuaalisen ilmeen toisistaan.
        </p>

        <div className="px-4 sm:px-6 md:px-10">
          <h2 className="text-2xl font-semibold mt-6 text-center md:text-left">
            Keskeiset ominaisuudet:
          </h2>
          <ul className="text-lg leading-relaxed text-center md:text-left mt-4 space-y-2">
            <li>
              <strong>Muotoilu: </strong>  Voit hallita värejä, fontteja, marginaaleja, reunuksia ja monia muita elementtejä.
            </li>
            <li>
              <strong>Responssiivisuus: </strong> CSS mahdollistaa sivustojen mukautumisen eri laitteille ja näytöille (media queries).
            </li>
            <li>
              <strong>Erotus sisällöstä:</strong> HTML määrittää rakenteen ja CSS vastaa ulkoasusta, mikä helpottaa sivujen ylläpitoa.
            </li>
            <li>
              <strong>Kerroksellisuus: </strong> Tyylit voivat periä ominaisuuksia ja ne voidaan määritellä useilla tasoilla: inline, inner ja  external.
            </li>
            <li>
              <strong>Animaatiot ja siirtymät:</strong> Mahdollistaa monimutkaiset animaatiot ja interaktiiviset efektit ilman JavaScriptiä.
            </li>
            <li>
              <strong>Grid ja Flexbox:</strong>  Modernit layout-työkalut, jotka tarjoavat tehokkaita tapoja hallita elementtien sijoittelua.
            </li>
          </ul>
        </div>

        {/* Flex container to align Yleiset käyttöjohteet and Vinkki */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-6 px-4 sm:px-6 md:px-10">
          {/* Left Side: Yleisiä käyttökohteita */}
          <div className="md:w-2/3 w-full">
            <h2 className="text-2xl font-semibold text-center md:text-left">
              Yleisiä käyttökohteita:
            </h2>
            <ul className="text-lg leading-relaxed text-center md:text-left mt-4 space-y-2">
              <li>
                <strong>Verkkosivujen ulkoasu: </strong>  Värit, fontit ja typografia.
              </li>
              <li>
                <strong>Layout: </strong> Elementtien sijoittelu ja rakenteen hallinta.
              </li>
              <li>
                <strong>Interaktiot: </strong> Hover-efektit ja käyttäjän vuorovaikutuksen visuaaliset palautteet.
              </li>
              <li>
                <strong>Responsiivisuus: </strong> Sovittaminen mobiililaitteille ja eri näytön ko'oille.
              </li>
              <li>
                <strong>Animaatiot: </strong> Liike-efektit ja siirtymien parantaminen.
              </li>
            </ul>
          </div>

          {/* Right Side: Vinkki Box */}
          <div className="bg-gray-700 p-6 rounded-lg border border-gray-500 shadow-lg w-full md:w-1/3 mt-6 md:mt-0 md:ml-6 text-center">
            <h2 className="text-xl font-semibold">Vinkki!</h2>
            <p className="text-md leading-loose mt-4">
              Kannattaa rekisteröityä esim. W3Schoolsin sivuilla. Kirjautuneena
              käyttäjänä voit helposti palata siihen mihin jäit edellisellä
              kerralla.
              <br /> Rekisteröityminen on ilmaista.
            </p>
            <a
              href="https://www.w3schools.com/css/default.asp"
              target="_blank"
              rel="noreferrer noopener"
              className="block mt-4 underline text-blue-500"
            >
              Siirry W3Schoolsin CSS-oppaaseen
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noreferrer noopener"
              className="block mt-2 underline text-blue-500"
            >
              Siirry CSSn kotisivuille
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Css;
