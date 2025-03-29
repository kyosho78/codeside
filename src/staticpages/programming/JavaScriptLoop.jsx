/*
  Written by: Valter Backström
*/
import React from "react";
import { Link } from "react-router-dom";

const JavaScriptLoop = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 pt-20 md:pt-32 lg:pt-20">
      <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">JavaScript Silmukat</h1>

        <p className="text-lg text-center md:text-left mb-6">
         JavaScript silmukat mahdollistavat koodin toistamisen tehokkaasti ilman tarpeetonta toistoa. 
         Silmukoita käytetään esimerkiksi taulukoiden läpikäyntiin, toistuvien laskentojen suorittamiseen ja 
         ehtojen perusteella toistuvan koodin hallintaan. 
         Tässä ovat yleisimmät silmukat JavaScriptissä:
        </p>


        {/* for */}
        <h2 className="text-2xl font-semibold mt-6">for-silmukka</h2>
        <p className="mt-2 mb-4">
          <strong>for-silmukka</strong> sopii tilanteisiin, joissa tiedetään tarkka toistojen määrä.
        </p>
        <pre className="bg-gray-900 p-4 rounded text-left text-sm overflow-x-auto">
          <code>
            {`for (let i = 0; i < 5; i++) {
    console.log(\`Toisto \${i + 1}\`);
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
            {`const hedelmat = ["Omena", "Banaani", "Appelsiini"];

hedelmat.forEach(hedelmä => {
    console.log(hedelmä);
});

//Jos haluat käydä listan läpi tavallisella for-silmukalla, se toimii näin:

for (let i = 0; i < hedelmat.length; i++) {
    console.log(hedelmat[i]);
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
            {`let i = 0;
while (i < 5) {
    console.log(\`Toisto \${i + 1}\`);
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
            {`let i = 0;
do {
    console.log(\`Toisto \${i + 1}\`);
    i++;
} while (i < 5);`}
          </code>
        </pre>

        {/* Back to C# Page */}
        <div className="mt-6 text-center">
          <Link to="/javascript" className="text-blue-400 underline hover:text-blue-500"
          onClick={scrollToTop}>
            ⬅ Takaisin JavaScript pääsivulle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JavaScriptLoop;
