{/*Yksittäisen vastauksen muokkaus - Jani*/}
{/* Forum/muokkaaVastausta.jsx */}

import React, { useState } from "react";

const EditReplyForm = ({ initialContent, onCancel, onSave }) => {
    const [editedContent, setEditedContent] = useState(initialContent);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editedContent.trim() !== "") {

            onSave(editedContent);
        } else {
            alert("Vastaus ei voi olla tyhjä."); 
        }
    };

    return (

        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/70 z-50">
            <div className="bg-gray-800 text-white p-6 rounded-lg max-w-lg w-full shadow-lg relative">
                <h3 className="text-xl text-white mb-4">Muokkaa vastausta</h3> 
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded-md mb-4" 
                        rows="4" 
                        required                     />
                    <div className="flex justify-end space-x-2 mt-2"> 
                        <button
                            type="button"
                            onClick={onCancel}
                            className="!bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded" 
                        >
                            Peruuta
                        </button>
                        <button
                            type="submit"
                            className="!bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" 
                        >
                            Tallenna
                        </button>
                    </div>
                </form>
            </div>
        </div>
       
    );
};

export default EditReplyForm;