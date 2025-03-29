/*
  Written by: Valter Backström
*/
import React from "react";

const Git = () => {

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 pt-20 md:pt-32 lg:pt-20">
      <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">
        <h1 className="text-3xl text-center font-bold mb-4">Git/GitHub</h1>

        <p className="text-lg leading-loose">
        <strong>Git</strong> on avoimen lähdekoodin hajautettu versionhallintajärjestelmä, jonka kehitti Linus Torvalds vuonna 2005. 
        <strong> GitHub</strong> on Git-versionhallintaan perustuva verkkopalvelu, joka tarjoaa projektien jakamiseen ja yhteistyöhön tarkoitettuja työkaluja.
        </p>


        {/* Flex container to align Keskeiset ominaisuudet and Info */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-6 px-4 sm:px-6 md:px-10">
          {/* Left Side: Yleisiä käyttökohteita */}
          <div className="md:w-2/3 w-full">
            <h2 className="text-2xl font-semibold text-center md:text-left">
            Keskeiset ominaisuudet:
            </h2>
            <ul className="text-lg leading-relaxed text-center md:text-left mt-4 space-y-2">
              <li>
                <strong>Versionhallinta ja hajautettu kehitys: </strong><br /> 
                -Seuraa koodin muutoksia ja mahdollistaa paluun aikaisempiin versioihin.<br />
                -Tukee haaroja (branches) ja yhdistämisiä (merges) tehokasta kehitystä varten.<br />
                -Jokaisella kehittäjällä on oma paikallinen kopio koodista, mikä mahdollistaa offline-työskentelyn.
              </li>
              <li>
                <strong>Projektien hallinta ja yhteistyö: </strong> <br />
                -Mahdollistaa koodin tallentamisen pilveen ja jakamisen muiden kanssa.<br />
                -Pull Request -toiminto mahdollistaa muutosten tarkastelun ja yhdistämisen projektiin.<br />
                -Issues ja Projects auttavat tehtävien hallinnassa.
              </li>
              <li>
                <strong>Integraatiot ja automaatio (CI/CD): </strong><br /> 
                -Integroituu helposti jatkuvan integraation ja toimituksen (CI/CD) työkaluihin, kuten GitHub Actions.<br />
                -Automatisoi testauksen, rakentamisen ja julkaisun.
              </li>
              <li>
                <strong>Dokumentointi: </strong><br /> 
                -README.md-tiedosto esittelee projektin ja sen käyttötarkoituksen.<br />
                -Wiki mahdollistaa laajemman dokumentaation kirjoittamisen.
              </li>
              <li>
                <strong>Turvallisuus ja yksityisyys: </strong><br /> 
                -Haavoittuvuuksien tarkistus ja varoitukset parantavat turvallisuutta.<br />
                -Tukee sekä yksityisiä (private) että julkisia (public) repositorioita.
              </li>
              <li>
                <strong>Laaja yhteisö ja open source: </strong><br /> 
                -Miljoonat kehittäjät ympäri maailmaa osallistuvat ja jakavat projekteja.<br />
                -Erinomainen alusta avoimen lähdekoodin kehitykseen.
              </li>
            </ul>
          </div>

          {/* Right Side: Vinkki Box */}
          <div className="bg-gray-700 p-6 rounded-lg border border-gray-500 shadow-lg w-full md:w-1/3 mt-6 md:mt-0 md:ml-6 text-center">
            <h2 className="text-xl font-semibold">Info!</h2>
            <a
              href="https://git-scm.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="block mt-4 underline text-blue-500"
            >
              Siirry Gitin kotisivuille
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="block mt-2 underline text-blue-500"
            >
              Siirry GitHubin kotisivuille
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Git;
