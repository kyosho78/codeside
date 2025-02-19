import React from "react";
import { Link } from "react-router-dom";

const PythonCondition = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 pt-20 md:pt-32 lg:pt-20">
      <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">Python Lausekkeet</h1>

        <p className="text-lg text-center md:text-left mb-6">
          Pythonin lausekkeet mahdollistavat ohjelman loogisen ohjauksen. Tässä on esimerkkejä if-lauseista, switch-case-
          rakenteesta ja try-catch-poikkeuskäsittelystä.
        </p>

        {/* If Statement */}
        <h2 className="text-2xl font-semibold mt-6">If-lause</h2>
        <p className="mt-2 mb-4">
          <strong>If-else</strong> lauseita käytetään, kun haluat tehdä päätöksiä ohjelmassasi käyttäjän antaman syötteen tai 
          muun muuttujan perusteella.
        </p>
        <pre className="bg-gray-900 p-4 rounded text-left text-sm overflow-x-auto">
          <code>
            {`# Pyydä käyttäjää syöttämään ikä

ika = int(input("Syötä ikäsi: "))

# Tarkista käyttäjän ikä ja tulosta vastaava luokitus

if 1 <= ika <= 12:
    print("Olet lapsi.")
elif 13 <= ika <= 17:
    print("Olet nuori.")
elif 18 <= ika <= 64:
    print("Olet aikuinen.")
elif ika > 64:
    print("Olet eläkeläinen.")
else:
    print("Ikä ei voi olla nolla tai negatiivinen.")`}
          </code>
        </pre>

        {/* Switch-Case */}
        <h2 className="text-2xl font-semibold mt-6">Switch Case</h2>
        <p className="mt-2 mb-4">
          <strong>Switch-case</strong> on hyödyllinen vaihtoehto if-else-rakenteelle, erityisesti kun käsitellään monia eri
          vaihtoehtoja.
        </p>
        <pre className="bg-gray-900 p-4 rounded text-left text-sm overflow-x-auto">
          <code>
            {`Huom!  Python ei sisällä natiivisti switch-case-rakennetta, 
mutta voidaan käyttää match-lauseketta (Python 3.10 ja uudemmat) 
saavuttaakseen saman toiminnallisuuden:

# Pyydä käyttäjää syöttämään ikä

ika = int(input("Syötä ikäsi: "))

# Käytä match-case-rakennetta ilman ylimääräisiä muuttujia

match True:
    case _ if 1 <= ika <= 12:
        print("Olet lapsi.")
    case _ if 13 <= ika <= 17:
        print("Olet nuori.")
    case _ if 18 <= ika <= 64:
        print("Olet aikuinen.")
    case _ if ika > 64:
        print("Olet eläkeläinen.")
    case _:
        print("Ikä ei voi olla nolla tai negatiivinen.")`}
          </code>
        </pre>

        {/* Try-Catch */}
        <h2 className="text-2xl font-semibold mt-6">Try Catch</h2>
        <p className="mt-2 mb-4">
          <strong>Try-Catch</strong> lauseita käytetään virheiden hallintaan. Tämä esimerkki estää virhetilanteita, 
          jos käyttäjä syöttää väärän arvon.
        </p>
        <pre className="bg-gray-900 p-4 rounded text-left text-sm overflow-x-auto">
          <code>
            {`using System;

class Program
{
    static void Main(string[] args)
    {
        try
        {
            Console.WriteLine("Syötä ikäsi:");
            int ika = int.Parse(Console.ReadLine());

            if (ika >= 1 && ika <= 12)
            {
                Console.WriteLine("Olet lapsi.");
            }
            else if (ika >= 13 && ika <= 17)
            {
                Console.WriteLine("Olet nuori.");
            }
            else if (ika >= 18 && ika <= 64)
            {
                Console.WriteLine("Olet aikuinen.");
            }
            else if (ika > 64)
            {
                Console.WriteLine("Olet eläkeläinen.");
            }
            else
            {
                Console.WriteLine("Ikä ei voi olla negatiivinen.");
            }
        }
        catch (FormatException)
        {
            Console.WriteLine("Virhe: Anna kelvollinen kokonaisluku.");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Tuntematon virhe: {ex.Message}");
        }
    }
}`}
          </code>
        </pre>

          {/* Back to C# Page */}
          <div className="mt-6 text-center">
            <Link
              to="/python"
              className="text-blue-400 underline hover:text-blue-500 mr-4"
              onClick={scrollToTop}
            >
              ⬅ Takaisin Python pääsivulle
            </Link>
  
            <Link
              to="/python-loop"
              className="text-blue-400 underline hover:text-blue-500 ml-4"
              onClick={scrollToTop}
            >
              Silmukat ➡
            </Link>
            </div>
      </div>
    </div>
  );
};

export default PythonCondition;
