import React from "react";
import { Link } from "react-router-dom";

const CsharpCondition = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 pt-20 md:pt-32 lg:pt-20">
      <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">C# Lausekkeet</h1>

        <p className="text-lg text-center md:text-left mb-6">
          C#:n lausekkeet mahdollistavat ohjelman loogisen ohjauksen. Tässä on esimerkkejä if-lauseista, switch-case-
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
            {`using System;

class Program
{
    static void Main(string[] args)
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
}`}
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
            {`using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Syötä ikäsi:");
        int ika = int.Parse(Console.ReadLine());

        switch (ika)
        {
            case int n when (n >= 1 && n <= 12):
                Console.WriteLine("Olet lapsi.");
                break;
            case int n when (n >= 13 && n <= 17):
                Console.WriteLine("Olet nuori.");
                break;
            case int n when (n >= 18 && n <= 64):
                Console.WriteLine("Olet aikuinen.");
                break;
            case int n when (n > 64):
                Console.WriteLine("Olet eläkeläinen.");
                break;
            default:
                Console.WriteLine("Ikä ei voi olla negatiivinen.");
                break;
        }
    }
}`}
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
              to="/csharp"
              className="text-blue-400 underline hover:text-blue-500 mr-4"
              onClick={scrollToTop}
            >
              ⬅ Takaisin C# Ohjelmointiin
            </Link>
  
            <Link
              to="/csharp-loop"
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

export default CsharpCondition;
