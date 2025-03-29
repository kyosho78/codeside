import React, { useEffect, useState } from "react";
import { fetchThreads } from "./services/ForumService";
import { useParams, Link, useNavigate } from "react-router-dom";
import{fetchWithAuth} from "../api.js";

const ThreadsList = () => {
    const { topicId } = useParams(); 
    const [threads, setThreads] = useState([]);
    const [topicName, setTopicName] = useState("");
    const navigate = useNavigate();
    const [userId, setUserId] = useState(null);
    console.log("KetjutList");

    
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetchWithAuth("http://127.0.0.1:8000/api/profile/", {
                    method: "GET",
                    credentials: "include",
                });

                if (response.ok) {
                    const userData = await response.json();
                    setUserId(userData.id); 
                    console.log("Käyttäjä:", userData.id);
                } else {
                    console.warn("Käyttäjä ei ole kirjautunut");
                    
                }
            } catch (error) {
                console.error("Virhe käyttäjän tunnistamisessa:", error);
                }
        };

        checkAuth();
    }, [navigate]); 

    useEffect(() => {

        fetchThreads(topicId)
            .then((data) => {
                console.log('Received threads:', data); 
                const threadArray = Array.isArray(data) ? data : [data];
                setThreads(threadArray);
                if (threadArray.length > 0 && threadArray[0].aihealue_data) {
                    setTopicName(threadArray[0].aihealue_data.header); 
                } else {
                    setTopicName("Tuntematon aihealue");
                }
            })
            .catch((err) => {
                console.error('Virhe tietojen latauksessa', err);
            });
    }, [topicId]);

    return (
        <div className="bg-gray-900 text-white min-h-screen p-6">
            <div className="relative overflow-x-auto">
                <h2 className="text-2xl font-semibold !text-blue-400 mb-4">
                    Forum : {topicName}
                </h2>

                {userId ? (
                    <Link to={`/create-thread/${topicId}?userId=${userId}`}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4">
                            Luo uusi ketju
                        </button>
                    </Link>
                ) : (
                    <p className="text-gray-400">Kirjaudu sisään, jotta voit luoda uuden ketjun.</p>
                )}

                <ul className="space-y-4">
                    {threads.length > 0 ? (
                        threads.map((thread) => (
                            <li key={thread.id} className="border-b border-gray-700 py-2">
                                <Link 
                                    to={`/thread/${thread.id}`} 
                                    className="text-lg text-orange-300 hover:text-blue-500"
                                >
                                    {thread.header}
                                </Link>
                                <p className="text-gray-400 text-sm">Kirjoittaja: {thread.author.username}</p>
                                <p className="text-gray-400 text-sm">Sisältö: {thread.content}</p>
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-400">Ei vielä ketjuja.</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ThreadsList;