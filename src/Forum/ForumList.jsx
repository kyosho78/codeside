import React, { useEffect, useState } from "react";
import { fetchTopics } from "../Forum/services/ForumService";
import { Link } from "react-router-dom";

const ForumList = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        fetchTopics().then(setTopics);
    }, []);

    return (
        <div className="bg-gray-900 text-white min-h-screen p-6">
            <div class="relative overflow-x-auto">
                {/* Aloitusosio */}
                <div className="text-center mb-10">
                <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Keskustelu Foorumi</span></h1>
                </div>

                {/* Aihealueet */}
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                </table>
            </div>
        </div>
    );
};

export default ForumList;
