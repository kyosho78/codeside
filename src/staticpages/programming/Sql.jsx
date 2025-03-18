import React from "react";
import { Link } from "react-router-dom";

const Sql = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 pt-20 md:pt-32 lg:pt-20">
      <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">
        <div className="mb-4">
          <Link
            to="/forum-sql"
            onClick={scrollToTop}
            className="bg-[#56afe6] !text-white text-sm px-3 py-1 rounded-md hover:bg-blue-600 transition duration-200"
          >
            SQL Forum
          </Link>
          <h1 className="text-3xl font-bold text-center mb-4">SQL</h1>
        </div>

        <p className="text-lg leading-loose">
        SQL (Structured Query Language) on standardoitu ohjelmointikieli, jota käytetään tietokantojen hallintaan ja tietojen käsittelyyn. 
        SQL mahdollistaa tietojen tallentamisen, hakemisen, päivittämisen ja poistamisen tietokannoista.
        </p>

        <div className="px-4 sm:px-6 md:px-10">
          <h2 className="text-2xl font-semibold mt-6 text-center md:text-left">
            Keskeiset ominaisuudet:
          </h2>
          <ul className="text-lg leading-relaxed text-center md:text-left mt-4 space-y-2">
            <li>
              <strong>Tietojen käsittely:</strong>  SQL tarjoaa tehokkaat työkalut tietojen hakemiseen (SELECT), lisäämiseen (INSERT), päivittämiseen (UPDATE) ja poistamiseen (DELETE).
            </li>
            <li>
              <strong>MTietokantojen hallinta:</strong>  Mahdollisuus luoda ja muokata tietokannan rakenteita (CREATE, ALTER, DROP).
            </li>
            <li>
              <strong>Standardoitu kieli:</strong> SQL on ANSI- ja ISO-standardi, mutta tietokantakohtaiset laajennukset, kuten T-SQL (Microsoft SQL Server) ja PL/pgSQL (PostgreSQL), laajentavat sen toiminnallisuutta.
            </li>
            <li>
              <strong>Tietojen yhdistäminen:</strong> SQL mahdollistaa tietojen yhdistämisen useista tauluista (JOIN-operaattorit).
            </li>
            <li>
              <strong>Ehdollisuus:</strong> Tuki loogisille ehdoille (WHERE, HAVING) ja tietojen ryhmittelylle (GROUP BY).
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
                <strong>Raportointi ja analytiikka:  </strong>  Tietokannassa olevien tietojen analysointi ja raporttien luominen.
              </li>
              <li>
                <strong>Sovellusten tukeminen:</strong> Käytetään taustajärjestelmien tiedonhallinnassa web-, mobiili- ja työpöytäsovelluksissa.
              </li>
              <li>
                <strong>Tietojen hallinta:</strong>  Suuret yritykset, kuten pankit ja verkkokaupat, käyttävät SQL:ää kriittisten tietojen hallintaan.
              </li>
              <li>
                <strong>Tietojen integrointi:</strong> Mahdollistaa tiedonvaihdon eri järjestelmien välillä.
              </li>
              <li>
                <Link to="/sql-condition"onClick={scrollToTop}>Esimerkki ehtolausekkeesta</Link>
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
              href="https://www.w3schools.com/sql/default.asp"
              target="_blank"
              rel="noreferrer noopener"
              className="block mt-4 underline text-blue-500"
            >
              Siirry W3Schoolsin Sql-oppaaseen
            </a>
            <a
              href="https://learn.microsoft.com/en-us/sql/?view=sql-server-ver16/"
              target="_blank"
              rel="noreferrer noopener"
              className="block mt-2 underline text-blue-500"
            >
              Siirry Sql-oppaaseen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sql;
