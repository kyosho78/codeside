import React, { useEffect, useState } from "react";
import { fetchTopics } from "../Forum/services/ForumService";
import { Link } from "react-router-dom";

const ForumList = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        fetchTopics().then(setTopics);
    }, []);

    return (
        <div className="bg-blue-900 text-white min-h-screen p-6">
            <div className="max-w-screen-lg mx-auto">
                {/* Aloitusosio */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-yellow-400 border-b-4 border-yellow-400 inline-block py-2">Keskustelu Foorumi</h1>
                </div>

                {/* Aihealueet */}
                <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-orange-300 mb-4">Foorumin aihealueet</h2>
                    <ul className="space-y-4">
                        {topics.map((topic) => (
                            <li key={topic.id} className="border-b-2 border-blue-700 py-2">
                                <Link 
                                    to={`/threads/${topic.id}`} 
                                    className="text-lg text-yellow-300 hover:text-orange-500"
                                >
                                    {topic.header}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ForumList;
