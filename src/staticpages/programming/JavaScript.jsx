/*
  Written by: Valter Backström
*/
import React from "react";
import { Link } from "react-router-dom";

const JavaScript = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 pt-20 md:pt-32 lg:pt-20">
      <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">
        <div className="mb-4">
          <Link
            to="/threads/3"
            onClick={scrollToTop}
            className="bg-white !text-black text-sm px-3 py-1 rounded-md hover:bg-[#56afe6] transition duration-200"
          >
            JavaScript Forum
          </Link>
          <h1 className="text-3xl font-bold text-center mb-4">JavaScript</h1>
        </div>

        <p className="text-lg leading-loose">
        JavaScript on monipuolinen ja suosittu ohjelmointikieli, joka mahdollistaa verkkosivujen dynaamisen toiminnallisuuden.
        Sitä käytetään sekä selainympäristöissä että palvelinpuolella (Node.js). 
        JavaScript on yksi kolmesta peruskielistä, joiden avulla voit luoda modernia verkkosivua (HTML ja CSS kanssa).
        </p>

        <div className="px-4 sm:px-6 md:px-10">
          <h2 className="text-2xl font-semibold mt-6 text-center md:text-left">
            Keskeiset ominaisuudet:
          </h2>
          <ul className="text-lg leading-relaxed text-center md:text-left mt-4 space-y-2">
            <li>
              <strong>Dynaaminen ja tapahtumapohjainen:</strong> Voit luoda interaktiivisia verkkosivustoja,
                kuten lomakkeiden validointeja, animaatioita ja reaaliaikaista dataa.
            </li>
            <li>
              <strong>Selainten natiivikieli:</strong> JavaScript toimii kaikissa moderneissa selaimissa ilman lisäosia.
            </li>
            <li>
              <strong>Täydentää HTML:ää ja CSS:ää:</strong> Mahdollistaa verkkosivujen logiikan ja käyttäjävuorovaikutuksen.
            </li>
            <li>
              <strong>Monipuolinen ekosysteemi:</strong> Laaja valikoima kirjastoja ja kehyksiä, kuten React, Vue ja Angular, tehostaa kehitystyötä.
            </li>
            <li>
              <strong>Nopea suorituskyky:</strong> Nykyiset JavaScript-moottorit, kuten Google V8, tekevät siitä erittäin nopean.
            </li>
            <li>
              <strong>Asynkroninen ohjelmointi: </strong> Tuki Promises, async/await ja Callbacks-toiminnoille helpottaa rinnakkaisia operaatioita.
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
                <strong>Web-sovellukset: </strong>  Interaktiiviset käyttöliittymät ja verkkopalvelut.
              </li>
              <li>
                <strong>Palvelinpuolen kehitys: </strong> Node.js mahdollistaa skaalautuvien palveluiden luomisen.
              </li>
              <li>
                <strong>Mobiilisovellukset:</strong> Hyödyntää alustoja, kuten React Native ja Ionic.
              </li>
              <li>
                <strong>Pelit ja visualisoinnit: </strong> Pelinkehitys (esim. Phaser) ja datavisualisointi (esim. D3.js).
              </li>
              <li>
                <Link to="/javascript-condition"onClick={scrollToTop}>Esimerkki ehtolausekkeesta</Link>
              </li>
              <li>
                <Link to="/javascript-loop"onClick={scrollToTop}>Esimerkki silmukasta</Link>
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
              href="https://www.w3schools.com/js/default.asp"
              target="_blank"
              rel="noreferrer noopener"
              className="block mt-4 underline text-blue-500"
            >
              Siirry W3Schoolsin JavaScript-oppaaseen
            </a>
            <a
              href="https://javascript.info/"
              target="_blank"
              rel="noreferrer noopener"
              className="block mt-2 underline text-blue-500"
            >
              Siirry JavaScriptin kotisivuille
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaScript;
