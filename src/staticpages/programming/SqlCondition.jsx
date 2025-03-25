/*
  Written by: Valter Backström
*/
import React from "react";
import { Link } from "react-router-dom";

const SqlCondition = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 pt-20 md:pt-32 lg:pt-20">
      <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">Sql Lausekkeet</h1>

        <p className="text-lg text-center mb-6">
          SQL mahdollistaa ehtojen käytön, jotka vaikuttavat kyselyiden ja ohjelmointilogiikan suoritukseen. Tässä esitellään kolme tapaa käsitellä ehtoja SQL:ssä.
        </p>

        {/* IF-lauseke */}
        <h2 className="text-2xl font-semibold mt-6">IF-lause (Stored Procedures)</h2>
        <p className="mt-2 mb-4">
          <strong>IF-lauseita</strong> käytetään pääasiassa **stored procedureiden** sisällä SQL Serverissä ja muissa kehittyneissä tietokantajärjestelmissä. Se mahdollistaa yksinkertaiset loogiset tarkistukset.
        </p>
        <pre className="bg-gray-900 p-4 rounded text-left text-sm overflow-x-auto">
          <code>
            {`DECLARE @ika INT;
SET @ika = 20;

IF @ika < 18
    PRINT 'Olet alaikäinen';
ELSE IF @ika BETWEEN 18 AND 64
    PRINT 'Olet aikuinen';
ELSE
    PRINT 'Olet eläkeläinen';`}
          </code>
        </pre>

        {/* CASE-lauseke */}
        <h2 className="text-2xl font-semibold mt-6">CASE-lause (Suositeltu SQL-kyselyissä)</h2>
        <p className="mt-2 mb-4">
          <strong>CASE-lause</strong> on monikäyttöisin tapa suorittaa ehtoja SQL-kyselyissä. Se on erityisen hyödyllinen, kun halutaan luokitella tietoa tulostauluissa.
        </p>
        <pre className="bg-gray-900 p-4 rounded text-left text-sm overflow-x-auto">
          <code>
            {`SELECT 
    nimi, 
    ika,
    CASE 
        WHEN ika < 18 THEN 'Alaikäinen'
        WHEN ika BETWEEN 18 AND 64 THEN 'Aikuinen'
        ELSE 'Eläkeläinen'
    END AS Luokka
FROM kayttajat;`}
          </code>
        </pre>

        {/* TRY-CATCH-lauseke */}
        <h2 className="text-2xl font-semibold mt-6">TRY-CATCH (Virheiden käsittely)</h2>
        <p className="mt-2 mb-4">
          <strong>TRY-CATCH</strong> auttaa hallitsemaan virhetilanteita, kuten virheellisiä syötteitä tai tietokantaoperaatioita.
        </p>
        <pre className="bg-gray-900 p-4 rounded text-left text-sm overflow-x-auto">
          <code>
            {`BEGIN TRY
    DECLARE @ika INT;
    SET @ika = CAST('testi' AS INT);  -- Tämä aiheuttaa virheen
    PRINT 'Ikä on kelvollinen';
END TRY
BEGIN CATCH
    PRINT 'Virhe: Anna kelvollinen numero!';
    PRINT ERROR_MESSAGE();
END CATCH;`}
          </code>
        </pre>

          {/* Back to main Page */}
          <div className="mt-6 text-center">
            <Link
              to="/sql"
              className="text-blue-400 underline hover:text-blue-500 mr-4"
              onClick={scrollToTop}
            >
              ⬅ Takaisin Sql pääsivulle
            </Link>
            </div>
      </div>
    </div>
  );
};

export default SqlCondition;
