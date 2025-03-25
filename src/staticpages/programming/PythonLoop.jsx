/*
  Written by: Valter Backström
*/
import React from "react";
import { Link } from "react-router-dom";

const PythonLoop = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 pt-20 md:pt-32 lg:pt-20">
      <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">Python Silmukat</h1>

        <p className="text-lg text-center md:text-left mb-6">
         Python silmukat mahdollistavat koodin toistamisen tehokkaasti ilman tarpeetonta toistoa. 
         Silmukoita käytetään esimerkiksi taulukoiden läpikäyntiin, toistuvien laskentojen suorittamiseen ja 
         ehtojen perusteella toistuvan koodin hallintaan. 
         Tässä ovat yleisimmät silmukat Pythonissa:
        </p>


        {/* for */}
        <h2 className="text-2xl font-semibold mt-6">for-silmukka</h2>
        <p className="mt-2 mb-4">
        Pythonissa <strong>for-silmukka</strong> käy yleensä läpi iteratiivisia objekteja, mutta voit käyttää myös range-funktiota kuten C#:n for-silmukassa.
        </p>
        <pre className="bg-gray-900 p-4 rounded text-left text-sm overflow-x-auto">
          <code>
            {`for i in range(5):
    print(f"Toisto {i + 1}")`}
          </code>
        </pre>

        {/* Foreach */}
        <h2 className="text-2xl font-semibold mt-6">foreach-silmukka</h2>
        <p className="mt-2 mb-4">
        Pythonissa <strong>foreach-silmukka</strong> kattaa foreach-toiminnallisuuden.
        </p>
        <pre className="bg-gray-900 p-4 rounded text-left text-sm overflow-x-auto">
          <code>
            {`hedelmat = ["Omena", "Banaani", "Appelsiini"]

for hedelmä in hedelmat:
    print(hedelmä)`}
          </code>
        </pre>

        {/* while */}
        <h2 className="text-2xl font-semibold mt-6">while-silmukka</h2>
        <p className="mt-2 mb-4">
        Pythonissa <strong>while-silmukka</strong> toimii samalla tavalla kuin C#:ssa.
        </p>
        <pre className="bg-gray-900 p-4 rounded text-left text-sm overflow-x-auto">
          <code>
            {`i = 0
while i < 5:
    print(f"Toisto {i + 1}")
    i += 1`}
          </code>
        </pre>

        {/* do-while */}
        <h2 className="text-2xl font-semibold mt-6">do-while-silmukka</h2>
        <p className="mt-2 mb-4">
        Pythonissa ei ole suoraan <strong>do-while-silmukkaa,</strong> mutta sama logiikka voidaan toteuttaa käyttämällä while ja varmistamalla, että lohko suoritetaan ainakin kerran:
        </p>
        <pre className="bg-gray-900 p-4 rounded text-left text-sm overflow-x-auto">
          <code>
            {`i = 0
while True:
    print(f"Toisto {i + 1}")
    i += 1
    if i >= 5:
        break`}
          </code>
        </pre>

        {/* Back to C# Page */}
        <div className="mt-6 text-center">
          <Link to="/python" className="text-blue-400 underline hover:text-blue-500"
          onClick={scrollToTop}>
            ⬅ Takaisin Python pääsivulle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PythonLoop;
