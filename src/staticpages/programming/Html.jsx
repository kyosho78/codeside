/*
  Written by: Valter Backström
*/
import React from "react";
import { Link } from "react-router-dom";

const Html = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 pt-20 md:pt-32 lg:pt-20">
      <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">
        <div className="mb-4">
          <Link
            to="/forum-html"
            onClick={scrollToTop}
            className="bg-[#56afe6] !text-white text-sm px-3 py-1 rounded-md hover:bg-blue-600 transition duration-200"
          >
            HTML Forum
          </Link>
          <h1 className="text-3xl font-bold text-center mb-4">HTML</h1>
        </div>

        <p className="text-lg leading-loose">
          HTML (HyperText Markup Language) on verkkosivujen perusta, joka
          määrittää sivujen rakenteen ja sisällön. Se on suunniteltu
          helppokäyttöiseksi ja universaaliksi standardiksi.
        </p>

        <div className="px-4 sm:px-6 md:px-10">
          <h2 className="text-2xl font-semibold mt-6 text-center md:text-left">
            Keskeiset ominaisuudet:
          </h2>
          <ul className="text-lg leading-relaxed text-center md:text-left mt-4 space-y-2">
            <li>
              <strong>Rakennekieli:</strong> HTML käyttää tunnisteita (tags)
              sisällön, kuten otsikoiden, tekstin, kuvien ja linkkien,
              määrittämiseen.
            </li>
            <li>
              <strong>Yhteistyö CSS:n ja JavaScriptin kanssa: </strong> HTML
              määrittää rakenteen, CSS ulkoasun ja JavaScript toiminnallisuuden.
            </li>
            <li>
              <strong>Helposti opittava:</strong> Sopii aloittelijoille
              yksinkertaisen syntaksinsa ansiosta.
            </li>
            <li>
              <strong>Responssiivisuus:</strong> Yhdessä CSS:n kanssa
              mahdollistaa verkkosivujen mukautumisen eri laitteille.
            </li>
            <li>
              <strong>Semanttisuus: </strong> Moderni HTML tarjoaa semanttisia
              tunnisteita, kuten
              <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code> ja{" "}
              <code>&lt;article&gt;</code>, jotka parantavat verkkosivujen
              saavutettavuutta ja hakukoneoptimointia.
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
                <strong>Verkkosivujen perusta:</strong> Kaikki verkkosivut tarvitsevat HTML:n rakenteensa määrittämiseen.
              </li>
              <li>
                <strong>Formit ja käyttäjäsyötteet:</strong> Lomakkeiden luominen käyttäjän syötteiden keräämiseen.
              </li>
              <li>
                <strong>Median esitys:</strong> Kuvien, videoiden ja äänen integrointi verkkosivuille.
              </li>
              <li>
                <strong>Hyperlinkit:</strong> Navigointi verkkosivujen välillä linkkien avulla.
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
              href="https://www.w3schools.com/html/default.asp"
              target="_blank"
              rel="noreferrer noopener"
              className="block mt-4 underline text-blue-500"
            >
              Siirry W3Schoolsin HTML-oppaaseen
            </a>
            <a
              href="https://html.spec.whatwg.org/multipage/"
              target="_blank"
              rel="noreferrer noopener"
              className="block mt-2 underline text-blue-500"
            >
              Siirry HTML;än kotisivuille
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Html;
