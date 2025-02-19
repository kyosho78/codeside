import React from "react";

const VisualStudio = () => {

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 pt-20 md:pt-32 lg:pt-20">
      <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">
        <h1 className="text-3xl text-center font-bold mb-4">Visual Studio</h1>

        <p className="text-lg leading-loose">
        Visual Studio on Microsoftin kehittämä tehokas ja monipuolinen integroitu kehitysympäristö (IDE), 
        joka on suunniteltu erityisesti ohjelmistokehittäjille. 
        Se tukee laajaa valikoimaa ohjelmointikieliä ja teknologioita, 
        kuten C#, Python, JavaScript, ASP.NET, ja C++.
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
                <strong>Projektien ja ratkaisujen hallinta: </strong><br /> 
                -Sovellukset rakennetaan ratkaisuista (solutions), 
                jotka sisältävät yhden tai useamman projektin (projects).
              </li>
              <li>
                <strong>Editorin tehokkaat työkalut: </strong> <br />
                -Älykäs koodin täydennys (IntelliSense) auttaa kirjoittamaan koodia nopeammin ja virheettömämmin.<br />
                -Virheiden korjaus ja korostus ilmoittavat mahdollisista ongelmista jo kirjoitusvaiheessa.
              </li>
              <li>
                <strong>Debuggaus ja testaus: </strong><br /> 
                -Sisäänrakennetut debuggeri-työkalut mahdollistavat koodin ajon ja virheiden paikantamisen askel askeleelta.<br />
                -Tukee yksikkötestejä ja automaattitestausta.
              </li>
              <li>
                <strong>Versionhallinta: </strong><br /> 
                -Sisäänrakennettu tuki Git-versionhallinnalle.<br />
                -Mahdollisuus hallita haaroja (branches) ja seurata muutoksia suoraan editorista.
              </li>
              <li>
                <strong> Laajennettavuus: </strong><br /> 
                -Tukee laajennuksia (extensions) ja lisäosia, jotka parantavat käyttökokemusta.<br />
                -Esimerkiksi ReSharper ja Live Share.
              </li>
              <li>
                <strong>Monikielinen kehitys: </strong><br /> 
                -Mahdollisuus työskennellä useilla kielillä yhdessä ratkaisussa.<br />
                -Erityisen hyödyllinen esimerkiksi frontend/backend-sovelluksissa.
              </li>
            </ul>
          </div>

          {/* Right Side: Vinkki Box */}
          <div className="bg-gray-700 p-6 rounded-lg border border-gray-500 shadow-lg w-full md:w-1/3 mt-6 md:mt-0 md:ml-6 text-center">
            <h2 className="text-xl font-semibold">Info!</h2>
            <a
              href="https://www.youtube.com/watch?v=3AghgkZEU2w"
              target="_blank"
              rel="noreferrer noopener"
              className="block mt-4 underline text-blue-500"
            >
              Miten asennat Visual Studion. (Video)
            </a>
            <a
              href="https://visualstudio.microsoft.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="block mt-2 underline text-blue-500"
            >
              Siirry Visual Studion kotisivuille
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualStudio;
