{/*Forumin etusivu -  Jani*/}
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
      {/* Page background */}
      <div className="pt-24 pb-10 min-h-screen bg-black text-white">
        
        {/* Centered forum card */}
        <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">
          
          {/* Header */}
          <div className="text-center mb-10">
            <h1
              className="text-3xl font-bold text-center mb-6"
              style={{ textShadow: "0 0 2px rgba(99, 179, 255, 0.8), 0 0 16px rgba(99, 179, 255, 0.6)" }}
            >
              Keskustelu Foorumi
            </h1>
          </div>

          {/* Topics Section */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold !text-blue-400 mb-6">Foorumin aihealueet</h2>


            {/* Admin Create Topic */}
            {isSuperUser && (
              <div className="mb-6">
                <button
                  className="!bg-blue-500 !text-white hover:!bg-orange-300 hover:!text-black py-2 px-4 rounded transition"
                  onClick={() => setIsEditing(true)}
                >
                Luo uusi aihealue (Admin)
                </button>

                {isEditing && (
                  <div className="mt-4">
                    <textarea
                      value={newTopic}
                      onChange={(e) => setNewTopic(e.target.value)}
                      placeholder="Kirjoita uusi aihealue"
                      className="w-full !bg-white !text-black p-3 rounded mb-4"
                      rows="3"
                    />
                    <div className="flex gap-2">
                      <button
                        className="!bg-green-500 hover:!bg-green-700 !text-white py-2 px-4 rounded"
                        onClick={handleCreateTopic}
                      >
                      Tallenna
                      </button>
                      <button
                        className="!bg-red-500 hover:!bg-red-700 !text-white py-2 px-4 rounded"
                        onClick={() => setIsEditing(false)}
                      >
                      Peruuta
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

          
          <ul className="space-y-6">
          {topics.map((topic) => {
              const threadCount = threads.filter((thread) => thread.aihealue === topic.id).length;

              // Haetaan kolme viimeisintä ketjua kyseisestä aiheesta
              const recentThreads = threads
                .filter((thread) => thread.aihealue === topic.id)
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Järjestetään aikajärjestykseen
                .slice(0, 3); // Valitaan kolme viimeisintä ketjua

                return (
                  <li key={topic.id} className="border-b border-gray-600 pb-4">
                    <Link
                      to={`/threads/${topic.id}`}
                      className="text-2xl !text-orange-300 hover:!text-orange-500 transition"
                    >
                      {topic.header}
                    </Link>
                    <div className="text-gray-400 text-sm mt-1">
                      Ketjuja: {threadCount}
                    </div>

                    {recentThreads.length > 0 && (
                      <ul className="mt-2 ml-4 space-y-1 text-sm text-gray-300">
                        {recentThreads.map((thread) => (
                          <li key={thread.id}>
                            <Link to={`/thread/${thread.id}`} className="hover:!text-blue-400 transition">
                              • {thread.header}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>


            {/* Error */}
            {error && <div className="text-red-400 mt-6">{error}</div>}
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 py-4 bg-gray-800 text-center text-gray-400">
        <p>&copy; 2025 Codesite. Kaikki oikeudet pidätetään.</p>
      </footer>
    </>
  );
};

export default ForumList;
