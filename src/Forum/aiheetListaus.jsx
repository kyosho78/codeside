import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import { fetchTopics, fetchUserProfile, createTopic } from "./services/ForumService";
import { Link } from "react-router-dom";

const ForumList = () => {
  const [topics, setTopics] = useState([]);
  const [newTopic, setNewTopic] = useState('');
  const [isSuperUser, setIsSuperUser] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    fetchTopics().then(setTopics);
    fetchUserProfile()
      .then(user => setIsSuperUser(user.is_superuser))
      .catch(err => setError("Virhe käyttäjän tiedoissa"));
  }, []);

  const handleCreateTopic = async () => {
    try {
      const data = { header: newTopic }; 
      await createTopic(data);
      setNewTopic(""); 
      setIsCreating(false); 
      fetchTopics().then(setTopics); 
    } catch (error) {
      console.error("Virhe uuden aihealueen luomisessa", error);
    }
  };

  return (
    <>
    <Navbar />
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <div className="relative overflow-x-auto flex-grow p-8">
        <div className="text-center mb-10 mt-15">
          <h1 className="text-3xl font-bold text-left mb-4">Keskustelu Foorumi</h1>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Foorumin aihealueet</h2>
          <ul className="space-y-4">
            {topics.map((topic) => (
              <li key={topic.id} className="border-b border-gray-700 py-2">
                <Link 
                  to={`/threads/${topic.id}`} 
                  className="text-lg text-orange-300 hover:text-blue-500"
                >
                  {topic.header}
                </Link>
              </li>
            ))}
          </ul>

          {isSuperUser && (
            <div className="mt-4">
              <button 
                className="!bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                onClick={() => setIsEditing(true)}
              >
                Luo uusi
              </button>

              {isEditing && (
                <div className="mt-4">
                  <textarea
                    value={newTopic}
                    onChange={(e) => setNewTopic(e.target.value)}
                    placeholder="Kirjoita uusi aihe"
                    className="!bg-white w-full p-2 text-black rounded"
                  />
                  <button 
                    className="mt-2 !bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
                    onClick={handleCreateTopic}
                  >
                    Tallenna
                  </button>
                  <button 
                    className="mt-2 ml-2 !bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                    onClick={() => setIsEditing(false)}
                  >
                    Peruuta
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {error && <div className="text-red-500">{error}</div>}

      <footer className="mt-10 py-4 bg-gray-800 text-center text-gray-400">
        <p>&copy; 2025 Codesite. Kaikki oikeudet pidätetään.</p>
      </footer>
    </div>
    </>
  );
};

export default ForumList;
