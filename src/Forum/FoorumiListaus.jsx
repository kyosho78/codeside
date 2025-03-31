import React, { useEffect, useState } from "react";
import { fetchTopics } from "./services/ForumService";
import { Link } from "react-router-dom";

const ForumList = () => {
    const [topics, setTopics] = useState([]);
    console.log("Forumilista");

    useEffect(() => {
        fetchTopics().then(setTopics);
    }, []);

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
            <div className="relative overflow-x-auto flex-grow p-8">
                {/* Aloitusosio */}
                <div className="text-center mb-10 mt-15">
                    <h1 className="text-3xl font-bold text-left mb-4">Keskustelu Foorumi</h1>
                </div>
    
                {/* Aihealueet */}
                <div>
                    <h2 className="text-2xl font-semibold text-blue-400 mb-4">Foorumin aihealueet</h2>
                    <ul className="space-y-4">
                        {topics.map((topic) => (
                            <li key={topic.id} className="border-b border-gray-700 py-2">
                                <Link 
                                    to={`/threads/${topic.id}`} 
                                    className="text-lg text-orange-300 hover:text-blue-500"
                                >
                                    {topic.header}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
    
            {/* Footer */}
            <footer className="mt-10 py-4 bg-gray-800 text-center text-gray-400">
                <p>&copy; 2025 Codesite. Kaikki oikeudet pidätetään.</p>
            </footer>
        </div>
    );
};
export default ForumList;
