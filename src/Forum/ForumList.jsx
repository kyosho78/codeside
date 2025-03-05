import React, { useEffect, useState } from "react";
import { fetchTopics } from "../Forum/services/ForumService";
import { Link } from "react-router-dom";

const ForumList = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        fetchTopics().then(setTopics);
    }, []);

    return (
        <div>
            <h2>Foorumin aihealueet</h2>
            <ul>
                {topics.map((topic) => (
                    <li key={topic.id}>
                        <Link to={`/threads/${topic.id}`}>{topic.header}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ForumList;
