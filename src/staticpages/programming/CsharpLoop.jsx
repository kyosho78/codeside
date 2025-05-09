/*
  Written by: Valter Backström
*/
import React from "react";
import { Link } from "react-router-dom";

const CsharpLoop = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 pt-20 md:pt-32 lg:pt-20">
      <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">C# Silmukat</h1>

        <p className="text-lg text-center md:text-left mb-6">
         C#:n silmukat mahdollistavat koodin toistamisen tehokkaasti ilman tarpeetonta toistoa. 
         Silmukoita käytetään esimerkiksi tietorakenteiden läpikäyntiin, toistuvien laskentojen suorittamiseen ja 
         ehtojen perusteella toistuvan koodin hallintaan. 
         Tässä ovat yleisimmät silmukat C#:ssa:
        </p>


        {/* for */}
        <h2 className="text-2xl font-semibold mt-6">for-silmukka</h2>
        <p className="mt-2 mb-4">
          <strong>for-silmukka</strong> sopii tilanteisiin, joissa tiedetään tarkka toistojen määrä.
        </p>
        <pre className="bg-gray-900 p-4 rounded text-left text-sm overflow-x-auto">
          <code>
            {`for (int i = 0; i < 5; i++)
{
    Console.WriteLine($"Toisto {i + 1}");
}`}
          </code>
        </pre>

        {/* Foreach */}
        <h2 className="text-2xl font-semibold mt-6">foreach-silmukka</h2>
        <p className="mt-2 mb-4">
          <strong>foreach-silmukka</strong> on erityisen kätevä taulukoiden ja kokoelmien läpikäymiseen.
        </p>
        <pre className="bg-gray-900 p-4 rounded text-left text-sm overflow-x-auto">
          <code>
            {`string[] hedelmat = { "Omena", "Banaani", "Appelsiini" };

foreach (string hedelmä in hedelmat)
{
    Console.WriteLine(hedelmä);
}`}
          </code>
        </pre>

        {/* while */}
        <h2 className="text-2xl font-semibold mt-6">while-silmukka</h2>
        <p className="mt-2 mb-4">
          <strong>while-silmukka</strong> suorittaa lohkon niin kauan kuin ehto on tosi.
        </p>
        <pre className="bg-gray-900 p-4 rounded text-left text-sm overflow-x-auto">
          <code>
            {`int i = 0;
while (i < 5)
{
    Console.WriteLine($"Toisto {i + 1}");
    i++;
}`}
          </code>
        </pre>

        {/* do-while */}
        <h2 className="text-2xl font-semibold mt-6">do-while-silmukka</h2>
        <p className="mt-2 mb-4">
          <strong>do-while-silmukka</strong> suorittaa lohkon vähintään kerran, koska ehto tarkistetaan vasta lohkon jälkeen.
        </p>
        <pre className="bg-gray-900 p-4 rounded text-left text-sm overflow-x-auto">
          <code>
            {`int i = 0;
do
{
    Console.WriteLine($"Toisto {i + 1}");
    i++;
} while (i < 5);`}
          </code>
        </pre>

        {/* Back to C# Page */}
        <div className="mt-6 text-center">
          <Link to="/csharp" className="text-blue-400 underline hover:text-blue-500"
          onClick={scrollToTop}>
            ⬅ Takaisin C# Ohjelmointiin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CsharpLoop;
