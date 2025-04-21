/*
  Written by: Valter Backström
*/
import React from "react";
import { Link } from "react-router-dom";

const Python = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 pt-20 md:pt-32 lg:pt-20">
      <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">
        <div className="mb-4">
          <Link
            to="/threads/2"
            onClick={scrollToTop}
            className="bg-white !text-black text-sm px-3 py-1 rounded-md hover:bg-[#56afe6] transition duration-200"
          >
            Python Forum
          </Link>
          <h1 className="text-3xl font-bold text-center mb-4">Python</h1>
        </div>

        <p className="text-lg leading-loose">
        Python on yleiskäyttöinen, korkean tason ohjelmointikieli, 
        joka tunnetaan selkeästä syntaksistaan ja laajasta käyttökohteidensa kirjosta. 
        Se soveltuu niin aloittelijoille kuin kokeneille kehittäjille.
        </p>

        <div className="px-4 sm:px-6 md:px-10">
          <h2 className="text-2xl font-semibold mt-6 text-center md:text-left">
            Keskeiset ominaisuudet:
          </h2>
          <ul className="text-lg leading-relaxed text-center md:text-left mt-4 space-y-2">
            <li>
              <strong>Selkeä syntaksi:</strong>  Helppolukuinen ja helposti opittava, mikä tekee siitä suositun ensimmäisenä ohjelmointikielenä.
            </li>
            <li>
              <strong>Monipuolisuus:</strong> Soveltuu moniin tarkoituksiin, kuten web-kehitykseen, datatieteeseen, tekoälyyn, automaatioon ja pelinkehitykseen.
            </li>
            <li>
              <strong>Laaja kirjastoekosysteemi:</strong> Sisältää tuhansia valmiita kirjastoja ja moduuleja, kuten NumPy (datatiede), Django (web-kehitys) ja TensorFlow (tekoäly).
            </li>
            <li>
              <strong>Tulkattu kieli:</strong> Python-koodi ajetaan suoraan tulkilla ilman erillistä kääntämistä, mikä nopeuttaa kehitystä.
            </li>
            <li>
              <strong>Ristiinplatformisuus:</strong> Toimii useimmissa käyttöjärjestelmissä, kuten Windows, macOS ja Linux.
            </li>
            <li>
              <strong>Yhteisö ja tuki:</strong>  Pythonilla on valtava ja aktiivinen kehittäjäyhteisö, joka tarjoaa jatkuvaa tukea ja resursseja.
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
                <strong>Web-kehitys: </strong>  Kehykset kuten Django ja Flask.
              </li>
              <li>
                <strong>Datatiede ja analytiikka:</strong> Työkalut kuten Pandas, NumPy ja Matplotlib.
              </li>
              <li>
                <strong>Koneoppiminen ja tekoäly:</strong> Kirjastot kuten TensorFlow ja PyTorch.
              </li>
              <li>
                <strong>Skriptit ja automaatio:</strong> Päivittäisten tehtävien automatisointi.
              </li>
              <li>
                <strong>Sovellukset ja pelit: </strong> Graafiset käyttöliittymät (Tkinter) ja pelinkehitys (Pygame).
              </li>
              <li>
                <Link to="/python-condition"onClick={scrollToTop}>Esimerkki ehtolausekkeesta</Link>
              </li>
              <li>
                <Link to="/python-loop"onClick={scrollToTop}>Esimerkki silmukasta</Link>
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
              href="https://www.w3schools.com/python/default.asp"
              target="_blank"
              rel="noreferrer noopener"
              className="block mt-4 underline text-blue-500"
            >
              Siirry W3Schoolsin Python-oppaaseen
            </a>
            <a
              href="https://www.python.org/"
              target="_blank"
              rel="noreferrer noopener"
              className="block mt-2 underline text-blue-500"
            >
              Siirry Pythonin kotisivuille
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Python;
