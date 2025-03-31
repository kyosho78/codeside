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
        <div className="bg-gray-900 text-white min-h-screen p-15">
            <div className="relative overflow-x-auto">
                <h2 className="text-2xl font-semibold text-blue-400 mb-4">Forum : {topicName}</h2>

                {userId ? (
                    <button onClick={() => setIsModalOpen(true)} className="!bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded mb-4">
                        Luo uusi ketju
                    </button>
                ) : (
                    <p className="text-gray-400">Kirjaudu sisään, jotta voit luoda uuden ketjun.</p>
                )}

                <ul className="space-y-4">
                    {threads.length > 0 ? (
                        threads.map((thread) => (
                            <li key={thread.id} className="border-b border-gray-700 py-2 flex justify-between items-center">
                                <div>
                                    <Link to={`/thread/${thread.id}`} className="text-lg text-orange-300 hover:text-blue-500">
                                        {thread.header}
                                    </Link>
                                    <p className="text-gray-400 text-sm">Sisältö: {thread.content}</p>
                                </div>
                                <p className="text-gray-400 text-sm">Kirjoittaja: {thread.author.username}</p>
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-400">Ei vielä ketjuja.</p>
                    )}
                </ul>
            </div>

            {isModalOpen && (
                <NewThreadForm 
                    topicId={topicId} 
                    userId={userId} 
                    closeModal={() => setIsModalOpen(false)} 
                    onThreadCreated={fetchData} 
                />
            )}
        </div>
    );
};

export default ThreadsList;