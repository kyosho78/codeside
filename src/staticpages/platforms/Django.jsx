/*
  Written by: Valter Backström
*/
import React from "react";

const Django = () => {

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 pt-20 md:pt-32 lg:pt-20">
      <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">
        <h1 className="text-3xl text-center font-bold mb-4">Django</h1>

        <p className="text-lg leading-loose">
        Django on avoimen lähdekoodin korkean tason Python-web-kehys, 
        joka mahdollistaa nopean ja turvallisen verkkosovellusten kehittämisen. 
        Se on suunniteltu helpottamaan monimutkaisten ja skaalautuvien sovellusten rakentamista.
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
                <strong>Nopea kehitys: </strong><br /> 
                -Django tarjoaa valmiita komponentteja, kuten autentikoinnin ja hallintapaneelin, jotka nopeuttavat kehitystä<br />
                -Sisäänrakennettu kehityspalvelin ja automaattiset tietokantamigraatiot tukevat nopeaa prototypointia.
              </li>
              <li>
                <strong>Turvallisuus: </strong> <br />
                -Django suojaa yleisiltä verkkohyökkäyksiltä, kuten SQL-injektioilta, XSS- ja CSRF-hyökkäyksiltä.<br />
                -Sisäänrakennettu käyttäjänhallinta ja autentikointi parantavat tietoturvaa.
              </li>
              <li>
                <strong>Skaalautuvuus ja suorituskyky: </strong><br /> 
                -Sopii sekä pieniin että suuriin sovelluksiin.<br />
                -Optimoitu tehokkaaseen resurssien käyttöön ja sovelluksen skaalaukseen.
              </li>
              <li>
                <strong>Selkeä ja modulaarinen rakenne: </strong><br /> 
                -Perustuu MTV-arkkitehtuuriin (Model-Template-View), joka erottaa liiketoimintalogiikan, esityksen ja tietokantatoiminnot.<br />
                -Mahdollistaa sovellusten modulaarisen rakentamisen ja ylläpidon.
              </li>
              <li>
                <strong> Laaja ekosysteemi ja yhteisö: </strong><br /> 
                -Avoimen lähdekoodin projekti, jota tukee aktiivinen yhteisö.<br />
                -Laajennettavissa pakettien ja kirjastojen avulla.
              </li>
              <li>
                <strong>Integraatio pilvipalveluihin: </strong><br /> 
                -Saatavilla runsaasti kolmannen osapuolen kirjastoja ja laajennuksia.<br />
                -Aktiivinen yhteisö ja kattava dokumentaatio tukevat kehittäjiä.
              </li>
              <li>
                <strong>Integroitu hallintapaneeli: </strong><br /> 
                -Automaattisesti luotu admin-käyttöliittymä mahdollistaa tietokannan hallinnan ilman lisäkoodia.<br />
                -Mahdollistaa mallien (models) helpon hallinnan ja tietojen muokkauksen.
              </li>
            </ul>
          </div>

          {/* Right Side: Vinkki Box */}
          <div className="bg-gray-700 p-6 rounded-lg border border-gray-500 shadow-lg w-full md:w-1/3 mt-6 md:mt-0 md:ml-6 text-center">
            <h2 className="text-xl font-semibold">Info!</h2>
            <a
              href="https://www.djangoproject.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="block mt-4 underline text-blue-500"
            >
              Siirry Djangon kotisivuille
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Django;
