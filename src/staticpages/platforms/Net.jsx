import React from "react";

const Net = () => {

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 pt-20 md:pt-32 lg:pt-20">
      <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">
        <h1 className="text-3xl text-center font-bold mb-4">.NET</h1>

        <p className="text-lg leading-loose">
        .NET on Microsoftin kehittämä avoimen lähdekoodin ohjelmistokehys, 
        joka tukee monia ohjelmointikieliä ja alustoja. 
        Se mahdollistaa erilaisten sovellusten kehittämisen, 
        kuten verkkosovellusten, työpöytäsovellusten, mobiilisovellusten ja pilvipohjaisten palvelujen. 
        .NET koostuu useista komponenteista, kuten .NET Core, .NET Framework ja Xamarin.
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
                <strong>Monialustaisuus: </strong><br /> 
                -Tukee kehitystä Windows, macOS ja Linux -ympäristöissä.<br />
                -Mahdollistaa sovellusten ajamisen useilla alustoilla ilman merkittäviä muutoksia koodiin.
              </li>
              <li>
                <strong>Laaja kielituki: </strong> <br />
                -Tukee useita ohjelmointikieliä, kuten C#, F#, ja Visual Basic.<br />
                -Mahdollistaa kielirajat ylittävän kehityksen.
              </li>
              <li>
                <strong>Tehokas suorituskyky ja skaalautuvuus: </strong><br /> 
                -Suunniteltu korkean suorituskyvyn sovelluksiin.<br />
                -Skaalautuu helposti pienistä projekteista suuriin yritystason sovelluksiin.
              </li>
              <li>
                <strong>Modernit kehitystyökalut: </strong><br /> 
                -Integroituu tehokkaasti kehitysympäristöihin kuten Visual Studio ja Visual Studio Code.<br />
                -Sisältää työkaluja, kuten NuGet-pakettienhallinnan ja Entity Frameworkin tietokantaoperaatioihin.
              </li>
              <li>
                <strong>Laajennettavuus ja avoin lähdekoodi: </strong><br /> 
                -Avoimen lähdekoodin projekti, jota tukee aktiivinen yhteisö.<br />
                -Laajennettavissa pakettien ja kirjastojen avulla.
              </li>
              <li>
                <strong>Integraatio pilvipalveluihin: </strong><br /> 
                -Integroituu saumattomasti Microsoftin pilvipalveluihin, kuten Azure.<br />
                -Mahdollistaa skaalautuvien ja turvallisten pilvipohjaisten sovellusten kehittämisen.
              </li>
            </ul>
          </div>

          {/* Right Side: Vinkki Box */}
          <div className="bg-gray-700 p-6 rounded-lg border border-gray-500 shadow-lg w-full md:w-1/3 mt-6 md:mt-0 md:ml-6 text-center">
            <h2 className="text-xl font-semibold">Info!</h2>
            <a
              href="https://dotnet.microsoft.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="block mt-4 underline text-blue-500"
            >
              Siirry .NETin kotisivuille
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Net;
