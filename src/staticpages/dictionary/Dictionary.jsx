import React, { useState, useEffect } from "react";

const Dictionary = () => {
  const [wordsData, setWordsData] = useState({});
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Load JSON dynamically
  useEffect(() => {
    fetch("/coding_dictionary.json")
      .then((response) => response.json())
      .then((data) => setWordsData(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  // Function to filter words (Finnish and English)
  const getFilteredWords = () => {
    if (!wordsData) return [];

    if (searchQuery) {
      return Object.values(wordsData)
        .flat()
        .filter(
          (entry) =>
            entry.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
            entry.translation.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    return selectedLetter ? wordsData[selectedLetter] || [] : [];
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 pt-20 md:pt-32 lg:pt-20">
      <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">
        <h1 className="text-3xl text-center font-bold mb-4">
          Englanti-Suomi Sanakirja
        </h1>

        {/* Search Input */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Hae sanaa..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedLetter(null);
            }}
            className="p-2 w-full sm:w-2/3 md:w-1/2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

      {/* A-Z Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {Object.keys(wordsData).map((letter) => (
            <button
              key={letter}
              style={{color: "black", backgroundColor: "white"}} //Lisätty 19.3
              onClick={() => {
                setSelectedLetter(letter);
                setSearchQuery("");
              }}
              className={`px-4 py-2 rounded-md text-lg font-semibold transition ${
                selectedLetter === letter
                  ? "!bg-blue-500  !text-black" //Lisätty 19.3
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {letter.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Word List */}
        <div className="mt-6 p-4 bg-gray-700 rounded-lg">
          {searchQuery ? (
            <h2 className="text-2xl font-semibold text-center">
              Haku tulokset:
            </h2>
          ) : selectedLetter ? (
            <h2 className="text-2xl font-semibold text-center">
              Sanoja alkaen "{selectedLetter.toUpperCase()}" kirjaimella
            </h2>
          ) : (
            <h2 className="text-2xl font-semibold text-center">
              Valitse kirjain tai hae sanaa
            </h2>
          )}

          <ul className="text-lg mt-4 space-y-4 text-center">
            {getFilteredWords().length > 0 ? (
              getFilteredWords().map((entry, index) => (
                <li
                  key={index}
                  className="bg-gray-600 p-4 rounded-md text-left"
                >
                  <strong className="text-xl text-white">{entry.word}</strong> -
                  <span className="text-white"> {entry.translation}</span>
                  <p className="mt-2 text-white">{entry.explanation}</p>
                  {/* Check if an example exists */}
                  {entry.example && (
                    <div className="mt-4 bg-gray-800 p-3 rounded-md border border-gray-500 text-white">
                      <p className="font-semibold">Example:</p>
                      <pre className="bg-gray-900 p-3 rounded-md text-sm overflow-x-auto">
                        <code>{entry.example.code}</code>
                      </pre>
                      <p className="mt-2 text-gray-300">
                        {entry.example.description}
                      </p>
                    </div>
                  )}
                </li>
              ))
            ) : (
              <p className="text-gray-400">Haettua sanaa ei löydy.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
