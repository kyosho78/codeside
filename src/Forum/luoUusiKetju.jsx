{/*Uuden ketjun luonti -  Jani*/}

import React, { useState } from "react";
import { createThread } from "./services/ForumService";

const NewThreadForm = ({ topicId, userId, closeModal, onThreadCreated }) => {
    const [header, setHeader] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(null);
    console.log("Uusiketju komp");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const newThread = {
                header,
                content,
                aihealue: topicId,
                author: userId,
            };
            await createThread(newThread);
            onThreadCreated();
            closeModal(); 
        } catch (err) {
            setError("Virhe ketjun luonnissa. Yritä uudelleen.");
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/70 z-50">
            <div className="bg-gray-800 text-white p-6 rounded-lg max-w-lg w-full shadow-lg relative">
         
                <button onClick={closeModal} className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl">×</button>
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
                    <button type="submit" className="!bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                        Luo ketju
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewThreadForm;
