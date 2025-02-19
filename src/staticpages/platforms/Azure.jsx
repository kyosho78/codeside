import React from "react";

const Azure = () => {

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 pt-20 md:pt-32 lg:pt-20">
      <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">
        <h1 className="text-3xl text-center font-bold mb-4">Azure</h1>

        <p className="text-lg leading-loose">
        Microsoft Azure on Microsoftin tarjoama laaja ja skaalautuva pilvipalvelualusta, 
        joka mahdollistaa sovellusten ja palveluiden rakentamisen, 
        käyttöönoton ja hallinnan maailmanlaajuisesti. 
        Azure tukee monia ohjelmointikieliä, kehyksiä ja käyttöjärjestelmiä.
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
                <strong>Laaja palveluvalikoima: </strong><br /> 
                -Tarjoaa yli 200 pilvipalvelua, kuten laskentatehoa (Virtual Machines, App Services), 
                tietokantapalveluita (Azure SQL, Cosmos DB) ja tekoälyratkaisuja (Azure AI).<br />
                -Soveltuu erilaisten sovellusten kehittämiseen ja hallintaan.
              </li>
              <li>
                <strong>Skaalautuvuus ja joustavuus: </strong> <br />
                -Skaalautuu tarpeen mukaan pienistä projekteista suuriin yritystason ratkaisuihin.<br />
                -Mahdollistaa resurssien automaattisen skaalauksen käytön mukaan.
              </li>
              <li>
                <strong>Integraatio ja kehitystyökalut: </strong><br /> 
                -Integroituu saumattomasti kehitystyökaluihin, kuten Visual Studio, GitHub ja DevOps-ratkaisuihin.<br />
                -Tukee CI/CD-prosesseja ja DevOps-käytäntöjä.
              </li>
              <li>
                <strong>Tietoturva ja vaatimustenmukaisuus: </strong><br /> 
                -Korkean tason tietoturvaominaisuudet, kuten Azure Security Center ja Key Vault.<br />
                -Noudattaa globaaleja tietoturvastandardeja ja -säädöksiä.
              </li>
              <li>
                <strong>Hybridipilvi ja monialustatuki: </strong><br /> 
                -Tukee hybridipilviympäristöjä Azure Arc -palvelun avulla.<br />
                -Mahdollistaa saumattoman integraation paikallisten ja pilvipalveluiden välillä.
              </li>
              <li>
                <strong>Analytiikka ja tekoäly: </strong><br /> 
                -Tarjoaa kehittyneitä analytiikkaratkaisuja, kuten Azure Synapse Analytics ja Power BI.<br />
                -Sisältää tekoälypalveluita, kuten Azure Machine Learning ja Cognitive Services.
              </li>
            </ul>
          </div>

          {/* Right Side: Vinkki Box */}
          <div className="bg-gray-700 p-6 rounded-lg border border-gray-500 shadow-lg w-full md:w-1/3 mt-6 md:mt-0 md:ml-6 text-center">
            <h2 className="text-xl font-semibold">Info!</h2>
            <a
              href="https://azure.microsoft.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="block mt-4 underline text-blue-500"
            >
              Siirry Azuren kotisivuille
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Azure;
