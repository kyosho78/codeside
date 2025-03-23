import React, { useEffect, useState } from "react";
import { fetchThreads } from "./services/ForumService";
import { useParams, Link } from "react-router-dom";

const ThreadsList = () => {
    const { topicId } = useParams(); // Haetaan aihealueen ID URL:sta
    const [threads, setThreads] = useState([]);
    const [topicName, setTopicName] = useState(""); // Uusi tila aihealueen nimelle

    useEffect(() => {
        fetchThreads(topicId)
            .then((data) => {
                console.log('Received threads:', data); // Tämä tarkistaa, että data saapuu oikein
                // Jos data ei ole taulukko, pakotetaan se taulukoksi
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
                <h2 className="text-2xl font-semibold text-blue-400 mb-4">
                    Forum : {topicName}
                </h2>
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