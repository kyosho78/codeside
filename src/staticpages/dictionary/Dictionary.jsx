import React, { useState, useEffect } from "react";

const Dictionary = () => {
  const [wordsData, setWordsData] = useState({});
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Load JSON file
  useEffect(() => {
    fetch("/coding_dictionary.json")
      .then((response) => response.json())
      .then((data) => setWordsData(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  // Search and filter words
  const getFilteredWords = () => {
    if (searchQuery) {
      return Object.values(wordsData)
        .flat()
        .filter((word) => word.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    if (selectedLetter) {
      return wordsData[selectedLetter] || [];
    }
    return [];
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 pt-20 md:pt-32 lg:pt-20">
      <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">
        <h1 className="text-3xl text-center font-bold mb-4">English-Finnish Dictionary</h1>

        {/* Search Input */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search a word..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedLetter(null);
            }}
            className="p-2 w-full sm:w-2/3 md:w-1/2 bg-gray-700 text-white rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* A-Z Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {Object.keys(wordsData).map((letter) => (
            <button
              key={letter}
              onClick={() => {
                setSelectedLetter(letter);
                setSearchQuery("");
              }}
              className={`px-4 py-2 rounded-md text-lg font-semibold transition ${
                selectedLetter === letter ? "bg-blue-500 text-white" : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {letter.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Word List */}
        <div className="mt-6 p-4 bg-gray-700 rounded-lg">
          {searchQuery ? (
            <h2 className="text-2xl font-semibold text-center">Search Results</h2>
          ) : selectedLetter ? (
            <h2 className="text-2xl font-semibold text-center">
              Words starting with "{selectedLetter.toUpperCase()}"
            </h2>
          ) : (
            <h2 className="text-2xl font-semibold text-center">Select a letter or search</h2>
          )}

          <ul className="text-lg mt-4 space-y-2 text-center">
            {getFilteredWords().length > 0 ? (
              getFilteredWords().map((word, index) => (
                <li key={index} className="bg-gray-600 p-2 rounded-md">
                  {word}
                </li>
              ))
            ) : (
              <p className="text-gray-400">No words found.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
