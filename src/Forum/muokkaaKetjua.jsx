{/*Ketjun aloituksen muokkaus -  Jani*/}

import React, { useState } from "react";
import { editThread } from "./services/ForumService";

const EditThreadForm = ({ thread, userId, onUpdate, onClose }) => {
    const [newContent, setNewContent] = useState(thread.content);
    const isOwner = thread.author.id === userId; // Käyttäjä on ketjun luoja
    
    const handleEdit = async (e) => {
        e.preventDefault();
        if (!isOwner) return alert("Vain ketjun luoja voi muokata tätä viestiä!");

        try {
            await editThread(thread.id, newContent);
            onUpdate(); // Päivittää ketjutiedot listassa
            onClose();  // Sulkee muokkausikkunan
        } catch (error) {
            console.error("edit komponent: Virhe ketjun muokkaamisessa:", error);
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/70 z-50">
            <div className="bg-gray-800 text-white p-6 rounded-lg max-w-lg w-full shadow-lg relative">
                <h3 className="text-xl text-white">Muokkaa sisältöä</h3>
                <form onSubmit={handleEdit}>
                    <textarea
                        className="w-full bg-gray-700 text-white p-2"
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                        required
                    />
                    <div className="flex justify-end mt-2">
                        <button type="button" className="!bg-red-500 px-4 py-2 rounded" onClick={onClose}>Peruuta</button>
                        <button type="submit" className="!bg-blue-500 px-4 py-2 rounded ml-2">Tallenna</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditThreadForm;