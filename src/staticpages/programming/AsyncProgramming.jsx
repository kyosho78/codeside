/*
  Written by: Valter Backström
*/
import React from "react";
import { Link } from "react-router-dom";

const AsyncProgramming = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 pt-20 md:pt-32 lg:pt-20">
      <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">Asynkroninen ohjelmointi</h1>

        <p className="text-lg leading-loose text-center md:text-left">
          Asynkroninen ohjelmointi: Sisäänrakennettu tuki <code>async/await</code> -toiminnoille tehokkaaseen rinnakkaisuuteen. 
          Laaja kirjastotuki: Valtava valikoima valmiita kirjastoja ja työkaluja eri tarpeisiin 
          (esim. tietokantayhteydet, verkkosovellukset, käyttöliittymät).
        </p>

        <h2 className="text-2xl font-semibold mt-4">Synkroninen vs. Asynkroninen</h2>
        <p className="mt-4 text-left">
          <strong>Synkroninen toiminta:</strong> Käynnistät kahvinkeittimen ja seisot sen vieressä odottaen, kunnes kahvi valmistuu.
          Et voi tehdä mitään muuta ennen kuin kahvi on valmis. Tämä on synkronista toimintaa.<br />
          <strong>Asynkroninen toiminta:</strong> Käynnistät kahvinkeittimen, mutta et jää odottamaan sen valmistumista.
          Samalla menet valmistamaan paahtoleipää tai vastaamaan sähköposteihin.
          Kun kahvi on valmis, kahvinkeitin hälyttää, ja palaat hakemaan kahvin.<br />
          <strong>Tärkeä pointti:</strong> <code>await</code>-kohta ei tarkoita, että ohjelma pysähtyy kokonaan.
          Kun saavutetaan <code>await</code>, ohjelma vapauttaa nykyisen säikeen (**thread**), 
          jotta se voi suorittaa muita tehtäviä sillä aikaa, kun hidas operaatio (esim. tietokantakysely) valmistuu.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Koodiesimerkki</h2>
        <pre className="bg-gray-900 p-4 rounded text-left text-sm overflow-x-auto">
          <code>
            {`Pääohjelma:

public void Main()
{
    Console.WriteLine("1.Tilataan kahvia...");
    MakeCoffeeAsync();//Kutsutaan Metodia
    Console.WriteLine("3.Tehdään muita asioita sillä aikaa...");
}

Metodi:

public async Task MakeCoffeeAsync() 
{
    Console.WriteLine("2.Aloitetaan kahvin keittäminen...");
    await Task.Delay(5000); // Simuloi 5 sekunnin odotusta (hidas operaatio)
    Console.WriteLine("4.Kahvi on valmis!");
}`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold mt-6">Tulostus konsolissa</h2>
        <pre className="bg-gray-900 p-4 rounded text-left text-sm overflow-x-auto">
          <code>
            {`1. Tilataan kahvia...
2. Aloitetaan kahvin keittäminen...
3. Tehdään muita asioita sillä aikaa...
4. Kahvi on valmis!`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold mt-6">Yhteenveto</h2>
        <p className="mt-4 text-center md:text-left">
          <strong>Async/Await ei pysäytä sovellusta</strong>. Kun <code>await</code>-kohta saavutetaan, 
          suoritus ei jää odottamaan, vaan vapauttaa säikeen muiden tehtävien käyttöön.
          Kun pitkä tehtävä (esim. tietokantakysely tai tiedoston luku) on valmis,
          suoritus jatkuu siitä, mihin jäätiin, eli jatkaa kohtaan 4.
          Tämä tekee sovelluksesta **tehokkaamman** ja **responsiivisemman**, koska aikaa ei tuhlata odottamiseen.
        </p>

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

export default AsyncProgramming;
