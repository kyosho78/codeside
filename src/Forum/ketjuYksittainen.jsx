import React, { useEffect, useState } from "react";
import EditThreadForm from "./muokkaaKetjua";
import { fetchThread, fetchReplies, createReply } from "./services/ForumService";
import { useParams } from "react-router-dom";
import { fetchWithAuth } from "../api";

const ThreadView = () => {
    const { threadId } = useParams();
    const [thread, setThread] = useState({});
    const [replies, setReplies] = useState([]);
    const [newReply, setNewReply] = useState("");
    const [userId, setUserId] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editThread, setEditThread] = useState(null);
    
    console.log("YksittäinenKetju");

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetchWithAuth("https://projekti2025backend-e0dubhd7e5h6akcw.swedencentral-01.azurewebsites.net/api/profile/", {
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
    }, []); 

    useEffect(() => {

        const getThreadData = async () => {
            try {
                const threadData = await fetchThread(threadId);
                console.log("Haettu ketju:", threadData)
                setThread(threadData);

                const replyData = await fetchReplies(threadId);
                setReplies(replyData);
            } catch (error) {
                console.error("Virhe tietojen haussa:", error);
            }
        };

        getThreadData();
    }, [threadId]);



    const handleReplySubmit = async (e) => {
        e.preventDefault();
        if (newReply.trim() === "" || userId === null || isSubmitting) return;

        setIsSubmitting(true);
        const replyData = { content: newReply, ketju: threadId, replier: userId };

        try {
            const createdReply = await createReply(replyData);
            setReplies([...replies, createdReply]);
            setNewReply("");
        } catch (error) {
            console.error("Virhe vastauksen lähettämisessä:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const onThreadUpdated = () => {
        const getThreadData = async () => {
            try {
                const threadData = await fetchThread(threadId);
                setThread(threadData);
    
                const replyData = await fetchReplies(threadId);
                setReplies(replyData);
            } catch (error) {
                console.error("Virhe tietojen haussa:", error);
            }
        };
    
        getThreadData();
        setEditThread(null); // Sulkee muokkausmodaalin
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen p-15">
            
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">{thread.header}</h2>
            <div className="border-b border-gray-700 py-2 flex justify-between items-center">
            <h2 className="text-gray-300 mb-6">{thread.content}</h2>
            <div className="flex items-center space-x-4">
            <p className="text-gray-400">Kirjoittaja: {thread.author?.username && thread.author.username.trim() !== "" 
                                ? thread.author.username 
                                : thread.author?.is_superuser 
                                    ? "Admin" 
                                    : thread.author?.email}
            </p>
                {userId && thread.author && userId === thread.author.id && (
                    <button className="!bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded"
                        onClick={() => setEditThread(thread)}
                    >
                        Muokkaa
                    </button>
                )}
                </div>
            </div>
    
            <h5 className="text-xl text-blue-400 mb-4">Vastaukset:</h5>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
                <ul className="space-y-4">
                    {replies.length > 0 ? (
                        replies.map((reply) => (
                            <li key={reply.id} className="border-b border-gray-700 py-3">
                                <p className="text-gray-400">Kirjoittaja: {thread.author?.username && thread.author.username.trim() !== "" 
                                ? thread.author.username 
                                : thread.author?.is_superuser 
                                    ? "Admin" 
                                    : thread.author?.email}
                                </p>
                                <p className="text-gray-300">{reply.content}</p>
                                <p className="text-gray-500 text-xs">Luotu: {new Date(reply.created).toLocaleString()}</p>
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-400">Ei vielä vastauksia.</p>
                    )}
                </ul>
            </div>
            
            {userId !== null && (
                <form onSubmit={handleReplySubmit} className="mb-4">
                    <div className="border border-gray-300 rounded-md p-2 w-1/2">
                        <textarea
                            value={newReply}
                            onChange={(e) => setNewReply(e.target.value)}
                            placeholder="Kirjoita vastaus..."
                            className="w-full p-2 text-gray-900 bg-white rounded-md border-none"
                            rows="2"
                        />
                        <button
                            type="submit" 
                            disabled={isSubmitting}
                            className="mt-2 w-full !bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                            Lähetä uusi vastaus
                        </button>
                    </div>
                </form>
            )}

            {isModalOpen && (
                <NewThreadForm 
                    topicId={topicId} 
                    userId={userId} 
                    closeModal={() => setIsModalOpen(false)} 
                    onThreadCreated={fetchData} 
                />
            )}

            {editThread && (
                <EditThreadForm
                    thread={editThread} 
                    userId={userId} 
                    onUpdate={onThreadUpdated} 
                    onClose={() => setEditThread(null)} 
                />
            )}


        </div>
    );
};

export default ThreadView;
