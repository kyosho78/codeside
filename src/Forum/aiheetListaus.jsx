
import React, { useEffect, useState } from "react";
import { fetchTopics, fetchUserProfile, createTopic, fetchAllThreads } from "./services/ForumService";
import { Link } from "react-router-dom";

const ForumList = () => {
  const [topics, setTopics] = useState([]);
  const [threads, setThreads] = useState([]);
  const [newTopic, setNewTopic] = useState('');
  const [isSuperUser, setIsSuperUser] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
 
  useEffect(() => {
    fetchTopics().then(setTopics);     
    fetchUserProfile()
      .then(user => setIsSuperUser(user.is_superuser))
      .catch(err => setError("Tervetuloa Codesite Foorumille ! Luo tunnukset tai kirjaudu jos haluat osallistua keskusteluun"));
    fetchAllThreads(null).then(setThreads);
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
     <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <div className="relative overflow-x-auto flex-grow p-8">
        <div className="text-center mb-10 mt-15">
        <h1 
          className="text-3xl font-bold text-left mb-4 border-b border-gray-600 py-2"
          style={{ textShadow: "0 0 2px rgba(99, 179, 255, 0.8), 0 0 16px rgba(99, 179, 255, 0.6)" }}
        >
          Keskustelu Foorumi
        </h1>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-blue-400 bg-gray-900 p-4 rounded-lg shadow-md mb-6">Foorumin aihealueet</h2>


          {isSuperUser && (
            <div className="mt-4">
              <button
                className="!bg-blue-500 text-white hover:!bg-orange-300 hover:text-black py-1 px-2 rounded flex items-center justify-center"
                onClick={() => setIsEditing(true)}
              >
                <i className="fas fa-plus mr-2"></i> Luo uusi (Admin)
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

          
          <ul className="space-y-4">
          {topics.map((topic) => {
              const threadCount = threads.filter((thread) => thread.aihealue === topic.id).length;

              // Haetaan kolme viimeisintä ketjua kyseisestä aiheesta
              const recentThreads = threads
                .filter((thread) => thread.aihealue === topic.id)
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Järjestetään aikajärjestykseen
                .slice(0, 3); // Valitaan kolme viimeisintä ketjua

              return (
                <li key={topic.id} className="border-b border-gray-700 py-2">
                  <Link to={`/threads/${topic.id}`} className="text-2xl !text-orange-300 hover:text-orange-500">
                    <div className="py-2 flex justify-between items-center">
                      {topic.header}
                      <div className="flex items-center space-x-4 text-gray-500 text-sm">
                        <p>Ketjuja: {threadCount}</p>
                      </div>
                    </div>
                  </Link>
                   
                  {recentThreads.length > 0 && (
                    <p className="mt-2 text-gray-300 text-m">
                    <ul>
                      {recentThreads.map((thread) => (
                        <li key={thread.id}>
                          <Link to={`/thread/${thread.id}`} className="hover:!text-blue-500">
                            {thread.header}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    </p>
                  )}
                </li>
              );
            })}
          </ul>


        </div>
      </div>

      <div className="text-center">
        {error && <div className="text-white-500">{error}</div>}
      </div>

      <footer className="mt-10 py-4 bg-gray-800 text-center text-gray-400">
        <p>&copy; 2025 Codesite. Kaikki oikeudet pidätetään.</p>
      </footer>
    </div>
  </>
);
};

export default ForumList;
