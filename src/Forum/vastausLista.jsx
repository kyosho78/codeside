{/*Ketjun vastaukset -  Jani*/}

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReplies } from "./services/ForumService";

const RepliesList = () => {
    const { threadId } = useParams(); // Haetaan ketjun ID URL:sta
    const [replies, setReplies] = useState([]);

    useEffect(() => {
        fetchReplies(threadId).then(setReplies);
    }, [threadId]);

    return (
        <div className="bg-gray-900 text-white min-h-screen p-6">
            <div className="relative overflow-x-auto">
                <h2 className="text-2xl font-semibold text-blue-400 mb-4">
                    Ketjun Vastaukset
                </h2>
                <ul className="space-y-4">
                    {replies.length > 0 ? (
                        replies.map((reply) => (
                            <li key={reply.id} className="border-b border-gray-700 py-2">
                                <p className="text-lg text-orange-300">
                                    {reply.content}
                                </p>
                                <p className="text-gray-400 text-sm">Kirjoittaja: {reply.author.username}</p>
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-400">Ei vastauksia vielä.</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default RepliesList;
