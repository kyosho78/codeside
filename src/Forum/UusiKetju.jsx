import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createThread } from "./services/ForumService"; // Importoi API-funktio

const NewThreadForm = () => {
    const { topicId, userId } = useParams(); // Haetaan aihealueen ID reitistä
    const navigate = useNavigate(); // Navigointi uudelle sivulle
    const [header, setHeader] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(null);
    console.log("Uusiketju");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const newThread = {
                header,
                content,
                aihealue: topicId, // Aihealueen ID mukaan
                author: userId,
            };
            await createThread(newThread); // Luo uusi ketju API:n kautta
            navigate(`/threads/${topicId}`); // Palataan ketjulistaukseen
        } catch (err) {
            setError("Virhe ketjun luonnissa. Yritä uudelleen.");
        }
    };

    return (
        <div className="bg-gray-800 text-white p-6 rounded-lg max-w-lg mx-auto mt-10">
            <h2 className="text-xl font-bold mb-4">Luo uusi ketju</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Otsikko:</label>
                    <input
                        type="text"
                        value={header}
                        onChange={(e) => setHeader(e.target.value)}
                        className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Sisältö:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                    Luo ketju
                </button>
            </form>
        </div>
    );
};

export default NewThreadForm;
