{/*Keskustelu ketjut -  Jani*/}
import React, { useEffect, useState } from "react";
import { fetchTopic ,fetchThreads, fetchUserProfile } from "./services/ForumService";
import { useParams, Link } from "react-router-dom";
import NewThreadForm from "./luoUusiKetju";

const ThreadsList = () => {
    const { topicId } = useParams();
    const [threads, setThreads] = useState([]);
    const [topicName, setTopicName] = useState("");
    const [userId, setUserId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const userData = await fetchUserProfile();
                setUserId(userData.id);
            } catch (error) {
                console.error("Virhe käyttäjän tunnistamisessa:", error);
            }
        };
        checkAuth();
    }, []);

    const fetchData = async () => {
        try {
            const topicData = await fetchTopic(topicId);
            const data = await fetchThreads(topicId);
            const threadArray = Array.isArray(data) ? data : [data];
            const sortedThreads = threadArray.sort((a, b) => new Date(b.updated) - new Date(a.updated));

            setThreads(sortedThreads);
            setTopicName(topicData.header);
        } catch (err) {
            console.error("Virhe tietojen latauksessa", err);
        }
    };

    useEffect(() => {
        fetchData();
    }, [topicId]);

    return (
        <>
          {/* Page background */}
          <div className="pt-24 pb-10 min-h-screen bg-black text-white">
            
            {/* Centered card */}
            <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">
              
              {/* Header */}
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold !text-blue-400 mb-6">
                  Keskustelualue: {topicName}
                </h2>
              </div>
    
              {/* Create new thread button */}
              <div className="mb-6 text-center">
                {userId ? (
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="!bg-blue-500 hover:!bg-orange-300 hover:!text-black !text-white px-6 py-2 rounded-md transition"
                  >
                  Luo uusi ketju
                  </button>
                ) : (
                  <p className="text-gray-400">Kirjaudu sisään, jotta voit luoda uuden ketjun.</p>
                )}
              </div>
    
              {/* Threads list */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                {threads.length > 0 ? (
                  <ul className="space-y-6">
                    {threads.map((thread) => (
                      <li key={thread.id} className="border-b border-gray-600 pb-4">
                        <div className="flex flex-col md:flex-row md:justify-between">
                          <div>
                            <Link
                              to={`/thread/${thread.id}`}
                              className="text-xl !text-orange-300 hover:!text-blue-400 transition"
                            >
                              {thread.header}
                            </Link>
                            <p className="text-gray-400 text-sm mt-1">
                              Sisältö: {thread.content}
                            </p>
                          </div>
                          <div className="text-gray-400 text-sm mt-2 md:mt-0 md:text-right">
                            Kirjoittaja: {thread.author?.username && thread.author.username.trim() !== ""
                              ? thread.author.username
                              : "Forumin käyttäjä"}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 text-center">Ei vielä ketjuja.</p>
                )}
              </div>
    
            </div>
          </div>
    
          {/* Modal for creating new thread */}
          {isModalOpen && (
            <NewThreadForm
              topicId={topicId}
              userId={userId}
              closeModal={() => setIsModalOpen(false)}
              onThreadCreated={fetchData}
            />
          )}
        </>
      );
    };

export default ThreadsList;