import React, { useEffect, useState } from "react";
import { fetchThread, fetchReplies, createReply } from "./services/ForumService";
import { useParams } from "react-router-dom";

const ThreadView = () => {
    const { threadId } = useParams();
    const [thread, setThread] = useState({});
    const [replies, setReplies] = useState([]);
    const [newReply, setNewReply] = useState("");

    useEffect(() => {
        const getThreadData = async () => {
            try {
                const threadData = await fetchThread(threadId);
                setThread(threadData);
    
                // Haetaan ja suodatetaan vastaukset
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
        if (newReply.trim() === "") return;

        const replyData = {
            content: newReply,
            ketju: threadId,
            replier: 1, // Korvaa autentikoidun käyttäjän ID:llä
        };

        try {
            const createdReply = await createReply(replyData);
            setReplies([...replies, createdReply]);
            setNewReply("");
        } catch (error) {
            console.error("Virhe vastauksen lähettämisessä:", error);
        }
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen p-6">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">{thread.header}</h2>
            <p className="text-gray-400 mb-6">Kirjoittaja: {thread.author?.username}</p>
            <p className="text-gray-300 mb-6">{thread.content}</p>

            <h3 className="text-xl text-blue-400 mb-4">Vastaukset:</h3>
            <ul className="space-y-4 mb-6">
                {replies.length > 0 ? (
                    replies.map((reply) => (
                        <li key={reply.id} className="border-b border-gray-700 py-2">
                            <p className="text-gray-400">Kirjoittaja: {reply.replier?.username}</p>
                            <p className="text-gray-300">{reply.content}</p>
                            <p className="text-gray-500 text-xs">Luotu: {new Date(reply.created).toLocaleString()}</p>
                        </li>
                    ))
                ) : (
                    <p className="text-gray-400">Ei vielä vastauksia.</p>
                )}
            </ul>

            <form onSubmit={handleReplySubmit} className="mb-4">
                <textarea
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)}
                    placeholder="Kirjoita vastaus..."
                    className="w-full p-2 text-gray-900 rounded-md"
                    rows="3"
                />
                <button
                    type="submit"
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Lähetä vastaus
                </button>
            </form>
        </div>
    );
};

export default ThreadView;
