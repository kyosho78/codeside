/*
  Written by: Valter Backström
*/
import React from "react";
import { Link } from "react-router-dom";

const Csharp = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 pt-20 md:pt-32 lg:pt-20">
      <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">
        <div className="mb-4">
          <Link
            to="/forum-csharp"
            onClick={scrollToTop}
            className="bg-white !text-black text-sm px-3 py-1 rounded-md hover:bg-[#56afe6] transition duration-200"
          >
            C# Forum
          </Link>
          <h1 className="text-3xl font-bold text-center mb-4">C# Ohjelmointi</h1>
        </div>

        <p className="text-lg leading-loose">
          C# on monipuolinen ja nykyaikainen ohjelmointikieli. Se on Microsoftin
          kehittämä, olio-ohjelmointiin perustuva korkean tason kieli, jota
          käytetään erityisesti .NET-alustalla. Se yhdistää C++:n tehokkuuden ja
          Java-kielen helppokäyttöisyyden.
          <br />
          C# on erinomainen valinta sekä aloittelijoille että kokeneille
          kehittäjille sen monipuolisuuden, yhteisön tuen ja jatkuvan kehityksen
          ansiosta.
        </p>

        <div className="px-4 sm:px-6 md:px-10">
          <h2 className="text-2xl font-semibold mt-6 text-center md:text-left">
            Keskeiset ominaisuudet:
          </h2>
          <ul className="text-lg leading-relaxed text-center md:text-left mt-4 space-y-2">
            <li>
              <strong>Olio-ohjelmointi (OOP):</strong> Tukee periytymistä,
              kapselointia, polymorfismia ja rajapintoja.
            </li>
            <li>
              <strong>Moderni syntaksi:</strong> Selkeä ja helposti opittava
              syntaksi, joka vähentää virheitä ja tehostaa koodausta.
            </li>
            <li>
              <strong>Roskankeruu (Garbage Collection):</strong> Automaattinen
              muistinhallinta, joka vähentää muistivuotoja.
            </li>
            <li>
              <strong>Monialustatuki:</strong> Toimii Windows-, macOS- ja
              Linux-järjestelmissä .NET Core- ja .NET 5/6/7-versioilla.
            </li>
            <li>
              <Link to="/async-programming" onClick={scrollToTop} className="text-blue-400 underline hover:text-blue-500">
                Asynkroninen ohjelmointi
              </Link>
              : Sisäänrakennettu tuki async/await -toiminnoille tehokkaaseen
              rinnakkaisuuteen.
            </li>
            <li>
              <strong>Laaja kirjastotuki:</strong> Valtava valikoima valmiita
              kirjastoja eri tarpeisiin (esim. tietokannat, verkkosovellukset).
            </li>
            <li>
              <strong>Turvallisuus:</strong> Tyyppiturvallinen kieli, joka estää
              yleiset ohjelmointivirheet.
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
                <strong>Verkkosovellukset:</strong> ASP.NET Core
              </li>
              <li>
                <strong>Työpöytäsovellukset:</strong> WPF, WinForms
              </li>
              <li>
                <strong>Mobiilisovellukset:</strong> Xamarin, MAUI
              </li>
              <li>
                <strong>Pilvipalvelut:</strong> Azure-integraatio
              </li>
              <li>
                <strong>Pelinkehitys:</strong> Unity-pelimoottori
              </li>
              <p></p>
              <li>
                <Link to="/csharp-condition"onClick={scrollToTop}>Esimerkki ehtolausekkeesta</Link>
              </li>
              <li>
                <Link to="/csharp-loop"onClick={scrollToTop}>Esimerkki silmukasta</Link>
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
              href="https://www.w3schools.com/cs/"
              target="_blank"
              rel="noreferrer noopener"
              className="block mt-4 underline text-blue-500"
            >
              Siirry W3Schoolsin C#-oppaaseen
            </a>
            <a
              href="https://learn.microsoft.com/en-us/dotnet/csharp/"
              target="_blank"
              rel="noreferrer noopener"
              className="block mt-2 underline text-blue-500"
            >
              Siirry Microsoftin C#-oppaaseen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Csharp;
