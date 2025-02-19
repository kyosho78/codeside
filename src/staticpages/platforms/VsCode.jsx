import React from "react";

const VsCode = () => {

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 pt-20 md:pt-32 lg:pt-20">
      <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">
        <h1 className="text-3xl text-center font-bold mb-4">VS Code</h1>

        <p className="text-lg leading-loose">
        Visual Studio Code (VS Code) on Microsoftin kehittämä kevyt mutta tehokas avoimen lähdekoodin koodieditori. 
        Se on suunniteltu erityisesti kehittäjille, jotka tarvitsevat nopean ja mukautettavan kehitysympäristön. 
        VS Code tukee laajaa valikoimaa ohjelmointikieliä ja teknologioita, kuten JavaScript, Python, C++, Java ja C#.
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
                <strong>Kevyt ja nopea kehitysympäristö: </strong><br /> 
                -VS Code on kevyt ja käynnistyy nopeasti.<br />
                -Sopii erinomaisesti pienten ja suurten projektien kehitykseen.
              </li>
              <li>
                <strong>Laajennettavuus ja muokattavuus: </strong> <br />
                -Tukee laajennuksia (extensions), jotka laajentavat toiminnallisuuksia.<br />
                -Laajennuskaupasta voi asentaa lisäosia esimerkiksi Python, Docker ja Prettier.
              </li>
              <li>
                <strong>Sisäänrakennetut kehitystyökalut: </strong><br /> 
                -IntelliSense tarjoaa koodin täydennyksen, synaksin korostuksen ja virheiden tarkistuksen.<br />
                -Integroitu debuggeri mahdollistaa koodin ajon ja virheiden korjauksen.
              </li>
              <li>
                <strong>Versionhallinta: </strong><br /> 
                -Sisäänrakennettu tuki Git-versionhallinnalle.<br />
                -Mahdollisuus hallita haaroja (branches) ja seurata muutoksia suoraan editorista.
              </li>
              <li>
                <strong>Monialustaisuus: </strong><br /> 
                -Sisäänrakennettu tuki Git-versionhallinnalle.<br />
                -Esimerkiksi ReSharper ja Live Share.
              </li>
              <li>
                <strong>Monikielinen kehitys: </strong><br /> 
                -Toimii Windows, macOS ja Linux -ympäristöissä.<br />
                -Mahdollistaa samojen projektien työstämisen eri alustoilla.
              </li>
              <li>
                <strong>Integroitu terminaali: </strong><br /> 
                -Sisäänrakennettu komentorivi ( terminal) helpottaa komentojen suorittamista ilman editorin vaihtamista.
              </li>
              <li>
                <strong>Tehokas virheenkorjaus ja testaus: </strong><br /> 
                -Laajennusten avulla voidaan integroida erilaisia testaus- ja virheenkorjaustyökaluja.<br />
                -Tukee automaattista testien ajamista ja virheraportointia.
              </li>
            </ul>
          </div>

          {/* Right Side: Vinkki Box */}
          <div className="bg-gray-700 p-6 rounded-lg border border-gray-500 shadow-lg w-full md:w-1/3 mt-6 md:mt-0 md:ml-6 text-center">
            <h2 className="text-xl font-semibold">Info!</h2>
            <a
              href="https://www.youtube.com/watch?v=cu_ykIfBprI"
              target="_blank"
              rel="noreferrer noopener"
              className="block mt-4 underline text-blue-500"
            >
              Miten asennat VS Coden. (Video)
            </a>
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="block mt-2 underline text-blue-500"
            >
              Siirry VS Coden kotisivuille
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VsCode;
